import{L as se,n as et,f as tt,E as Ve,a as I,h as Ie,k as mt,j as _,p as He}from"./index-A7yJOmGz.js";import{m as $e,V as gt}from"./ViewControls-5vCBxKEO.js";import{S as _e,U as Ae,W as wt,O as vt}from"./OrbitControls-Cj2r35lJ.js";import{S as xt,U as nt,V as it,I as yt,F as Oe,a as Te,b as ue,W as bt,B as Re,c as st,d as W,M as ze,e as we,L as St,f as Mt,g as ot,h as Et,P as _t,G as de,C as Ue,R as At,i as rt,j as at,k as ct,l as zt,m as Ne,O as Lt,n as Ct,D as lt,o as Ut,p as Bt,q as Dt,r as Pt,s as qe,t as jt}from"./three.core-BWIxiL6S.js";import{f as Ot}from"./feature-DzWSY_RA.js";import{w as Xe}from"./countries-110m-RNRDBcvh.js";import"./engraving-igMGW1iu.js";import"./lexiconShards-CEdnDw2c.js";Ae.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new it(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};_e.line={uniforms:nt.merge([Ae.common,Ae.fog,Ae.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class dt extends xt{constructor(e){super({type:"LineMaterial",uniforms:nt.clone(_e.line.uniforms),vertexShader:_e.line.vertexShader,fragmentShader:_e.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Ye=new Re,Se=new W;class ut extends yt{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],o=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],a=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(a),this.setAttribute("position",new Oe(e,3)),this.setAttribute("uv",new Oe(o,2))}applyMatrix4(e){const o=this.attributes.instanceStart,a=this.attributes.instanceEnd;return o!==void 0&&(o.applyMatrix4(e),a.applyMatrix4(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let o;e instanceof Float32Array?o=e:Array.isArray(e)&&(o=new Float32Array(e));const a=new Te(o,6,1);return this.setAttribute("instanceStart",new ue(a,3,0)),this.setAttribute("instanceEnd",new ue(a,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let o;e instanceof Float32Array?o=e:Array.isArray(e)&&(o=new Float32Array(e));const a=new Te(o,6,1);return this.setAttribute("instanceColorStart",new ue(a,3,0)),this.setAttribute("instanceColorEnd",new ue(a,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new bt(e.geometry)),this}fromLineSegments(e){const o=e.geometry;return this.setPositions(o.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Re);const e=this.attributes.instanceStart,o=this.attributes.instanceEnd;e!==void 0&&o!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ye.setFromBufferAttribute(o),this.boundingBox.union(Ye))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new st),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,o=this.attributes.instanceEnd;if(e!==void 0&&o!==void 0){const a=this.boundingSphere.center;this.boundingBox.getCenter(a);let r=0;for(let i=0,n=e.count;i<n;i++)Se.fromBufferAttribute(e,i),r=Math.max(r,a.distanceToSquared(Se)),Se.fromBufferAttribute(o,i),r=Math.max(r,a.distanceToSquared(Se));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}const Be=new we,Ze=new W,Ke=new W,T=new we,R=new we,Z=new we,De=new W,Pe=new Mt,N=new St,Je=new W,Me=new Re,Ee=new st,K=new we;let Q,oe;function Qe(l,e,o){return K.set(0,0,-e,1).applyMatrix4(l.projectionMatrix),K.multiplyScalar(1/K.w),K.x=oe/o.width,K.y=oe/o.height,K.applyMatrix4(l.projectionMatrixInverse),K.multiplyScalar(1/K.w),Math.abs(Math.max(K.x,K.y))}function Tt(l,e){const o=l.matrixWorld,a=l.geometry,r=a.attributes.instanceStart,i=a.attributes.instanceEnd,n=Math.min(a.instanceCount,r.count);for(let t=0,c=n;t<c;t++){N.start.fromBufferAttribute(r,t),N.end.fromBufferAttribute(i,t),N.applyMatrix4(o);const g=new W,f=new W;Q.distanceSqToSegment(N.start,N.end,f,g),f.distanceTo(g)<oe*.5&&e.push({point:f,pointOnLine:g,distance:Q.origin.distanceTo(f),object:l,face:null,faceIndex:t,uv:null,uv1:null})}}function Rt(l,e,o){const a=e.projectionMatrix,i=l.material.resolution,n=l.matrixWorld,t=l.geometry,c=t.attributes.instanceStart,g=t.attributes.instanceEnd,f=Math.min(t.instanceCount,c.count),m=-e.near;Q.at(1,Z),Z.w=1,Z.applyMatrix4(e.matrixWorldInverse),Z.applyMatrix4(a),Z.multiplyScalar(1/Z.w),Z.x*=i.x/2,Z.y*=i.y/2,Z.z=0,De.copy(Z),Pe.multiplyMatrices(e.matrixWorldInverse,n);for(let u=0,v=f;u<v;u++){if(T.fromBufferAttribute(c,u),R.fromBufferAttribute(g,u),T.w=1,R.w=1,T.applyMatrix4(Pe),R.applyMatrix4(Pe),T.z>m&&R.z>m)continue;if(T.z>m){const H=T.z-R.z,F=(T.z-m)/H;T.lerp(R,F)}else if(R.z>m){const H=R.z-T.z,F=(R.z-m)/H;R.lerp(T,F)}T.applyMatrix4(a),R.applyMatrix4(a),T.multiplyScalar(1/T.w),R.multiplyScalar(1/R.w),T.x*=i.x/2,T.y*=i.y/2,R.x*=i.x/2,R.y*=i.y/2,N.start.copy(T),N.start.z=0,N.end.copy(R),N.end.z=0;const U=N.closestPointToPointParameter(De,!0);N.at(U,Je);const D=ot.lerp(T.z,R.z,U),k=D>=-1&&D<=1,A=De.distanceTo(Je)<oe*.5;if(k&&A){N.start.fromBufferAttribute(c,u),N.end.fromBufferAttribute(g,u),N.start.applyMatrix4(n),N.end.applyMatrix4(n);const H=new W,F=new W;Q.distanceSqToSegment(N.start,N.end,F,H),o.push({point:F,pointOnLine:H,distance:Q.origin.distanceTo(F),object:l,face:null,faceIndex:u,uv:null,uv1:null})}}}class Nt extends ze{constructor(e=new ut,o=new dt({color:Math.random()*16777215})){super(e,o),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,o=e.attributes.instanceStart,a=e.attributes.instanceEnd,r=new Float32Array(2*o.count);for(let n=0,t=0,c=o.count;n<c;n++,t+=2)Ze.fromBufferAttribute(o,n),Ke.fromBufferAttribute(a,n),r[t]=t===0?0:r[t-1],r[t+1]=r[t]+Ze.distanceTo(Ke);const i=new Te(r,2,1);return e.setAttribute("instanceDistanceStart",new ue(i,1,0)),e.setAttribute("instanceDistanceEnd",new ue(i,1,1)),this}raycast(e,o){const a=this.material.worldUnits,r=e.camera;r===null&&!a&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const i=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Q=e.ray;const n=this.matrixWorld,t=this.geometry,c=this.material;oe=c.linewidth+i,t.boundingSphere===null&&t.computeBoundingSphere(),Ee.copy(t.boundingSphere).applyMatrix4(n);let g;if(a)g=oe*.5;else{const m=Math.max(r.near,Ee.distanceToPoint(Q.origin));g=Qe(r,m,c.resolution)}if(Ee.radius+=g,Q.intersectsSphere(Ee)===!1)return;t.boundingBox===null&&t.computeBoundingBox(),Me.copy(t.boundingBox).applyMatrix4(n);let f;if(a)f=oe*.5;else{const m=Math.max(r.near,Me.distanceToPoint(Q.origin));f=Qe(r,m,c.resolution)}Me.expandByScalar(f),Q.intersectsBox(Me)!==!1&&(a?Tt(this,o):Rt(this,r,o))}onBeforeRender(e){const o=this.material.uniforms;o&&o.resolution&&(e.getViewport(Be),this.material.uniforms.resolution.value.set(Be.z,Be.w))}}const je="#EFECE6",We="#EAE5D9",Le="#C29D59";function J(l,e){return(l-1)*e-e*1.5}function Wt(l,e=120){const o=new Map;let a=350,r=235;for(const n of se){const t=l.filter(f=>f.z_layer===n),c=Math.max(1,Math.ceil(Math.sqrt(t.length*1.35))),g=Math.ceil(t.length/c);a=Math.max(a,c*115+54),r=Math.max(r,g*100+32),t.forEach((f,m)=>{const u=Math.floor(m/c),v=Math.min(c,t.length-u*c),x=(m%c-(v-1)/2)*108+(n%2===0?23:-13),U=J(n,e),D=(u-(g-1)/2)*102+(n%2===0?-13:12);o.set(f.id,new W(x,U,D))})}const i=Math.max(a,r,370);for(const n of l){const t=n.spatial?.lat,c=n.spatial?.lng;n.z_layer===1&&typeof t=="number"&&typeof c=="number"&&Math.abs(t)<=90&&Math.abs(c)<=180&&o.set(n.id,new W(c/180*i*.44,J(1,e),-t/90*i*.4))}for(const n of se)o.set(`layer:${n}`,new W(i/2-17,J(n,e),-i/2+34));return{positions:o,span:i,spacing:e}}function ge(l,e,o){const a=new at().setAttribute("position",new Oe(l,3));return new Dt(a,new ct({color:e,transparent:!0,opacity:o,depthWrite:!1}))}function kt(l){const e=Ot(Xe,Xe.objects.countries),o=[];for(const a of e.features){const r=a.geometry;if(!r||r.type!=="Polygon"&&r.type!=="MultiPolygon")continue;const i=r.type==="Polygon"?[r.coordinates]:r.coordinates;for(const n of i)for(const t of n)for(let c=1;c<t.length;c++){const[g,f]=t[c-1],[m,u]=t[c];Math.abs(g-m)>180||o.push(g/180*l*.44,1,-f/90*l*.4,m/180*l*.44,1,-u/90*l*.4)}}return ge(o,We,.45)}function Ft(l,e,o){const a=new de,r=new ze(new Ct(e,e),new Ne({color:je,transparent:!0,opacity:.16,side:lt,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.renderOrder=-3;const i=e/2,n=i*.8,t=[],c=[],g=[],f=[[-i,-i],[i,-i],[i,i],[-i,i]];for(let u=0;u<f.length;u++){const[v,x]=f[u],[U,D]=f[(u+1)%f.length];t.push(v,0,x,U,0,D);const k=v*.9,A=x*.9;t.push(k-5,0,A,k+5,0,A,k,0,A-5,k,0,A+5)}for(const u of[n*.56,n,n+9]){const v=u<n?c:t;for(let x=0;x<96;x++){const U=x*Math.PI/48,D=(x+1)*Math.PI/48;v.push(Math.cos(U)*u,0,Math.sin(U)*u,Math.cos(D)*u,0,Math.sin(D)*u)}}for(let u=0;u<72;u++){const v=u*Math.PI/36,x=Math.cos(v),U=Math.sin(v),D=u%6===0;D&&c.push(0,0,0,x*n,0,U*n),g.push(x*(n+(D?2:6)),0,U*(n+(D?2:6)),x*(n+9),0,U*(n+9))}const m=[ge(c,je,.12),ge(t,je,.55),ge(g,Le,.85)];return m.forEach(u=>{u.renderOrder=-2}),a.position.y=J(l,o),a.add(r,...m),l===1&&a.add(kt(e)),a}function Gt(l){switch(l){case 1:return new qe(8.3);case 2:return new jt(10);case 3:return new qe(10,1);case 4:return new Pt(10)}}function Vt(){const l=new Ut;for(let o=0;o<16;o++){const a=o*Math.PI/8,r=o%2?4:o%4?10:15,i=Math.cos(a)*r,n=Math.sin(a)*r;o?l.lineTo(i,n):l.moveTo(i,n)}l.closePath();const e=new ze(new Bt(l),new Ne({color:Le,side:lt}));return e.rotation.x=-Math.PI/2,e}function ie(l){l.traverse(e=>{(e instanceof ze||e instanceof rt)&&(e.geometry.dispose(),e.material.dispose())}),l.clear()}const ft={structure:{color:We,width:1},confirmed:{color:Ve.confirmed.color,width:1.75},unverified:{color:Le,width:1.25,pattern:[6,4.5]},refuted:{color:Ve.refuted.color,width:1.5,pattern:[8,3,1.7,3]},fiction:{color:"#C94A6A",width:1.25,pattern:[1.5,7]}};function It(l,e,o,a){const r=ft[a].pattern,i=e.distanceTo(o);if(!r||i===0){l.push(...e.toArray(),...o.toArray());return}for(let n=0,t=0;n<i;t++){const c=Math.min(n+r[t%r.length],i);t%2===0&&l.push(...e.clone().lerp(o,n/i).toArray(),...e.clone().lerp(o,c/i).toArray()),n=c}if(a==="refuted"){const{x:n,y:t,z:c}=e.clone().lerp(o,.5);l.push(n-4,t,c-4,n+4,t,c+4,n+4,t,c-4,n-4,t,c+4)}}function Ht(l,e,o){const a=new Et,r=e.positions.size>200,i=new wt({alpha:!0,antialias:!r,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,r?.65:1.7)),i.domElement.setAttribute("aria-hidden","true"),l.appendChild(i.domElement);const n=new _t(34,1,1,Math.max(6500,e.span*8)),t=new vt(n,i.domElement);t.enableDamping=$e(1)>0,t.dampingFactor=.09,t.minPolarAngle=.2,t.maxPolarAngle=Math.PI*.76,t.minDistance=210,t.maxDistance=Math.max(4600,e.span*4);const c=new W,g=new W,f=new W;let m=1,u=1,v=!0,x=null;t.addEventListener("start",()=>{x=null}),t.addEventListener("change",()=>{v=!0});function U(){m=Math.max(1,l.clientWidth),u=Math.max(1,l.clientHeight),n.aspect=m/u,n.updateProjectionMatrix(),i.setSize(m,u,!1),v=!0;const d=Math.max(1.14,1.32/n.aspect,e.span/320);c.set(565,469,620).multiplyScalar(d)}U(),n.position.copy(c),t.update(),n.updateMatrixWorld(!0);const D=new ResizeObserver(U);D.observe(l);const k=new de;for(const d of se)k.add(Ft(d,e.span,e.spacing));const A=new de,H=new de,F=new de,re=new de;a.add(k,H,A,F,re);const ae=new Map,fe=[],ve=new Ue("#101722"),X=new Ue;let $=null,pe=()=>{},Y=()=>{};const he=new At,ee=new it;let ce=null,s=0,b=null;function z(d){const p=i.domElement.getBoundingClientRect();ee.set((d.clientX-p.left)/p.width*2-1,-(d.clientY-p.top)/p.height*2+1),n.updateMatrixWorld(),he.setFromCamera(ee,n);const E=he.intersectObjects(A.children,!1)[0];return!E||E.instanceId===void 0?null:E.object.userData.nodeIds?.[E.instanceId]??null}function xe(d){d.buttons||(cancelAnimationFrame(s),s=requestAnimationFrame(()=>{const p=z(d);p!==ce&&(ce=p,pe(p))}))}function le(d){cancelAnimationFrame(s),!(d.relatedTarget instanceof HTMLElement&&d.relatedTarget.closest(".constellation-node"))&&(ce=null,pe(null))}function ke(d){b={x:d.clientX,y:d.clientY}}function Fe(d){if(!b)return;if(Math.hypot(d.clientX-b.x,d.clientY-b.y)>5){b=null;return}const p=z(d);p&&Y(p,d.shiftKey),b=null}i.domElement.addEventListener("pointermove",xe),i.domElement.addEventListener("pointerleave",le),i.domElement.addEventListener("pointerdown",ke),i.domElement.addEventListener("pointerup",Fe);function me(d,p,E){v=!0;const w=$e(E);if(!w){n.position.copy(d),t.target.copy(p),t.update();return}x={at:performance.now(),duration:w,start:n.position.clone(),end:d.clone(),target:t.target.clone(),endTarget:p.clone()}}function pt(d){if(document.documentElement.dataset.astraiaActive==="false")return;if(x){const w=Math.min(1,(d-x.at)/x.duration),L=1-(1-Math.max(0,w))**3;n.position.lerpVectors(x.start,x.end,L),t.target.lerpVectors(x.target,x.endTarget,L),w>=1&&(x=null)}if(t.update(),!v&&!x)return;i.render(a,n);const p=[];for(const[w,L]of o){const y=e.positions.get(w);if(!y)continue;const C=L.classList.contains("constellation-layer");f.copy(y).project(n);const S=(!C||!$||w===`layer:${$}`)&&Math.abs(f.x)<1.04&&Math.abs(f.y)<1.04&&Math.abs(f.z)<=1;if(L.style.visibility=S?"visible":"hidden",S){const P=Math.round((f.x+1)*m/2),M=C?Math.max(18,Math.min(P,m-L.offsetWidth-19)):P,j=Math.round((1-f.y)*u/2);if(L.style.transform=`translate3d(${M}px, ${j}px, 0)`,L.classList.contains("constellation-node")&&L.dataset.label==="true"){const h=L.querySelector(".constellation-node-label");h&&p.push({element:h,x:M,y:j,priority:Number(L.dataset.labelPriority??3)})}}}const E=new Map;p.sort((w,L)=>w.priority-L.priority);for(const w of p){const L=Math.min(180,Math.max(55,[...w.element.textContent??""].reduce((B,O)=>B+(O.charCodeAt(0)>255?12:7),14))),y=w.x+L+30>m?w.x-L-16:w.x+14,C=Math.max(16,Math.min(y,m-L-16)),S=C+L,P=C-(w.x+14);let M=0,j=!1;for(let B=0;B<20;B++){const O=B===0?0:Math.ceil(B/2)*24*(B%2?-1:1),V=w.y+O;if(V<58||V>u-90)continue;const q=Math.round(V/24);if(![q-1,q,q+1].some(ne=>(E.get(ne)??[]).some(([Ce,ye])=>C<ye&&S>Ce))){M=O,j=!0;break}}if(w.element.style.visibility=j?"visible":"hidden",!j)continue;const h=Math.round((w.y+M)/24),G=E.get(h)??[];G.push([C,S]),E.set(h,G),w.element.style.setProperty("--label-offset",`${M}px`),w.element.style.setProperty("--label-x",`${P}px`)}v=!1}return i.setAnimationLoop(pt),{updateGraph(d,p){v=!0,ie(A),ie(H),ae.clear(),fe.length=0;for(const y of se){const C=d.nodes.filter(M=>M.z_layer===y&&e.positions.has(M.id));if(!C.length)continue;const S=new zt(Gt(y),new Ne({color:"#ffffff"}),C.length);S.userData.nodeIds=C.map(M=>M.id);const P=new Lt;C.forEach((M,j)=>{const h=et(M);P.position.copy(e.positions.get(M.id)),P.rotation.set(.2,y*.38,.18),P.updateMatrix(),S.setMatrixAt(j,P.matrix),S.setColorAt(j,new Ue(h)),ae.set(M.id,{mesh:S,index:j,color:h,layer:y})}),S.instanceMatrix.needsUpdate=!0,S.instanceColor&&(S.instanceColor.needsUpdate=!0),A.add(S)}const E=new Map,w=y=>(p.neighbors.get(y.source)===0||p.neighbors.get(y.target)===0?2:0)+ +!!y.status,L=d.links.length>96?[...d.links].sort((y,C)=>w(C)-w(y)).slice(0,96):d.links;for(const y of L){const C=e.positions.get(y.source),S=e.positions.get(y.target);if(!C||!S)continue;const P=y.is_fictional_quarantine?"fiction":tt(y.status)??"structure",M=E.get(P)??[];M.push({link:y,from:C,to:S}),E.set(P,M)}for(const[y,C]of E){const S=[],P=C.map(({link:B,from:O,to:V})=>{const q=S.length/6;return It(S,O,V,y),{link:B,start:q,end:S.length/6}}),M=ft[y],j=new ut().setPositions(S).setColors(new Float32Array(S.length)),h=j.getAttribute("instanceColorStart"),G=j.getAttribute("instanceColorEnd");H.add(new Nt(j,new dt({vertexColors:!0,linewidth:M.width,depthWrite:!1}))),P.forEach(B=>fe.push({...B,startColors:h,endColors:G,color:M.color}))}},highlight(d,p,E,w,L,y){v=!0;const C=d.node?.id,S=new Set;for(const[h,G]of ae){const B=d.neighbors.get(h),O=!$||G.layer===$,V=!y||G.layer===y,q=O?y&&!V?.18:w.size?w.has(h)?1:.18:C&&B===void 0?.18:1:.05;X.set(L.has(h)?"#B3D0BF":G.color).lerp(ve,1-q),G.mesh.setColorAt(G.index,X),S.add(G.mesh)}for(const h of S)h.instanceColor&&(h.instanceColor.needsUpdate=!0);const P=new Set;for(const{link:h,startColors:G,endColors:B,start:O,end:V,color:q}of fe){const te=d.neighbors.get(h.source),ne=d.neighbors.get(h.target),Ce=te===0||ne===0,ye=e.positions.get(h.source),Ge=e.positions.get(h.target),ht=!$||ye&&Ge&&Math.abs(ye.y-J($,e.spacing))<1&&Math.abs(Ge.y-J($,e.spacing))<1?Ce?.9:!C||te!==void 0&&ne!==void 0?.48:.17:.03;X.set(q).lerp(ve,1-ht);for(let be=O;be<V;be++)G.setXYZ(be,X.r,X.g,X.b),B.setXYZ(be,X.r,X.g,X.b);P.add(G.data)}for(const h of P)h.needsUpdate=!0;ie(F);for(const[h,G]of[[E,p===E?.78:.35],[p===E?null:p,.78]]){const B=h?e.positions.get(h):void 0;if(!B)continue;if(h===E){const te=Vt();te.position.copy(B),te.position.y+=12,F.add(te)}if($)continue;const{x:O,z:V}=B,q=[O,J(1,e.spacing)-15,V,O,J(4,e.spacing)+18,V];for(const te of se){const ne=J(te,e.spacing)+2;q.push(O-5,ne,V,O+5,ne,V,O,ne,V-5,O,ne,V+5)}F.add(ge(q,We,G))}const M=E?e.positions.get(E):void 0;if(M&&!$&&(n.updateMatrixWorld(!0),f.copy(M).project(n),!p&&(Math.abs(f.x)>.85||Math.abs(f.y)>.83))){const h=M.clone().sub(t.target);me(n.position.clone().add(h),M,420)}ie(re);const j=[...w].map(h=>e.positions.get(h)).filter(h=>!!h);if(j.length>1){const h=new rt(new at().setFromPoints(j),new ct({color:Le,transparent:!0,opacity:.9}));re.add(h)}},solo(d){if(v=!0,$=d,k.children.forEach((p,E)=>{p.visible=!d||se[E]===d}),t.minPolarAngle=d?.001:.2,t.enableRotate=!d,d){const p=new W(0,J(d,e.spacing),0);me(p.clone().add(new W(0,Math.max(680,e.span*1.7),.01)),p,520)}else me(c,g,520)},reset:()=>me(c,g,460),invalidate:()=>{v=!0},interactions(d,p){pe=d,Y=p},zoom(d){const p=n.position.clone().sub(t.target),E=ot.clamp(p.length()*(d>0?.81:1.24),t.minDistance,t.maxDistance);me(p.setLength(E).add(t.target),t.target,315)},dispose(){i.setAnimationLoop(null),D.disconnect(),cancelAnimationFrame(s),i.domElement.removeEventListener("pointermove",xe),i.domElement.removeEventListener("pointerleave",le),i.domElement.removeEventListener("pointerdown",ke),i.domElement.removeEventListener("pointerup",Fe),t.dispose(),ie(k),ie(H),ie(A),ie(F),ie(re),i.dispose(),i.forceContextLoss(),i.domElement.remove()}}}function tn({graph:l,evidenceGraph:e,allNodes:o,selection:a,sceneSelection:r,hoveredId:i,spread:n,activeLayer:t,soloLayer:c,codeIds:g,commonIds:f,evidence:m,onSelect:u,onHover:v,onLayer:x,onSolo:U,onEvidence:D}){const k=I.useRef(null),A=I.useRef(null),H=I.useRef(new Map),[F,re]=I.useState(!1),[ae,fe]=I.useState(!1),[ve,X]=I.useState(!1),$=ve&&!!r.compareNode,pe=I.useMemo(()=>{const s={confirmed:0,unverified:0,refuted:0};for(const b of e.links){const z=tt(b.status);z&&s[z]++}return s},[e.links]),Y=I.useMemo(()=>{if(c)return Ie({nodes:l.nodes.filter(z=>z.z_layer===c).slice(0,600),links:l.links},!1);const s=mt(l,r);if(!g.size)return s;const b=new Map(s.nodes.map(z=>[z.id,z]));for(const z of l.nodes){if(b.size>=600)break;g.has(z.id)&&b.set(z.id,z)}return Ie({nodes:[...b.values()],links:l.links},!1)},[l,r,c,g]),he=o.length<=72?o:Y.nodes,ee=I.useMemo(()=>Wt(he,n),[he,n]);I.useEffect(()=>{const s=k.current;if(!s)return;const b=()=>X(s.clientWidth<=760),z=new ResizeObserver(b);return b(),z.observe(s),()=>z.disconnect()},[]),I.useEffect(()=>{if(k.current)try{const s=Ht(k.current,ee,H.current);return A.current=s,re(!0),()=>{s.dispose(),A.current=null}}catch(s){console.warn("Unable to initialize the constellation",s),fe(!0)}},[ee]),I.useEffect(()=>A.current?.updateGraph(Y,r),[Y,r,ee]),I.useEffect(()=>A.current?.interactions(v,u),[v,u,ee]),I.useEffect(()=>{A.current?.solo(c)},[c,ee]),I.useEffect(()=>A.current?.highlight(a,i,r.node?.id??null,g,f,t),[a,Y,ee,i,r.node,g,f,c,t]),I.useEffect(()=>A.current?.invalidate(),[$,a,i]);function ce(s,b){b?H.current.set(s,b):H.current.delete(s),A.current?.invalidate()}return _.jsxs(_.Fragment,{children:[_.jsx("div",{className:"scene-viewport constellation-viewport",ref:k,"data-ready":F,"data-compact":$,"data-point-count":Y.nodes.length,"data-line-count":Y.links.length}),ae&&_.jsx("div",{className:"stage-message",role:"alert",children:"无法启动语义星图。请在支持 WebGL 的浏览器中打开。"}),F&&!ae&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"constellation-labels","aria-label":"星图标记","data-solo":!!c,children:[se.map(s=>_.jsxs("div",{className:"constellation-layer",ref:b=>ce(`layer:${s}`,b),style:{"--node-color":He[s].color},children:[_.jsxs("button",{type:"button",onClick:()=>x(s),onDoubleClick:()=>U(s),children:[_.jsxs("strong",{children:["L",s]})," ",He[s].short]}),_.jsx("button",{type:"button",className:"slice-flatten","aria-pressed":c===s,"aria-label":c===s?`切片 L${s} 返回 3D`:`平铺切片 L${s}`,onClick:()=>U(s),children:c===s?"3D":"2D"})]},s)),Y.nodes.filter((s,b)=>b<80||s.id===a.node?.id||s.id===r.compareNode?.id||s.id===i||f.has(s.id)).map(s=>{const b=a.neighbors.get(s.id),z=s.id===r.node?.id||s.id===r.compareNode?.id,xe=z||f.has(s.id)||s.id===i||!$&&(b===1||!!c);return _.jsx("button",{ref:le=>ce(s.id,le),type:"button",className:"constellation-node","data-node-id":s.id,"data-common":f.has(s.id),"data-code-highlight":g.has(s.id),"data-emphasis":z?"selected":b===1?"related":"normal","data-label":xe,"data-label-priority":z?0:f.has(s.id)?1:s.id===i?2:3,title:s.title,"aria-label":`星图节点 ${s.title}`,"aria-pressed":z,onMouseEnter:()=>v(s.id),onMouseLeave:()=>v(null),onFocus:()=>v(s.id),onBlur:()=>v(null),onClick:le=>u(s.id,le.shiftKey),style:{"--node-color":et(s)},children:_.jsxs("span",{className:"constellation-node-label","aria-hidden":"true",children:[_.jsxs("b",{children:["L",s.z_layer]})," ",s.title]})},s.id)})]}),_.jsx(gt,{onReset:()=>A.current?.reset(),onZoom:s=>A.current?.zoom(s)}),_.jsxs("div",{className:"scene-footer constellation-footer",children:[_.jsx("span",{className:"scene-gesture",children:$?"其余关联点悬停显名":"拖动旋转 · 滚轮缩放"}),_.jsxs("div",{className:"connection-controls",children:[_.jsxs("span",{className:"structure-key",children:[_.jsx("i",{}),"结构线"]}),_.jsx("div",{className:"evidence-legend",role:"group","aria-label":"核验连线筛选",title:"信源、年代和图层筛选后的关系数",children:[["confirmed","已证实"],["unverified","待核实"],["refuted","已驳回"]].map(([s,b])=>_.jsxs("button",{type:"button",className:`legend-${s}`,"aria-pressed":m.has(s),onClick:()=>D(s),children:[_.jsx("span",{"aria-hidden":"true",className:"legend-check",children:m.has(s)?"✓":""}),_.jsx("i",{"aria-hidden":"true"}),b," ",_.jsx("span",{className:"legend-count",children:pe[s]})]},s))})]})]})]})]})}export{tn as default};
