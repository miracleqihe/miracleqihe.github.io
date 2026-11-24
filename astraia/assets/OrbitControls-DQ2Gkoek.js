import{N as $a,Q as Ut,u as ja,C as Qe,T as ga,d as We,X as Qa,Y as qe,e as mt,Z as ci,_ as xt,$ as Hn,f as nn,a0 as li,a1 as Kt,a2 as ot,a3 as Jt,a4 as cn,a5 as Ht,D as Ct,a6 as Et,a7 as an,a8 as Mn,a9 as Ja,aa as er,V as Ze,P as _n,ab as tr,ac as Pn,ad as Pt,ae as vn,af as Qn,ag as rn,ah as on,ai as va,aj as nr,ak as ir,al as Sa,am as Dt,an as Vn,ao as Wt,ap as Sn,aq as ar,ar as rr,as as jt,at as or,au as sr,av as cr,aw as lr,ax as fr,ay as dr,az as ur,aA as pr,aB as hr,aC as _r,aD as mr,aE as xr,aF as gr,aG as vr,aH as Sr,aI as Er,aJ as Mr,aK as Dn,aL as dn,aM as br,aN as tn,aO as Tr,aP as Ar,aQ as Rr,aR as Cr,aS as Ea,aT as Pr,aU as Dr,aV as Lr,aW as Ma,aX as Be,aY as Ur,aZ as wr,a_ as yr,S as yt,j as Jn,z as mn,M as Vt,a$ as ba,b0 as wt,b1 as Rt,b2 as Ta,b3 as Aa,b4 as Ra,b5 as En,b6 as Ca,b7 as Pa,b8 as Da,n as La,b9 as Ir,ba as Nr,bb as Or,bc as Fr,bd as Ua,be as Gt,bf as Br,bg as Gr,bh as Hr,bi as Ln,bj as Un,bk as wn,bl as yn,bm as Ke,bn as fi,bo as di,bp as ui,bq as pi,br as hi,bs as _i,bt as mi,bu as xi,bv as gi,bw as vi,bx as Si,by as Ei,bz as Mi,bA as bi,bB as Ti,bC as Ai,bD as Ri,bE as Ci,bF as Pi,bG as Di,bH as Li,bI as Ui,bJ as wi,bK as yi,bL as Ii,bM as Ni,bN as Oi,bO as Fi,bP as kn,bQ as zn,bR as Wn,bS as Xn,bT as Yn,bU as Kn,bV as qn,bW as Vr,bX as Bi,bY as kr,bZ as xn,b_ as zr,b$ as Gi,c0 as Hi,A as Vi,c1 as Zn,c2 as $n,c3 as Wr,c4 as wa,U as Xr,c5 as bn,c6 as Yr,c7 as Kr,c8 as ya,c9 as Ia,ca as ki,H as Na,cb as zi,cc as Oa,cd as sn,ce as qt,v as qr,m as Zr,cf as $r,cg as jr,ch as Qr,ci as Wi,cj as Jr,ck as eo,cl as to,cm as no,cn as io,co as ao,cp as ro,cq as oo,cr as so,cs as co,ct as lo,cu as fo,cv as uo,cw as _t,cx as po,cy as ho,cz as _o,cA as mo,cB as xo,cC as go,K as Yt,cD as Xt,cE as Xi,cF as Yi,cG as vo,g as So}from"./three.core-CBkK6buM.js";function Fa(){let e=null,n=!1,t=null,i=null;function s(r,h){t(r,h),i=e.requestAnimationFrame(s)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(s),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function Eo(e){const n=new WeakMap;function t(d,A){const S=d.array,L=d.usage,v=S.byteLength,E=e.createBuffer();e.bindBuffer(A,E),e.bufferData(A,S,L),d.onUploadCallback();let T;if(S instanceof Float32Array)T=e.FLOAT;else if(typeof Float16Array<"u"&&S instanceof Float16Array)T=e.HALF_FLOAT;else if(S instanceof Uint16Array)d.isFloat16BufferAttribute?T=e.HALF_FLOAT:T=e.UNSIGNED_SHORT;else if(S instanceof Int16Array)T=e.SHORT;else if(S instanceof Uint32Array)T=e.UNSIGNED_INT;else if(S instanceof Int32Array)T=e.INT;else if(S instanceof Int8Array)T=e.BYTE;else if(S instanceof Uint8Array)T=e.UNSIGNED_BYTE;else if(S instanceof Uint8ClampedArray)T=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+S);return{buffer:E,type:T,bytesPerElement:S.BYTES_PER_ELEMENT,version:d.version,size:v}}function i(d,A,S){const L=A.array,v=A.updateRanges;if(e.bindBuffer(S,d),v.length===0)e.bufferSubData(S,0,L);else{v.sort((T,B)=>T.start-B.start);let E=0;for(let T=1;T<v.length;T++){const B=v[E],U=v[T];U.start<=B.start+B.count+1?B.count=Math.max(B.count,U.start+U.count-B.start):(++E,v[E]=U)}v.length=E+1;for(let T=0,B=v.length;T<B;T++){const U=v[T];e.bufferSubData(S,U.start*L.BYTES_PER_ELEMENT,L,U.start,U.count)}A.clearUpdateRanges()}A.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function r(d){d.isInterleavedBufferAttribute&&(d=d.data);const A=n.get(d);A&&(e.deleteBuffer(A.buffer),n.delete(d))}function h(d,A){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const L=n.get(d);(!L||L.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const S=n.get(d);if(S===void 0)n.set(d,t(d,A));else if(S.version<d.version){if(S.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(S.buffer,d,A),S.version=d.version}}return{get:s,remove:r,update:h}}var Mo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bo=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,To=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ao=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ro=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Co=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Po=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Do=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lo=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Uo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wo=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Io=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,No=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Oo=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fo=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Go=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ho=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vo=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ko=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wo=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xo=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yo=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ko=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qo=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$o=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qo="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jo=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,es=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ts=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ns=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,is=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,as=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rs=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,os=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ss=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cs=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ls=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fs=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ds=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,us=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ps=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hs=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_s=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ms=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xs=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gs=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vs=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ss=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Es=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ms=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bs=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ts=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,As=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rs=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cs=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ps=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ds=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ls=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Us=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ws=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ys=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Is=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ns=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Os=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fs=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bs=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gs=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hs=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ks=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zs=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ws=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xs=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ys=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ks=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qs=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zs=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$s=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,js=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qs=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Js=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ec=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ic=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ac=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_c=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ec=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ac=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pc=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dc=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lc=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Uc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yc=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ic=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Oc=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bc=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gc=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hc=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zc=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xc=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yc=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kc=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zc=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$c=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jc=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qc=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,el=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Le={alphahash_fragment:Mo,alphahash_pars_fragment:bo,alphamap_fragment:To,alphamap_pars_fragment:Ao,alphatest_fragment:Ro,alphatest_pars_fragment:Co,aomap_fragment:Po,aomap_pars_fragment:Do,batching_pars_vertex:Lo,batching_vertex:Uo,begin_vertex:wo,beginnormal_vertex:yo,bsdfs:Io,iridescence_fragment:No,bumpmap_pars_fragment:Oo,clipping_planes_fragment:Fo,clipping_planes_pars_fragment:Bo,clipping_planes_pars_vertex:Go,clipping_planes_vertex:Ho,color_fragment:Vo,color_pars_fragment:ko,color_pars_vertex:zo,color_vertex:Wo,common:Xo,cube_uv_reflection_fragment:Yo,defaultnormal_vertex:Ko,displacementmap_pars_vertex:qo,displacementmap_vertex:Zo,emissivemap_fragment:$o,emissivemap_pars_fragment:jo,colorspace_fragment:Qo,colorspace_pars_fragment:Jo,envmap_fragment:es,envmap_common_pars_fragment:ts,envmap_pars_fragment:ns,envmap_pars_vertex:is,envmap_physical_pars_fragment:hs,envmap_vertex:as,fog_vertex:rs,fog_pars_vertex:os,fog_fragment:ss,fog_pars_fragment:cs,gradientmap_pars_fragment:ls,lightmap_pars_fragment:fs,lights_lambert_fragment:ds,lights_lambert_pars_fragment:us,lights_pars_begin:ps,lights_toon_fragment:_s,lights_toon_pars_fragment:ms,lights_phong_fragment:xs,lights_phong_pars_fragment:gs,lights_physical_fragment:vs,lights_physical_pars_fragment:Ss,lights_fragment_begin:Es,lights_fragment_maps:Ms,lights_fragment_end:bs,logdepthbuf_fragment:Ts,logdepthbuf_pars_fragment:As,logdepthbuf_pars_vertex:Rs,logdepthbuf_vertex:Cs,map_fragment:Ps,map_pars_fragment:Ds,map_particle_fragment:Ls,map_particle_pars_fragment:Us,metalnessmap_fragment:ws,metalnessmap_pars_fragment:ys,morphinstance_vertex:Is,morphcolor_vertex:Ns,morphnormal_vertex:Os,morphtarget_pars_vertex:Fs,morphtarget_vertex:Bs,normal_fragment_begin:Gs,normal_fragment_maps:Hs,normal_pars_fragment:Vs,normal_pars_vertex:ks,normal_vertex:zs,normalmap_pars_fragment:Ws,clearcoat_normal_fragment_begin:Xs,clearcoat_normal_fragment_maps:Ys,clearcoat_pars_fragment:Ks,iridescence_pars_fragment:qs,opaque_fragment:Zs,packing:$s,premultiplied_alpha_fragment:js,project_vertex:Qs,dithering_fragment:Js,dithering_pars_fragment:ec,roughnessmap_fragment:tc,roughnessmap_pars_fragment:nc,shadowmap_pars_fragment:ic,shadowmap_pars_vertex:ac,shadowmap_vertex:rc,shadowmask_pars_fragment:oc,skinbase_vertex:sc,skinning_pars_vertex:cc,skinning_vertex:lc,skinnormal_vertex:fc,specularmap_fragment:dc,specularmap_pars_fragment:uc,tonemapping_fragment:pc,tonemapping_pars_fragment:hc,transmission_fragment:_c,transmission_pars_fragment:mc,uv_pars_fragment:xc,uv_pars_vertex:gc,uv_vertex:vc,worldpos_vertex:Sc,background_vert:Ec,background_frag:Mc,backgroundCube_vert:bc,backgroundCube_frag:Tc,cube_vert:Ac,cube_frag:Rc,depth_vert:Cc,depth_frag:Pc,distanceRGBA_vert:Dc,distanceRGBA_frag:Lc,equirect_vert:Uc,equirect_frag:wc,linedashed_vert:yc,linedashed_frag:Ic,meshbasic_vert:Nc,meshbasic_frag:Oc,meshlambert_vert:Fc,meshlambert_frag:Bc,meshmatcap_vert:Gc,meshmatcap_frag:Hc,meshnormal_vert:Vc,meshnormal_frag:kc,meshphong_vert:zc,meshphong_frag:Wc,meshphysical_vert:Xc,meshphysical_frag:Yc,meshtoon_vert:Kc,meshtoon_frag:qc,points_vert:Zc,points_frag:$c,shadow_vert:jc,shadow_frag:Qc,sprite_vert:Jc,sprite_frag:el},ne={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Tt={basic:{uniforms:_t([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:_t([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:_t([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:_t([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:_t([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:_t([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:_t([ne.points,ne.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:_t([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:_t([ne.common,ne.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:_t([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:_t([ne.sprite,ne.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:_t([ne.common,ne.displacementmap,{referencePosition:{value:new We},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:_t([ne.lights,ne.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Tt.physical={uniforms:_t([Tt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const un={r:0,b:0,g:0},Ot=new Na,tl=new nn;function nl(e,n,t,i,s,r,h){const d=new Qe(0);let A=r===!0?0:1,S,L,v=null,E=0,T=null;function B(g){let D=g.isScene===!0?g.background:null;return D&&D.isTexture&&(D=(g.backgroundBlurriness>0?t:n).get(D)),D}function U(g){let D=!1;const I=B(g);I===null?o(d,A):I&&I.isColor&&(o(I,1),D=!0);const x=e.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,h):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,h),(e.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function l(g,D){const I=B(D);I&&(I.isCubeTexture||I.mapping===bn)?(L===void 0&&(L=new Vt(new Ia(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:ki(Tt.backgroundCube.uniforms),vertexShader:Tt.backgroundCube.vertexShader,fragmentShader:Tt.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),L.geometry.deleteAttribute("normal"),L.geometry.deleteAttribute("uv"),L.onBeforeRender=function(x,N,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(L.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(L)),Ot.copy(D.backgroundRotation),Ot.x*=-1,Ot.y*=-1,Ot.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ot.y*=-1,Ot.z*=-1),L.material.uniforms.envMap.value=I,L.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,L.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,L.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,L.material.uniforms.backgroundRotation.value.setFromMatrix4(tl.makeRotationFromEuler(Ot)),L.material.toneMapped=ot.getTransfer(I.colorSpace)!==Ke,(v!==I||E!==I.version||T!==e.toneMapping)&&(L.material.needsUpdate=!0,v=I,E=I.version,T=e.toneMapping),L.layers.enableAll(),g.unshift(L,L.geometry,L.material,0,0,null)):I&&I.isTexture&&(S===void 0&&(S=new Vt(new La(2,2),new yt({name:"BackgroundMaterial",uniforms:ki(Tt.background.uniforms),vertexShader:Tt.background.vertexShader,fragmentShader:Tt.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),Object.defineProperty(S.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(S)),S.material.uniforms.t2D.value=I,S.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,S.material.toneMapped=ot.getTransfer(I.colorSpace)!==Ke,I.matrixAutoUpdate===!0&&I.updateMatrix(),S.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||E!==I.version||T!==e.toneMapping)&&(S.material.needsUpdate=!0,v=I,E=I.version,T=e.toneMapping),S.layers.enableAll(),g.unshift(S,S.geometry,S.material,0,0,null))}function o(g,D){g.getRGB(un,ya(e)),i.buffers.color.setClear(un.r,un.g,un.b,D,h)}function P(){L!==void 0&&(L.geometry.dispose(),L.material.dispose(),L=void 0),S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0)}return{getClearColor:function(){return d},setClearColor:function(g,D=1){d.set(g),A=D,o(d,A)},getClearAlpha:function(){return A},setClearAlpha:function(g){A=g,o(d,A)},render:U,addToRenderList:l,dispose:P}}function il(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=E(null);let r=s,h=!1;function d(f,R,F,z,W){let Z=!1;const X=v(z,F,R);r!==X&&(r=X,S(r.object)),Z=T(f,z,F,W),Z&&B(f,z,F,W),W!==null&&n.update(W,e.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,D(f,R,F,z),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(W).buffer))}function A(){return e.createVertexArray()}function S(f){return e.bindVertexArray(f)}function L(f){return e.deleteVertexArray(f)}function v(f,R,F){const z=F.wireframe===!0;let W=i[f.id];W===void 0&&(W={},i[f.id]=W);let Z=W[R.id];Z===void 0&&(Z={},W[R.id]=Z);let X=Z[z];return X===void 0&&(X=E(A()),Z[z]=X),X}function E(f){const R=[],F=[],z=[];for(let W=0;W<t;W++)R[W]=0,F[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:z,object:f,attributes:{},index:null}}function T(f,R,F,z){const W=r.attributes,Z=R.attributes;let X=0;const re=F.getAttributes();for(const H in re)if(re[H].location>=0){const pe=W[H];let Ue=Z[H];if(Ue===void 0&&(H==="instanceMatrix"&&f.instanceMatrix&&(Ue=f.instanceMatrix),H==="instanceColor"&&f.instanceColor&&(Ue=f.instanceColor)),pe===void 0||pe.attribute!==Ue||Ue&&pe.data!==Ue.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function B(f,R,F,z){const W={},Z=R.attributes;let X=0;const re=F.getAttributes();for(const H in re)if(re[H].location>=0){let pe=Z[H];pe===void 0&&(H==="instanceMatrix"&&f.instanceMatrix&&(pe=f.instanceMatrix),H==="instanceColor"&&f.instanceColor&&(pe=f.instanceColor));const Ue={};Ue.attribute=pe,pe&&pe.data&&(Ue.data=pe.data),W[H]=Ue,X++}r.attributes=W,r.attributesNum=X,r.index=z}function U(){const f=r.newAttributes;for(let R=0,F=f.length;R<F;R++)f[R]=0}function l(f){o(f,0)}function o(f,R){const F=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;F[f]=1,z[f]===0&&(e.enableVertexAttribArray(f),z[f]=1),W[f]!==R&&(e.vertexAttribDivisor(f,R),W[f]=R)}function P(){const f=r.newAttributes,R=r.enabledAttributes;for(let F=0,z=R.length;F<z;F++)R[F]!==f[F]&&(e.disableVertexAttribArray(F),R[F]=0)}function g(f,R,F,z,W,Z,X){X===!0?e.vertexAttribIPointer(f,R,F,W,Z):e.vertexAttribPointer(f,R,F,z,W,Z)}function D(f,R,F,z){U();const W=z.attributes,Z=F.getAttributes(),X=R.defaultAttributeValues;for(const re in Z){const H=Z[re];if(H.location>=0){let fe=W[re];if(fe===void 0&&(re==="instanceMatrix"&&f.instanceMatrix&&(fe=f.instanceMatrix),re==="instanceColor"&&f.instanceColor&&(fe=f.instanceColor)),fe!==void 0){const pe=fe.normalized,Ue=fe.itemSize,ke=n.get(fe);if(ke===void 0)continue;const Je=ke.buffer,$e=ke.type,et=ke.bytesPerElement,V=$e===e.INT||$e===e.UNSIGNED_INT||fe.gpuType===Ua;if(fe.isInterleavedBufferAttribute){const K=fe.data,le=K.stride,De=fe.offset;if(K.isInstancedInterleavedBuffer){for(let xe=0;xe<H.locationSize;xe++)o(H.location+xe,K.meshPerAttribute);f.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let xe=0;xe<H.locationSize;xe++)l(H.location+xe);e.bindBuffer(e.ARRAY_BUFFER,Je);for(let xe=0;xe<H.locationSize;xe++)g(H.location+xe,Ue/H.locationSize,$e,pe,le*et,(De+Ue/H.locationSize*xe)*et,V)}else{if(fe.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)o(H.location+K,fe.meshPerAttribute);f.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let K=0;K<H.locationSize;K++)l(H.location+K);e.bindBuffer(e.ARRAY_BUFFER,Je);for(let K=0;K<H.locationSize;K++)g(H.location+K,Ue/H.locationSize,$e,pe,Ue*et,Ue/H.locationSize*K*et,V)}}else if(X!==void 0){const pe=X[re];if(pe!==void 0)switch(pe.length){case 2:e.vertexAttrib2fv(H.location,pe);break;case 3:e.vertexAttrib3fv(H.location,pe);break;case 4:e.vertexAttrib4fv(H.location,pe);break;default:e.vertexAttrib1fv(H.location,pe)}}}}P()}function I(){j();for(const f in i){const R=i[f];for(const F in R){const z=R[F];for(const W in z)L(z[W].object),delete z[W];delete R[F]}delete i[f]}}function x(f){if(i[f.id]===void 0)return;const R=i[f.id];for(const F in R){const z=R[F];for(const W in z)L(z[W].object),delete z[W];delete R[F]}delete i[f.id]}function N(f){for(const R in i){const F=i[R];if(F[f.id]===void 0)continue;const z=F[f.id];for(const W in z)L(z[W].object),delete z[W];delete F[f.id]}}function j(){p(),h=!0,r!==s&&(r=s,S(r.object))}function p(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:j,resetDefaultState:p,dispose:I,releaseStatesOfGeometry:x,releaseStatesOfProgram:N,initAttributes:U,enableAttribute:l,disableUnusedAttributes:P}}function al(e,n,t){let i;function s(S){i=S}function r(S,L){e.drawArrays(i,S,L),t.update(L,i,1)}function h(S,L,v){v!==0&&(e.drawArraysInstanced(i,S,L,v),t.update(L,i,v))}function d(S,L,v){if(v===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,S,0,L,0,v);let T=0;for(let B=0;B<v;B++)T+=L[B];t.update(T,i,1)}function A(S,L,v,E){if(v===0)return;const T=n.get("WEBGL_multi_draw");if(T===null)for(let B=0;B<S.length;B++)h(S[B],L[B],E[B]);else{T.multiDrawArraysInstancedWEBGL(i,S,0,L,0,E,0,v);let B=0;for(let U=0;U<v;U++)B+=L[U]*E[U];t.update(B,i,1)}}this.setMode=s,this.render=r,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=A}function rl(e,n,t,i){let s;function r(){if(s!==void 0)return s;if(n.has("EXT_texture_filter_anisotropic")===!0){const N=n.get("EXT_texture_filter_anisotropic");s=e.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function h(N){return!(N!==Pt&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const j=N===cn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(N!==Ht&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Gt&&!j)}function A(N){if(N==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let S=t.precision!==void 0?t.precision:"highp";const L=A(S);L!==S&&(qe("WebGLRenderer:",S,"not supported, using",L,"instead."),S=L);const v=t.logarithmicDepthBuffer===!0,E=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),T=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),B=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=e.getParameter(e.MAX_TEXTURE_SIZE),l=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),o=e.getParameter(e.MAX_VERTEX_ATTRIBS),P=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),g=e.getParameter(e.MAX_VARYING_VECTORS),D=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),I=B>0,x=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:A,textureFormatReadable:h,textureTypeReadable:d,precision:S,logarithmicDepthBuffer:v,reversedDepthBuffer:E,maxTextures:T,maxVertexTextures:B,maxTextureSize:U,maxCubemapSize:l,maxAttributes:o,maxVertexUniforms:P,maxVaryings:g,maxFragmentUniforms:D,vertexTextures:I,maxSamples:x}}function ol(e){const n=this;let t=null,i=0,s=!1,r=!1;const h=new Ma,d=new Be,A={value:null,needsUpdate:!1};this.uniform=A,this.numPlanes=0,this.numIntersection=0,this.init=function(v,E){const T=v.length!==0||E||i!==0||s;return s=E,i=v.length,T},this.beginShadows=function(){r=!0,L(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(v,E){t=L(v,E,0)},this.setState=function(v,E,T){const B=v.clippingPlanes,U=v.clipIntersection,l=v.clipShadows,o=e.get(v);if(!s||B===null||B.length===0||r&&!l)r?L(null):S();else{const P=r?0:i,g=P*4;let D=o.clippingState||null;A.value=D,D=L(B,E,g,T);for(let I=0;I!==g;++I)D[I]=t[I];o.clippingState=D,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=P}};function S(){A.value!==t&&(A.value=t,A.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function L(v,E,T,B){const U=v!==null?v.length:0;let l=null;if(U!==0){if(l=A.value,B!==!0||l===null){const o=T+U*4,P=E.matrixWorldInverse;d.getNormalMatrix(P),(l===null||l.length<o)&&(l=new Float32Array(o));for(let g=0,D=T;g!==U;++g,D+=4)h.copy(v[g]).applyMatrix4(P,d),h.normal.toArray(l,D),l[D+3]=h.constant}A.value=l,A.needsUpdate=!0}return n.numPlanes=U,n.numIntersection=0,l}}function sl(e){let n=new WeakMap;function t(h,d){return d===Zn?h.mapping=sn:d===$n&&(h.mapping=qt),h}function i(h){if(h&&h.isTexture){const d=h.mapping;if(d===Zn||d===$n)if(n.has(h)){const A=n.get(h).texture;return t(A,h.mapping)}else{const A=h.image;if(A&&A.height>0){const S=new Wr(A.height);return S.fromEquirectangularTexture(e,h),n.set(h,S),h.addEventListener("dispose",s),t(S.texture,h.mapping)}else return null}}return h}function s(h){const d=h.target;d.removeEventListener("dispose",s);const A=n.get(d);A!==void 0&&(n.delete(d),A.dispose())}function r(){n=new WeakMap}return{get:i,dispose:r}}const Lt=4,Ki=[.125,.215,.35,.446,.526,.582],Bt=20,cl=256,Qt=new qr,qi=new Qe;let In=null,Nn=0,On=0,Fn=!1;const ll=new We;class Zi{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,s=100,r={}){const{size:h=256,position:d=ll}=r;In=this._renderer.getRenderTarget(),Nn=this._renderer.getActiveCubeFace(),On=this._renderer.getActiveMipmapLevel(),Fn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const A=this._allocateTargets();return A.depthBuffer=!0,this._sceneToCubeUV(n,i,s,A,d),t>0&&this._blur(A,0,0,t),this._applyPMREM(A),this._cleanup(A),A}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qi(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ji(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(In,Nn,On),this._renderer.xr.enabled=Fn,n.scissorTest=!1,zt(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===sn||n.mapping===qt?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),In=this._renderer.getRenderTarget(),Nn=this._renderer.getActiveCubeFace(),On=this._renderer.getActiveMipmapLevel(),Fn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:cn,format:Pt,colorSpace:Mn,depthBuffer:!1},s=$i(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$i(n,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fl(r)),this._blurMaterial=ul(r,n,t),this._ggxMaterial=dl(r,n,t)}return s}_compileMaterial(n){const t=new Vt(new Jn,n);this._renderer.compile(t,Qt)}_sceneToCubeUV(n,t,i,s,r){const A=new _n(90,1,t,i),S=[1,-1,1,1,1,1],L=[1,1,1,-1,-1,-1],v=this._renderer,E=v.autoClear,T=v.toneMapping;v.getClearColor(qi),v.toneMapping=Ut,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new Ia,new Zr({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,l=U.material;let o=!1;const P=n.background;P?P.isColor&&(l.color.copy(P),n.background=null,o=!0):(l.color.copy(qi),o=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(A.up.set(0,S[g],0),A.position.set(r.x,r.y,r.z),A.lookAt(r.x+L[g],r.y,r.z)):D===1?(A.up.set(0,0,S[g]),A.position.set(r.x,r.y,r.z),A.lookAt(r.x,r.y+L[g],r.z)):(A.up.set(0,S[g],0),A.position.set(r.x,r.y,r.z),A.lookAt(r.x,r.y,r.z+L[g]));const I=this._cubeSize;zt(s,D*I,g>2?I:0,I,I),v.setRenderTarget(s),o&&v.render(U,A),v.render(n,A)}v.toneMapping=T,v.autoClear=E,n.background=P}_textureToCubeUV(n,t){const i=this._renderer,s=n.mapping===sn||n.mapping===qt;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qi()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ji());const r=s?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=r;const d=r.uniforms;d.envMap.value=n;const A=this._cubeSize;zt(t,0,0,3*A,2*A),i.setRenderTarget(t),i.render(h,Qt)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(n,r-1,r);t.autoClear=i}_applyGGXFilter(n,t,i){const s=this._renderer,r=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[i];d.material=h;const A=h.uniforms,S=i/(this._lodMeshes.length-1),L=t/(this._lodMeshes.length-1),v=Math.sqrt(S*S-L*L),E=.05+S*.95,T=v*E,{_lodMax:B}=this,U=this._sizeLods[i],l=3*U*(i>B-Lt?i-B+Lt:0),o=4*(this._cubeSize-U);A.envMap.value=n.texture,A.roughness.value=T,A.mipInt.value=B-t,zt(r,l,o,3*U,2*U),s.setRenderTarget(r),s.render(d,Qt),A.envMap.value=r.texture,A.roughness.value=0,A.mipInt.value=B-i,zt(n,l,o,3*U,2*U),s.setRenderTarget(n),s.render(d,Qt)}_blur(n,t,i,s,r){const h=this._pingPongRenderTarget;this._halfBlur(n,h,t,i,s,"latitudinal",r),this._halfBlur(h,n,i,i,s,"longitudinal",r)}_halfBlur(n,t,i,s,r,h,d){const A=this._renderer,S=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&xt("blur direction must be either latitudinal or longitudinal!");const L=3,v=this._lodMeshes[s];v.material=S;const E=S.uniforms,T=this._sizeLods[i]-1,B=isFinite(r)?Math.PI/(2*T):2*Math.PI/(2*Bt-1),U=r/B,l=isFinite(r)?1+Math.floor(L*U):Bt;l>Bt&&qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${l} samples when the maximum is set to ${Bt}`);const o=[];let P=0;for(let N=0;N<Bt;++N){const j=N/U,p=Math.exp(-j*j/2);o.push(p),N===0?P+=p:N<l&&(P+=2*p)}for(let N=0;N<o.length;N++)o[N]=o[N]/P;E.envMap.value=n.texture,E.samples.value=l,E.weights.value=o,E.latitudinal.value=h==="latitudinal",d&&(E.poleAxis.value=d);const{_lodMax:g}=this;E.dTheta.value=B,E.mipInt.value=g-i;const D=this._sizeLods[s],I=3*D*(s>g-Lt?s-g+Lt:0),x=4*(this._cubeSize-D);zt(t,I,x,3*D,2*D),A.setRenderTarget(t),A.render(v,Qt)}}function fl(e){const n=[],t=[],i=[];let s=e;const r=e-Lt+1+Ki.length;for(let h=0;h<r;h++){const d=Math.pow(2,s);n.push(d);let A=1/d;h>e-Lt?A=Ki[h-e+Lt-1]:h===0&&(A=0),t.push(A);const S=1/(d-2),L=-S,v=1+S,E=[L,L,v,L,v,v,L,L,v,v,L,v],T=6,B=6,U=3,l=2,o=1,P=new Float32Array(U*B*T),g=new Float32Array(l*B*T),D=new Float32Array(o*B*T);for(let x=0;x<T;x++){const N=x%3*2/3-1,j=x>2?0:-1,p=[N,j,0,N+2/3,j,0,N+2/3,j+1,0,N,j,0,N+2/3,j+1,0,N,j+1,0];P.set(p,U*B*x),g.set(E,l*B*x);const f=[x,x,x,x,x,x];D.set(f,o*B*x)}const I=new Jn;I.setAttribute("position",new mn(P,U)),I.setAttribute("uv",new mn(g,l)),I.setAttribute("faceIndex",new mn(D,o)),i.push(new Vt(I,null)),s>Lt&&s--}return{lodMeshes:i,sizeLods:n,sigmas:t}}function $i(e,n,t){const i=new Kt(e,n,t);return i.texture.mapping=bn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zt(e,n,t,i,s){e.viewport.set(n,t,i,s),e.scissor.set(n,t,i,s)}function dl(e,n,t){return new yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cl,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function ul(e,n,t){const i=new Float32Array(Bt),s=new We(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:Bt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function ji(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function Qi(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wt,depthTest:!1,depthWrite:!1})}function Tn(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pl(e){let n=new WeakMap,t=null;function i(d){if(d&&d.isTexture){const A=d.mapping,S=A===Zn||A===$n,L=A===sn||A===qt;if(S||L){let v=n.get(d);const E=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==E)return t===null&&(t=new Zi(e)),v=S?t.fromEquirectangular(d,v):t.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,n.set(d,v),v.texture;if(v!==void 0)return v.texture;{const T=d.image;return S&&T&&T.height>0||L&&T&&s(T)?(t===null&&(t=new Zi(e)),v=S?t.fromEquirectangular(d):t.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,n.set(d,v),d.addEventListener("dispose",r),v.texture):null}}}return d}function s(d){let A=0;const S=6;for(let L=0;L<S;L++)d[L]!==void 0&&A++;return A===S}function r(d){const A=d.target;A.removeEventListener("dispose",r);const S=n.get(A);S!==void 0&&(n.delete(A),S.dispose())}function h(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:h}}function hl(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const s=e.getExtension(i);return n[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Hn("WebGLRenderer: "+i+" extension not supported."),s}}}function _l(e,n,t,i){const s={},r=new WeakMap;function h(v){const E=v.target;E.index!==null&&n.remove(E.index);for(const B in E.attributes)n.remove(E.attributes[B]);E.removeEventListener("dispose",h),delete s[E.id];const T=r.get(E);T&&(n.remove(T),r.delete(E)),i.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function d(v,E){return s[E.id]===!0||(E.addEventListener("dispose",h),s[E.id]=!0,t.memory.geometries++),E}function A(v){const E=v.attributes;for(const T in E)n.update(E[T],e.ARRAY_BUFFER)}function S(v){const E=[],T=v.index,B=v.attributes.position;let U=0;if(T!==null){const P=T.array;U=T.version;for(let g=0,D=P.length;g<D;g+=3){const I=P[g+0],x=P[g+1],N=P[g+2];E.push(I,x,x,N,N,I)}}else if(B!==void 0){const P=B.array;U=B.version;for(let g=0,D=P.length/3-1;g<D;g+=3){const I=g+0,x=g+1,N=g+2;E.push(I,x,x,N,N,I)}}else return;const l=new(Qr(E)?$r:jr)(E,1);l.version=U;const o=r.get(v);o&&n.remove(o),r.set(v,l)}function L(v){const E=r.get(v);if(E){const T=v.index;T!==null&&E.version<T.version&&S(v)}else S(v);return r.get(v)}return{get:d,update:A,getWireframeAttribute:L}}function ml(e,n,t){let i;function s(E){i=E}let r,h;function d(E){r=E.type,h=E.bytesPerElement}function A(E,T){e.drawElements(i,T,r,E*h),t.update(T,i,1)}function S(E,T,B){B!==0&&(e.drawElementsInstanced(i,T,r,E*h,B),t.update(T,i,B))}function L(E,T,B){if(B===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,T,0,r,E,0,B);let l=0;for(let o=0;o<B;o++)l+=T[o];t.update(l,i,1)}function v(E,T,B,U){if(B===0)return;const l=n.get("WEBGL_multi_draw");if(l===null)for(let o=0;o<E.length;o++)S(E[o]/h,T[o],U[o]);else{l.multiDrawElementsInstancedWEBGL(i,T,0,r,E,0,U,0,B);let o=0;for(let P=0;P<B;P++)o+=T[P]*U[P];t.update(o,i,1)}}this.setMode=s,this.setIndex=d,this.render=A,this.renderInstances=S,this.renderMultiDraw=L,this.renderMultiDrawInstances=v}function xl(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,h,d){switch(t.calls++,h){case e.TRIANGLES:t.triangles+=d*(r/3);break;case e.LINES:t.lines+=d*(r/2);break;case e.LINE_STRIP:t.lines+=d*(r-1);break;case e.LINE_LOOP:t.lines+=d*r;break;case e.POINTS:t.points+=d*r;break;default:xt("WebGLInfo: Unknown draw mode:",h);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:s,update:i}}function gl(e,n,t){const i=new WeakMap,s=new mt;function r(h,d,A){const S=h.morphTargetInfluences,L=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=L!==void 0?L.length:0;let E=i.get(d);if(E===void 0||E.count!==v){let p=function(){N.dispose(),i.delete(d),d.removeEventListener("dispose",p)};E!==void 0&&E.texture.dispose();const T=d.morphAttributes.position!==void 0,B=d.morphAttributes.normal!==void 0,U=d.morphAttributes.color!==void 0,l=d.morphAttributes.position||[],o=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let g=0;T===!0&&(g=1),B===!0&&(g=2),U===!0&&(g=3);let D=d.attributes.position.count*g,I=1;D>n.maxTextureSize&&(I=Math.ceil(D/n.maxTextureSize),D=n.maxTextureSize);const x=new Float32Array(D*I*4*v),N=new wa(x,D,I,v);N.type=Gt,N.needsUpdate=!0;const j=g*4;for(let f=0;f<v;f++){const R=l[f],F=o[f],z=P[f],W=D*I*4*f;for(let Z=0;Z<R.count;Z++){const X=Z*j;T===!0&&(s.fromBufferAttribute(R,Z),x[W+X+0]=s.x,x[W+X+1]=s.y,x[W+X+2]=s.z,x[W+X+3]=0),B===!0&&(s.fromBufferAttribute(F,Z),x[W+X+4]=s.x,x[W+X+5]=s.y,x[W+X+6]=s.z,x[W+X+7]=0),U===!0&&(s.fromBufferAttribute(z,Z),x[W+X+8]=s.x,x[W+X+9]=s.y,x[W+X+10]=s.z,x[W+X+11]=z.itemSize===4?s.w:1)}}E={count:v,texture:N,size:new Ze(D,I)},i.set(d,E),d.addEventListener("dispose",p)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)A.getUniforms().setValue(e,"morphTexture",h.morphTexture,t);else{let T=0;for(let U=0;U<S.length;U++)T+=S[U];const B=d.morphTargetsRelative?1:1-T;A.getUniforms().setValue(e,"morphTargetBaseInfluence",B),A.getUniforms().setValue(e,"morphTargetInfluences",S)}A.getUniforms().setValue(e,"morphTargetsTexture",E.texture,t),A.getUniforms().setValue(e,"morphTargetsTextureSize",E.size)}return{update:r}}function vl(e,n,t,i){let s=new WeakMap;function r(A){const S=i.render.frame,L=A.geometry,v=n.get(A,L);if(s.get(v)!==S&&(n.update(v),s.set(v,S)),A.isInstancedMesh&&(A.hasEventListener("dispose",d)===!1&&A.addEventListener("dispose",d),s.get(A)!==S&&(t.update(A.instanceMatrix,e.ARRAY_BUFFER),A.instanceColor!==null&&t.update(A.instanceColor,e.ARRAY_BUFFER),s.set(A,S))),A.isSkinnedMesh){const E=A.skeleton;s.get(E)!==S&&(E.update(),s.set(E,S))}return v}function h(){s=new WeakMap}function d(A){const S=A.target;S.removeEventListener("dispose",d),t.remove(S.instanceMatrix),S.instanceColor!==null&&t.remove(S.instanceColor)}return{update:r,dispose:h}}const Ba=new fo,Ji=new va(1,1),Ga=new wa,Ha=new lo,Va=new co,ea=[],ta=[],na=new Float32Array(16),ia=new Float32Array(9),aa=new Float32Array(4);function Zt(e,n,t){const i=e[0];if(i<=0||i>0)return e;const s=n*t;let r=ea[s];if(r===void 0&&(r=new Float32Array(s),ea[s]=r),n!==0){i.toArray(r,0);for(let h=1,d=0;h!==n;++h)d+=t,e[h].toArray(r,d)}return r}function ct(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function lt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function An(e,n){let t=ta[n];t===void 0&&(t=new Int32Array(n),ta[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Sl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function El(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ct(t,n))return;e.uniform2fv(this.addr,n),lt(t,n)}}function Ml(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(ct(t,n))return;e.uniform3fv(this.addr,n),lt(t,n)}}function bl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ct(t,n))return;e.uniform4fv(this.addr,n),lt(t,n)}}function Tl(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ct(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),lt(t,n)}else{if(ct(t,i))return;aa.set(i),e.uniformMatrix2fv(this.addr,!1,aa),lt(t,i)}}function Al(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ct(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),lt(t,n)}else{if(ct(t,i))return;ia.set(i),e.uniformMatrix3fv(this.addr,!1,ia),lt(t,i)}}function Rl(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ct(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),lt(t,n)}else{if(ct(t,i))return;na.set(i),e.uniformMatrix4fv(this.addr,!1,na),lt(t,i)}}function Cl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Pl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ct(t,n))return;e.uniform2iv(this.addr,n),lt(t,n)}}function Dl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ct(t,n))return;e.uniform3iv(this.addr,n),lt(t,n)}}function Ll(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ct(t,n))return;e.uniform4iv(this.addr,n),lt(t,n)}}function Ul(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function wl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ct(t,n))return;e.uniform2uiv(this.addr,n),lt(t,n)}}function yl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ct(t,n))return;e.uniform3uiv(this.addr,n),lt(t,n)}}function Il(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ct(t,n))return;e.uniform4uiv(this.addr,n),lt(t,n)}}function Nl(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(Ji.compareFunction=Ea,r=Ji):r=Ba,t.setTexture2D(n||r,s)}function Ol(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(n||Ha,s)}function Fl(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(n||Va,s)}function Bl(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(n||Ga,s)}function Gl(e){switch(e){case 5126:return Sl;case 35664:return El;case 35665:return Ml;case 35666:return bl;case 35674:return Tl;case 35675:return Al;case 35676:return Rl;case 5124:case 35670:return Cl;case 35667:case 35671:return Pl;case 35668:case 35672:return Dl;case 35669:case 35673:return Ll;case 5125:return Ul;case 36294:return wl;case 36295:return yl;case 36296:return Il;case 35678:case 36198:case 36298:case 36306:case 35682:return Nl;case 35679:case 36299:case 36307:return Ol;case 35680:case 36300:case 36308:case 36293:return Fl;case 36289:case 36303:case 36311:case 36292:return Bl}}function Hl(e,n){e.uniform1fv(this.addr,n)}function Vl(e,n){const t=Zt(n,this.size,2);e.uniform2fv(this.addr,t)}function kl(e,n){const t=Zt(n,this.size,3);e.uniform3fv(this.addr,t)}function zl(e,n){const t=Zt(n,this.size,4);e.uniform4fv(this.addr,t)}function Wl(e,n){const t=Zt(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Xl(e,n){const t=Zt(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Yl(e,n){const t=Zt(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Kl(e,n){e.uniform1iv(this.addr,n)}function ql(e,n){e.uniform2iv(this.addr,n)}function Zl(e,n){e.uniform3iv(this.addr,n)}function $l(e,n){e.uniform4iv(this.addr,n)}function jl(e,n){e.uniform1uiv(this.addr,n)}function Ql(e,n){e.uniform2uiv(this.addr,n)}function Jl(e,n){e.uniform3uiv(this.addr,n)}function ef(e,n){e.uniform4uiv(this.addr,n)}function tf(e,n,t){const i=this.cache,s=n.length,r=An(t,s);ct(i,r)||(e.uniform1iv(this.addr,r),lt(i,r));for(let h=0;h!==s;++h)t.setTexture2D(n[h]||Ba,r[h])}function nf(e,n,t){const i=this.cache,s=n.length,r=An(t,s);ct(i,r)||(e.uniform1iv(this.addr,r),lt(i,r));for(let h=0;h!==s;++h)t.setTexture3D(n[h]||Ha,r[h])}function af(e,n,t){const i=this.cache,s=n.length,r=An(t,s);ct(i,r)||(e.uniform1iv(this.addr,r),lt(i,r));for(let h=0;h!==s;++h)t.setTextureCube(n[h]||Va,r[h])}function rf(e,n,t){const i=this.cache,s=n.length,r=An(t,s);ct(i,r)||(e.uniform1iv(this.addr,r),lt(i,r));for(let h=0;h!==s;++h)t.setTexture2DArray(n[h]||Ga,r[h])}function of(e){switch(e){case 5126:return Hl;case 35664:return Vl;case 35665:return kl;case 35666:return zl;case 35674:return Wl;case 35675:return Xl;case 35676:return Yl;case 5124:case 35670:return Kl;case 35667:case 35671:return ql;case 35668:case 35672:return Zl;case 35669:case 35673:return $l;case 5125:return jl;case 36294:return Ql;case 36295:return Jl;case 36296:return ef;case 35678:case 36198:case 36298:case 36306:case 35682:return tf;case 35679:case 36299:case 36307:return nf;case 35680:case 36300:case 36308:case 36293:return af;case 36289:case 36303:case 36311:case 36292:return rf}}class sf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gl(t.type)}}class cf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=of(t.type)}}class lf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const s=this.seq;for(let r=0,h=s.length;r!==h;++r){const d=s[r];d.setValue(n,t[d.id],i)}}}const Bn=/(\w+)(\])?(\[|\.)?/g;function ra(e,n){e.seq.push(n),e.map[n.id]=n}function ff(e,n,t){const i=e.name,s=i.length;for(Bn.lastIndex=0;;){const r=Bn.exec(i),h=Bn.lastIndex;let d=r[1];const A=r[2]==="]",S=r[3];if(A&&(d=d|0),S===void 0||S==="["&&h+2===s){ra(t,S===void 0?new sf(d,e,n):new cf(d,e,n));break}else{let v=t.map[d];v===void 0&&(v=new lf(d),ra(t,v)),t=v}}}class gn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=n.getActiveUniform(t,s),h=n.getUniformLocation(t,r.name);ff(r,h,this)}}setValue(n,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(n,i,s)}setOptional(n,t,i){const s=t[i];s!==void 0&&this.setValue(n,i,s)}static upload(n,t,i,s){for(let r=0,h=t.length;r!==h;++r){const d=t[r],A=i[d.id];A.needsUpdate!==!1&&d.setValue(n,A.value,s)}}static seqWithValue(n,t){const i=[];for(let s=0,r=n.length;s!==r;++s){const h=n[s];h.id in t&&i.push(h)}return i}}function oa(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const df=37297;let uf=0;function pf(e,n){const t=e.split(`
`),i=[],s=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let h=s;h<r;h++){const d=h+1;i.push(`${d===n?">":" "} ${d}: ${t[h]}`)}return i.join(`
`)}const sa=new Be;function hf(e){ot._getMatrix(sa,ot.workingColorSpace,e);const n=`mat3( ${sa.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(e)){case Oa:return[n,"LinearTransferOETF"];case Ke:return[n,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function ca(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const h=/ERROR: 0:(\d+)/.exec(r);if(h){const d=parseInt(h[1]);return t.toUpperCase()+`

`+r+`

`+pf(e.getShaderSource(n),d)}else return r}function _f(e,n){const t=hf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mf(e,n){let t;switch(n){case so:t="Linear";break;case oo:t="Reinhard";break;case ro:t="Cineon";break;case ao:t="ACESFilmic";break;case io:t="AgX";break;case no:t="Neutral";break;case to:t="Custom";break;default:qe("WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pn=new We;function xf(){ot.getLuminanceCoefficients(pn);const e=pn.x.toFixed(4),n=pn.y.toFixed(4),t=pn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(en).join(`
`)}function vf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Sf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=e.getActiveAttrib(n,s),h=r.name;let d=1;r.type===e.FLOAT_MAT2&&(d=2),r.type===e.FLOAT_MAT3&&(d=3),r.type===e.FLOAT_MAT4&&(d=4),t[h]={type:r.type,location:e.getAttribLocation(n,h),locationSize:d}}return t}function en(e){return e!==""}function la(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function fa(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Ef=/^[ \t]*#include +<([\w\d./]+)>/gm;function jn(e){return e.replace(Ef,bf)}const Mf=new Map;function bf(e,n){let t=Le[n];if(t===void 0){const i=Mf.get(n);if(i!==void 0)t=Le[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return jn(t)}const Tf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function da(e){return e.replace(Tf,Af)}function Af(e,n,t,i){let s="";for(let r=parseInt(n);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ua(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function Rf(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===ba?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===eo?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Rt&&(n="SHADOWMAP_TYPE_VSM"),n}function Cf(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case sn:case qt:n="ENVMAP_TYPE_CUBE";break;case bn:n="ENVMAP_TYPE_CUBE_UV";break}return n}function Pf(e){let n="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===qt&&(n="ENVMAP_MODE_REFRACTION"),n}function Df(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case _o:n="ENVMAP_BLENDING_MULTIPLY";break;case ho:n="ENVMAP_BLENDING_MIX";break;case po:n="ENVMAP_BLENDING_ADD";break}return n}function Lf(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Uf(e,n,t,i){const s=e.getContext(),r=t.defines;let h=t.vertexShader,d=t.fragmentShader;const A=Rf(t),S=Cf(t),L=Pf(t),v=Df(t),E=Lf(t),T=gf(t),B=vf(r),U=s.createProgram();let l,o,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,B].filter(en).join(`
`),l.length>0&&(l+=`
`),o=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,B].filter(en).join(`
`),o.length>0&&(o+=`
`)):(l=[ua(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,B,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+L:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(en).join(`
`),o=[ua(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,B,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+S:"",t.envMap?"#define "+L:"",t.envMap?"#define "+v:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ut?"#define TONE_MAPPING":"",t.toneMapping!==Ut?Le.tonemapping_pars_fragment:"",t.toneMapping!==Ut?mf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,_f("linearToOutputTexel",t.outputColorSpace),xf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(en).join(`
`)),h=jn(h),h=la(h,t),h=fa(h,t),d=jn(d),d=la(d,t),d=fa(d,t),h=da(h),d=da(d),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,l=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,o=["#define varying in",t.glslVersion===Wi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const g=P+l+h,D=P+o+d,I=oa(s,s.VERTEX_SHADER,g),x=oa(s,s.FRAGMENT_SHADER,D);s.attachShader(U,I),s.attachShader(U,x),t.index0AttributeName!==void 0?s.bindAttribLocation(U,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(U,0,"position"),s.linkProgram(U);function N(R){if(e.debug.checkShaderErrors){const F=s.getProgramInfoLog(U)||"",z=s.getShaderInfoLog(I)||"",W=s.getShaderInfoLog(x)||"",Z=F.trim(),X=z.trim(),re=W.trim();let H=!0,fe=!0;if(s.getProgramParameter(U,s.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,U,I,x);else{const pe=ca(s,I,"vertex"),Ue=ca(s,x,"fragment");xt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(U,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Z+`
`+pe+`
`+Ue)}else Z!==""?qe("WebGLProgram: Program Info Log:",Z):(X===""||re==="")&&(fe=!1);fe&&(R.diagnostics={runnable:H,programLog:Z,vertexShader:{log:X,prefix:l},fragmentShader:{log:re,prefix:o}})}s.deleteShader(I),s.deleteShader(x),j=new gn(s,U),p=Sf(s,U)}let j;this.getUniforms=function(){return j===void 0&&N(this),j};let p;this.getAttributes=function(){return p===void 0&&N(this),p};let f=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return f===!1&&(f=s.getProgramParameter(U,df)),f},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(U),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uf++,this.cacheKey=n,this.usedTimes=1,this.program=U,this.vertexShader=I,this.fragmentShader=x,this}let wf=0;class yf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),h=this._getShaderCacheForMaterial(n);return h.has(s)===!1&&(h.add(s),s.usedTimes++),h.has(r)===!1&&(h.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new If(n),t.set(n,i)),i}}class If{constructor(n){this.id=wf++,this.code=n,this.usedTimes=0}}function Nf(e,n,t,i,s,r,h){const d=new Jr,A=new yf,S=new Set,L=[],v=s.logarithmicDepthBuffer,E=s.vertexTextures;let T=s.precision;const B={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function U(p){return S.add(p),p===0?"uv":`uv${p}`}function l(p,f,R,F,z){const W=F.fog,Z=z.geometry,X=p.isMeshStandardMaterial?F.environment:null,re=(p.isMeshStandardMaterial?t:n).get(p.envMap||X),H=re&&re.mapping===bn?re.image.height:null,fe=B[p.type];p.precision!==null&&(T=s.getMaxPrecision(p.precision),T!==p.precision&&qe("WebGLProgram.getParameters:",p.precision,"not supported, using",T,"instead."));const pe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ue=pe!==void 0?pe.length:0;let ke=0;Z.morphAttributes.position!==void 0&&(ke=1),Z.morphAttributes.normal!==void 0&&(ke=2),Z.morphAttributes.color!==void 0&&(ke=3);let Je,$e,et,V;if(fe){const Ge=Tt[fe];Je=Ge.vertexShader,$e=Ge.fragmentShader}else Je=p.vertexShader,$e=p.fragmentShader,A.update(p),et=A.getVertexShaderID(p),V=A.getFragmentShaderID(p);const K=e.getRenderTarget(),le=e.state.buffers.depth.getReversed(),De=z.isInstancedMesh===!0,xe=z.isBatchedMesh===!0,ye=!!p.map,ft=!!p.matcap,we=!!re,je=!!p.aoMap,_=!!p.lightMap,Ie=!!p.bumpMap,Ne=!!p.normalMap,Xe=!!p.displacementMap,he=!!p.emissiveMap,tt=!!p.metalnessMap,ve=!!p.roughnessMap,Pe=p.anisotropy>0,u=p.clearcoat>0,a=p.dispersion>0,C=p.iridescence>0,G=p.sheen>0,Y=p.transmission>0,O=Pe&&!!p.anisotropyMap,me=u&&!!p.clearcoatMap,ie=u&&!!p.clearcoatNormalMap,Se=u&&!!p.clearcoatRoughnessMap,_e=C&&!!p.iridescenceMap,q=C&&!!p.iridescenceThicknessMap,J=G&&!!p.sheenColorMap,Te=G&&!!p.sheenRoughnessMap,Me=!!p.specularMap,se=!!p.specularColorMap,Re=!!p.specularIntensityMap,m=Y&&!!p.transmissionMap,ae=Y&&!!p.thicknessMap,ee=!!p.gradientMap,te=!!p.alphaMap,$=p.alphaTest>0,k=!!p.alphaHash,de=!!p.extensions;let Ce=Ut;p.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ce=e.toneMapping);const Ye={shaderID:fe,shaderType:p.type,shaderName:p.name,vertexShader:Je,fragmentShader:$e,defines:p.defines,customVertexShaderID:et,customFragmentShaderID:V,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:T,batching:xe,batchingColor:xe&&z._colorsTexture!==null,instancing:De,instancingColor:De&&z.instanceColor!==null,instancingMorph:De&&z.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:K===null?e.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Mn,alphaToCoverage:!!p.alphaToCoverage,map:ye,matcap:ft,envMap:we,envMapMode:we&&re.mapping,envMapCubeUVHeight:H,aoMap:je,lightMap:_,bumpMap:Ie,normalMap:Ne,displacementMap:E&&Xe,emissiveMap:he,normalMapObjectSpace:Ne&&p.normalMapType===Kr,normalMapTangentSpace:Ne&&p.normalMapType===Yr,metalnessMap:tt,roughnessMap:ve,anisotropy:Pe,anisotropyMap:O,clearcoat:u,clearcoatMap:me,clearcoatNormalMap:ie,clearcoatRoughnessMap:Se,dispersion:a,iridescence:C,iridescenceMap:_e,iridescenceThicknessMap:q,sheen:G,sheenColorMap:J,sheenRoughnessMap:Te,specularMap:Me,specularColorMap:se,specularIntensityMap:Re,transmission:Y,transmissionMap:m,thicknessMap:ae,gradientMap:ee,opaque:p.transparent===!1&&p.blending===xn&&p.alphaToCoverage===!1,alphaMap:te,alphaTest:$,alphaHash:k,combine:p.combine,mapUv:ye&&U(p.map.channel),aoMapUv:je&&U(p.aoMap.channel),lightMapUv:_&&U(p.lightMap.channel),bumpMapUv:Ie&&U(p.bumpMap.channel),normalMapUv:Ne&&U(p.normalMap.channel),displacementMapUv:Xe&&U(p.displacementMap.channel),emissiveMapUv:he&&U(p.emissiveMap.channel),metalnessMapUv:tt&&U(p.metalnessMap.channel),roughnessMapUv:ve&&U(p.roughnessMap.channel),anisotropyMapUv:O&&U(p.anisotropyMap.channel),clearcoatMapUv:me&&U(p.clearcoatMap.channel),clearcoatNormalMapUv:ie&&U(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&U(p.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&U(p.iridescenceMap.channel),iridescenceThicknessMapUv:q&&U(p.iridescenceThicknessMap.channel),sheenColorMapUv:J&&U(p.sheenColorMap.channel),sheenRoughnessMapUv:Te&&U(p.sheenRoughnessMap.channel),specularMapUv:Me&&U(p.specularMap.channel),specularColorMapUv:se&&U(p.specularColorMap.channel),specularIntensityMapUv:Re&&U(p.specularIntensityMap.channel),transmissionMapUv:m&&U(p.transmissionMap.channel),thicknessMapUv:ae&&U(p.thicknessMap.channel),alphaMapUv:te&&U(p.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ne||Pe),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(ye||te),fog:!!W,useFog:p.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:p.flatShading===!0&&p.wireframe===!1,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:le,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:ke,numDirLights:f.directional.length,numPointLights:f.point.length,numSpotLights:f.spot.length,numSpotLightMaps:f.spotLightMap.length,numRectAreaLights:f.rectArea.length,numHemiLights:f.hemi.length,numDirLightShadows:f.directionalShadowMap.length,numPointLightShadows:f.pointShadowMap.length,numSpotLightShadows:f.spotShadowMap.length,numSpotLightShadowsWithMaps:f.numSpotLightShadowsWithMaps,numLightProbes:f.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:p.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ce,decodeVideoTexture:ye&&p.map.isVideoTexture===!0&&ot.getTransfer(p.map.colorSpace)===Ke,decodeVideoTextureEmissive:he&&p.emissiveMap.isVideoTexture===!0&&ot.getTransfer(p.emissiveMap.colorSpace)===Ke,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===Ct,flipSided:p.side===Et,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:de&&p.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&p.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return Ye.vertexUv1s=S.has(1),Ye.vertexUv2s=S.has(2),Ye.vertexUv3s=S.has(3),S.clear(),Ye}function o(p){const f=[];if(p.shaderID?f.push(p.shaderID):(f.push(p.customVertexShaderID),f.push(p.customFragmentShaderID)),p.defines!==void 0)for(const R in p.defines)f.push(R),f.push(p.defines[R]);return p.isRawShaderMaterial===!1&&(P(f,p),g(f,p),f.push(e.outputColorSpace)),f.push(p.customProgramCacheKey),f.join()}function P(p,f){p.push(f.precision),p.push(f.outputColorSpace),p.push(f.envMapMode),p.push(f.envMapCubeUVHeight),p.push(f.mapUv),p.push(f.alphaMapUv),p.push(f.lightMapUv),p.push(f.aoMapUv),p.push(f.bumpMapUv),p.push(f.normalMapUv),p.push(f.displacementMapUv),p.push(f.emissiveMapUv),p.push(f.metalnessMapUv),p.push(f.roughnessMapUv),p.push(f.anisotropyMapUv),p.push(f.clearcoatMapUv),p.push(f.clearcoatNormalMapUv),p.push(f.clearcoatRoughnessMapUv),p.push(f.iridescenceMapUv),p.push(f.iridescenceThicknessMapUv),p.push(f.sheenColorMapUv),p.push(f.sheenRoughnessMapUv),p.push(f.specularMapUv),p.push(f.specularColorMapUv),p.push(f.specularIntensityMapUv),p.push(f.transmissionMapUv),p.push(f.thicknessMapUv),p.push(f.combine),p.push(f.fogExp2),p.push(f.sizeAttenuation),p.push(f.morphTargetsCount),p.push(f.morphAttributeCount),p.push(f.numDirLights),p.push(f.numPointLights),p.push(f.numSpotLights),p.push(f.numSpotLightMaps),p.push(f.numHemiLights),p.push(f.numRectAreaLights),p.push(f.numDirLightShadows),p.push(f.numPointLightShadows),p.push(f.numSpotLightShadows),p.push(f.numSpotLightShadowsWithMaps),p.push(f.numLightProbes),p.push(f.shadowMapType),p.push(f.toneMapping),p.push(f.numClippingPlanes),p.push(f.numClipIntersection),p.push(f.depthPacking)}function g(p,f){d.disableAll(),f.supportsVertexTextures&&d.enable(0),f.instancing&&d.enable(1),f.instancingColor&&d.enable(2),f.instancingMorph&&d.enable(3),f.matcap&&d.enable(4),f.envMap&&d.enable(5),f.normalMapObjectSpace&&d.enable(6),f.normalMapTangentSpace&&d.enable(7),f.clearcoat&&d.enable(8),f.iridescence&&d.enable(9),f.alphaTest&&d.enable(10),f.vertexColors&&d.enable(11),f.vertexAlphas&&d.enable(12),f.vertexUv1s&&d.enable(13),f.vertexUv2s&&d.enable(14),f.vertexUv3s&&d.enable(15),f.vertexTangents&&d.enable(16),f.anisotropy&&d.enable(17),f.alphaHash&&d.enable(18),f.batching&&d.enable(19),f.dispersion&&d.enable(20),f.batchingColor&&d.enable(21),f.gradientMap&&d.enable(22),p.push(d.mask),d.disableAll(),f.fog&&d.enable(0),f.useFog&&d.enable(1),f.flatShading&&d.enable(2),f.logarithmicDepthBuffer&&d.enable(3),f.reversedDepthBuffer&&d.enable(4),f.skinning&&d.enable(5),f.morphTargets&&d.enable(6),f.morphNormals&&d.enable(7),f.morphColors&&d.enable(8),f.premultipliedAlpha&&d.enable(9),f.shadowMapEnabled&&d.enable(10),f.doubleSided&&d.enable(11),f.flipSided&&d.enable(12),f.useDepthPacking&&d.enable(13),f.dithering&&d.enable(14),f.transmission&&d.enable(15),f.sheen&&d.enable(16),f.opaque&&d.enable(17),f.pointsUvs&&d.enable(18),f.decodeVideoTexture&&d.enable(19),f.decodeVideoTextureEmissive&&d.enable(20),f.alphaToCoverage&&d.enable(21),p.push(d.mask)}function D(p){const f=B[p.type];let R;if(f){const F=Tt[f];R=Xr.clone(F.uniforms)}else R=p.uniforms;return R}function I(p,f){let R;for(let F=0,z=L.length;F<z;F++){const W=L[F];if(W.cacheKey===f){R=W,++R.usedTimes;break}}return R===void 0&&(R=new Uf(e,f,p,r),L.push(R)),R}function x(p){if(--p.usedTimes===0){const f=L.indexOf(p);L[f]=L[L.length-1],L.pop(),p.destroy()}}function N(p){A.remove(p)}function j(){A.dispose()}return{getParameters:l,getProgramCacheKey:o,getUniforms:D,acquireProgram:I,releaseProgram:x,releaseShaderCache:N,programs:L,dispose:j}}function Of(){let e=new WeakMap;function n(h){return e.has(h)}function t(h){let d=e.get(h);return d===void 0&&(d={},e.set(h,d)),d}function i(h){e.delete(h)}function s(h,d,A){e.get(h)[d]=A}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:s,dispose:r}}function Ff(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function pa(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function ha(){const e=[];let n=0;const t=[],i=[],s=[];function r(){n=0,t.length=0,i.length=0,s.length=0}function h(v,E,T,B,U,l){let o=e[n];return o===void 0?(o={id:v.id,object:v,geometry:E,material:T,groupOrder:B,renderOrder:v.renderOrder,z:U,group:l},e[n]=o):(o.id=v.id,o.object=v,o.geometry=E,o.material=T,o.groupOrder=B,o.renderOrder=v.renderOrder,o.z=U,o.group=l),n++,o}function d(v,E,T,B,U,l){const o=h(v,E,T,B,U,l);T.transmission>0?i.push(o):T.transparent===!0?s.push(o):t.push(o)}function A(v,E,T,B,U,l){const o=h(v,E,T,B,U,l);T.transmission>0?i.unshift(o):T.transparent===!0?s.unshift(o):t.unshift(o)}function S(v,E){t.length>1&&t.sort(v||Ff),i.length>1&&i.sort(E||pa),s.length>1&&s.sort(E||pa)}function L(){for(let v=n,E=e.length;v<E;v++){const T=e[v];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:d,unshift:A,finish:L,sort:S}}function Bf(){let e=new WeakMap;function n(i,s){const r=e.get(i);let h;return r===void 0?(h=new ha,e.set(i,[h])):s>=r.length?(h=new ha,r.push(h)):h=r[s],h}function t(){e=new WeakMap}return{get:n,dispose:t}}function Gf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new We,color:new Qe};break;case"SpotLight":t={position:new We,direction:new We,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new We,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new We,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new We,halfWidth:new We,halfHeight:new We};break}return e[n.id]=t,t}}}function Hf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Vf=0;function kf(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function zf(e){const n=new Gf,t=Hf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let S=0;S<9;S++)i.probe.push(new We);const s=new We,r=new nn,h=new nn;function d(S){let L=0,v=0,E=0;for(let p=0;p<9;p++)i.probe[p].set(0,0,0);let T=0,B=0,U=0,l=0,o=0,P=0,g=0,D=0,I=0,x=0,N=0;S.sort(kf);for(let p=0,f=S.length;p<f;p++){const R=S[p],F=R.color,z=R.intensity,W=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)L+=F.r*z,v+=F.g*z,E+=F.b*z;else if(R.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(R.sh.coefficients[X],z);N++}else if(R.isDirectionalLight){const X=n.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const re=R.shadow,H=t.get(R);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.directionalShadow[T]=H,i.directionalShadowMap[T]=Z,i.directionalShadowMatrix[T]=R.shadow.matrix,P++}i.directional[T]=X,T++}else if(R.isSpotLight){const X=n.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(F).multiplyScalar(z),X.distance=W,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,i.spot[U]=X;const re=R.shadow;if(R.map&&(i.spotLightMap[I]=R.map,I++,re.updateMatrices(R),R.castShadow&&x++),i.spotLightMatrix[U]=re.matrix,R.castShadow){const H=t.get(R);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,i.spotShadow[U]=H,i.spotShadowMap[U]=Z,D++}U++}else if(R.isRectAreaLight){const X=n.get(R);X.color.copy(F).multiplyScalar(z),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),i.rectArea[l]=X,l++}else if(R.isPointLight){const X=n.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const re=R.shadow,H=t.get(R);H.shadowIntensity=re.intensity,H.shadowBias=re.bias,H.shadowNormalBias=re.normalBias,H.shadowRadius=re.radius,H.shadowMapSize=re.mapSize,H.shadowCameraNear=re.camera.near,H.shadowCameraFar=re.camera.far,i.pointShadow[B]=H,i.pointShadowMap[B]=Z,i.pointShadowMatrix[B]=R.shadow.matrix,g++}i.point[B]=X,B++}else if(R.isHemisphereLight){const X=n.get(R);X.skyColor.copy(R.color).multiplyScalar(z),X.groundColor.copy(R.groundColor).multiplyScalar(z),i.hemi[o]=X,o++}}l>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2)),i.ambient[0]=L,i.ambient[1]=v,i.ambient[2]=E;const j=i.hash;(j.directionalLength!==T||j.pointLength!==B||j.spotLength!==U||j.rectAreaLength!==l||j.hemiLength!==o||j.numDirectionalShadows!==P||j.numPointShadows!==g||j.numSpotShadows!==D||j.numSpotMaps!==I||j.numLightProbes!==N)&&(i.directional.length=T,i.spot.length=U,i.rectArea.length=l,i.point.length=B,i.hemi.length=o,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=D+I-x,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=N,j.directionalLength=T,j.pointLength=B,j.spotLength=U,j.rectAreaLength=l,j.hemiLength=o,j.numDirectionalShadows=P,j.numPointShadows=g,j.numSpotShadows=D,j.numSpotMaps=I,j.numLightProbes=N,i.version=Vf++)}function A(S,L){let v=0,E=0,T=0,B=0,U=0;const l=L.matrixWorldInverse;for(let o=0,P=S.length;o<P;o++){const g=S[o];if(g.isDirectionalLight){const D=i.directional[v];D.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(l),v++}else if(g.isSpotLight){const D=i.spot[T];D.position.setFromMatrixPosition(g.matrixWorld),D.position.applyMatrix4(l),D.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(l),T++}else if(g.isRectAreaLight){const D=i.rectArea[B];D.position.setFromMatrixPosition(g.matrixWorld),D.position.applyMatrix4(l),h.identity(),r.copy(g.matrixWorld),r.premultiply(l),h.extractRotation(r),D.halfWidth.set(g.width*.5,0,0),D.halfHeight.set(0,g.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),B++}else if(g.isPointLight){const D=i.point[E];D.position.setFromMatrixPosition(g.matrixWorld),D.position.applyMatrix4(l),E++}else if(g.isHemisphereLight){const D=i.hemi[U];D.direction.setFromMatrixPosition(g.matrixWorld),D.direction.transformDirection(l),U++}}}return{setup:d,setupView:A,state:i}}function _a(e){const n=new zf(e),t=[],i=[];function s(L){S.camera=L,t.length=0,i.length=0}function r(L){t.push(L)}function h(L){i.push(L)}function d(){n.setup(t)}function A(L){n.setupView(t,L)}const S={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:s,state:S,setupLights:d,setupLightsView:A,pushLight:r,pushShadow:h}}function Wf(e){let n=new WeakMap;function t(s,r=0){const h=n.get(s);let d;return h===void 0?(d=new _a(e),n.set(s,[d])):r>=h.length?(d=new _a(e),h.push(d)):d=h[r],d}function i(){n=new WeakMap}return{get:t,dispose:i}}const Xf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kf(e,n,t){let i=new ga;const s=new Ze,r=new Ze,h=new mt,d=new Ur({depthPacking:wr}),A=new yr,S={},L=t.maxTextureSize,v={[an]:Et,[Et]:an,[Ct]:Ct},E=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Xf,fragmentShader:Yf}),T=E.clone();T.defines.HORIZONTAL_PASS=1;const B=new Jn;B.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new Vt(B,E),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ba;let o=this.type;this.render=function(x,N,j){if(l.enabled===!1||l.autoUpdate===!1&&l.needsUpdate===!1||x.length===0)return;const p=e.getRenderTarget(),f=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),F=e.state;F.setBlending(wt),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=o!==Rt&&this.type===Rt,W=o===Rt&&this.type!==Rt;for(let Z=0,X=x.length;Z<X;Z++){const re=x[Z],H=re.shadow;if(H===void 0){qe("WebGLShadowMap:",re,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const fe=H.getFrameExtents();if(s.multiply(fe),r.copy(H.mapSize),(s.x>L||s.y>L)&&(s.x>L&&(r.x=Math.floor(L/fe.x),s.x=r.x*fe.x,H.mapSize.x=r.x),s.y>L&&(r.y=Math.floor(L/fe.y),s.y=r.y*fe.y,H.mapSize.y=r.y)),H.map===null||z===!0||W===!0){const Ue=this.type!==Rt?{minFilter:tn,magFilter:tn}:{};H.map!==null&&H.map.dispose(),H.map=new Kt(s.x,s.y,Ue),H.map.texture.name=re.name+".shadowMap",H.camera.updateProjectionMatrix()}e.setRenderTarget(H.map),e.clear();const pe=H.getViewportCount();for(let Ue=0;Ue<pe;Ue++){const ke=H.getViewport(Ue);h.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),F.viewport(h),H.updateMatrices(re,Ue),i=H.getFrustum(),D(N,j,H.camera,re,this.type)}H.isPointLightShadow!==!0&&this.type===Rt&&P(H,j),H.needsUpdate=!1}o=this.type,l.needsUpdate=!1,e.setRenderTarget(p,f,R)};function P(x,N){const j=n.update(U);E.defines.VSM_SAMPLES!==x.blurSamples&&(E.defines.VSM_SAMPLES=x.blurSamples,T.defines.VSM_SAMPLES=x.blurSamples,E.needsUpdate=!0,T.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Kt(s.x,s.y)),E.uniforms.shadow_pass.value=x.map.texture,E.uniforms.resolution.value=x.mapSize,E.uniforms.radius.value=x.radius,e.setRenderTarget(x.mapPass),e.clear(),e.renderBufferDirect(N,null,j,E,U,null),T.uniforms.shadow_pass.value=x.mapPass.texture,T.uniforms.resolution.value=x.mapSize,T.uniforms.radius.value=x.radius,e.setRenderTarget(x.map),e.clear(),e.renderBufferDirect(N,null,j,T,U,null)}function g(x,N,j,p){let f=null;const R=j.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(R!==void 0)f=R;else if(f=j.isPointLight===!0?A:d,e.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const F=f.uuid,z=N.uuid;let W=S[F];W===void 0&&(W={},S[F]=W);let Z=W[z];Z===void 0&&(Z=f.clone(),W[z]=Z,N.addEventListener("dispose",I)),f=Z}if(f.visible=N.visible,f.wireframe=N.wireframe,p===Rt?f.side=N.shadowSide!==null?N.shadowSide:N.side:f.side=N.shadowSide!==null?N.shadowSide:v[N.side],f.alphaMap=N.alphaMap,f.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,f.map=N.map,f.clipShadows=N.clipShadows,f.clippingPlanes=N.clippingPlanes,f.clipIntersection=N.clipIntersection,f.displacementMap=N.displacementMap,f.displacementScale=N.displacementScale,f.displacementBias=N.displacementBias,f.wireframeLinewidth=N.wireframeLinewidth,f.linewidth=N.linewidth,j.isPointLight===!0&&f.isMeshDistanceMaterial===!0){const F=e.properties.get(f);F.light=j}return f}function D(x,N,j,p,f){if(x.visible===!1)return;if(x.layers.test(N.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&f===Rt)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,x.matrixWorld);const z=n.update(x),W=x.material;if(Array.isArray(W)){const Z=z.groups;for(let X=0,re=Z.length;X<re;X++){const H=Z[X],fe=W[H.materialIndex];if(fe&&fe.visible){const pe=g(x,fe,p,f);x.onBeforeShadow(e,x,N,j,z,pe,H),e.renderBufferDirect(j,null,z,pe,x,H),x.onAfterShadow(e,x,N,j,z,pe,H)}}}else if(W.visible){const Z=g(x,W,p,f);x.onBeforeShadow(e,x,N,j,z,Z,null),e.renderBufferDirect(j,null,z,Z,x,null),x.onAfterShadow(e,x,N,j,z,Z,null)}}const F=x.children;for(let z=0,W=F.length;z<W;z++)D(F[z],N,j,p,f)}function I(x){x.target.removeEventListener("dispose",I);for(const j in S){const p=S[j],f=x.target.uuid;f in p&&(p[f].dispose(),delete p[f])}}}const qf={[qn]:Kn,[Yn]:zn,[Xn]:kn,[Sn]:Wn,[Kn]:qn,[zn]:Yn,[kn]:Xn,[Wn]:Sn};function Zf(e,n){function t(){let m=!1;const ae=new mt;let ee=null;const te=new mt(0,0,0,0);return{setMask:function($){ee!==$&&!m&&(e.colorMask($,$,$,$),ee=$)},setLocked:function($){m=$},setClear:function($,k,de,Ce,Ye){Ye===!0&&($*=Ce,k*=Ce,de*=Ce),ae.set($,k,de,Ce),te.equals(ae)===!1&&(e.clearColor($,k,de,Ce),te.copy(ae))},reset:function(){m=!1,ee=null,te.set(-1,0,0,0)}}}function i(){let m=!1,ae=!1,ee=null,te=null,$=null;return{setReversed:function(k){if(ae!==k){const de=n.get("EXT_clip_control");k?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),ae=k;const Ce=$;$=null,this.setClear(Ce)}},getReversed:function(){return ae},setTest:function(k){k?K(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(k){ee!==k&&!m&&(e.depthMask(k),ee=k)},setFunc:function(k){if(ae&&(k=qf[k]),te!==k){switch(k){case qn:e.depthFunc(e.NEVER);break;case Kn:e.depthFunc(e.ALWAYS);break;case Yn:e.depthFunc(e.LESS);break;case Sn:e.depthFunc(e.LEQUAL);break;case Xn:e.depthFunc(e.EQUAL);break;case Wn:e.depthFunc(e.GEQUAL);break;case zn:e.depthFunc(e.GREATER);break;case kn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}te=k}},setLocked:function(k){m=k},setClear:function(k){$!==k&&(ae&&(k=1-k),e.clearDepth(k),$=k)},reset:function(){m=!1,ee=null,te=null,$=null,ae=!1}}}function s(){let m=!1,ae=null,ee=null,te=null,$=null,k=null,de=null,Ce=null,Ye=null;return{setTest:function(Ge){m||(Ge?K(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(Ge){ae!==Ge&&!m&&(e.stencilMask(Ge),ae=Ge)},setFunc:function(Ge,bt,Mt){(ee!==Ge||te!==bt||$!==Mt)&&(e.stencilFunc(Ge,bt,Mt),ee=Ge,te=bt,$=Mt)},setOp:function(Ge,bt,Mt){(k!==Ge||de!==bt||Ce!==Mt)&&(e.stencilOp(Ge,bt,Mt),k=Ge,de=bt,Ce=Mt)},setLocked:function(Ge){m=Ge},setClear:function(Ge){Ye!==Ge&&(e.clearStencil(Ge),Ye=Ge)},reset:function(){m=!1,ae=null,ee=null,te=null,$=null,k=null,de=null,Ce=null,Ye=null}}}const r=new t,h=new i,d=new s,A=new WeakMap,S=new WeakMap;let L={},v={},E=new WeakMap,T=[],B=null,U=!1,l=null,o=null,P=null,g=null,D=null,I=null,x=null,N=new Qe(0,0,0),j=0,p=!1,f=null,R=null,F=null,z=null,W=null;const Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,re=0;const H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=re>=1):H.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=re>=2);let fe=null,pe={};const Ue=e.getParameter(e.SCISSOR_BOX),ke=e.getParameter(e.VIEWPORT),Je=new mt().fromArray(Ue),$e=new mt().fromArray(ke);function et(m,ae,ee,te){const $=new Uint8Array(4),k=e.createTexture();e.bindTexture(m,k),e.texParameteri(m,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(m,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let de=0;de<ee;de++)m===e.TEXTURE_3D||m===e.TEXTURE_2D_ARRAY?e.texImage3D(ae,0,e.RGBA,1,1,te,0,e.RGBA,e.UNSIGNED_BYTE,$):e.texImage2D(ae+de,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,$);return k}const V={};V[e.TEXTURE_2D]=et(e.TEXTURE_2D,e.TEXTURE_2D,1),V[e.TEXTURE_CUBE_MAP]=et(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[e.TEXTURE_2D_ARRAY]=et(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),V[e.TEXTURE_3D]=et(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),h.setClear(1),d.setClear(0),K(e.DEPTH_TEST),h.setFunc(Sn),Ie(!1),Ne(Bi),K(e.CULL_FACE),je(wt);function K(m){L[m]!==!0&&(e.enable(m),L[m]=!0)}function le(m){L[m]!==!1&&(e.disable(m),L[m]=!1)}function De(m,ae){return v[m]!==ae?(e.bindFramebuffer(m,ae),v[m]=ae,m===e.DRAW_FRAMEBUFFER&&(v[e.FRAMEBUFFER]=ae),m===e.FRAMEBUFFER&&(v[e.DRAW_FRAMEBUFFER]=ae),!0):!1}function xe(m,ae){let ee=T,te=!1;if(m){ee=E.get(ae),ee===void 0&&(ee=[],E.set(ae,ee));const $=m.textures;if(ee.length!==$.length||ee[0]!==e.COLOR_ATTACHMENT0){for(let k=0,de=$.length;k<de;k++)ee[k]=e.COLOR_ATTACHMENT0+k;ee.length=$.length,te=!0}}else ee[0]!==e.BACK&&(ee[0]=e.BACK,te=!0);te&&e.drawBuffers(ee)}function ye(m){return B!==m?(e.useProgram(m),B=m,!0):!1}const ft={[jt]:e.FUNC_ADD,[rr]:e.FUNC_SUBTRACT,[ar]:e.FUNC_REVERSE_SUBTRACT};ft[mo]=e.MIN,ft[xo]=e.MAX;const we={[Sr]:e.ZERO,[vr]:e.ONE,[gr]:e.SRC_COLOR,[xr]:e.SRC_ALPHA,[mr]:e.SRC_ALPHA_SATURATE,[_r]:e.DST_COLOR,[hr]:e.DST_ALPHA,[pr]:e.ONE_MINUS_SRC_COLOR,[ur]:e.ONE_MINUS_SRC_ALPHA,[dr]:e.ONE_MINUS_DST_COLOR,[fr]:e.ONE_MINUS_DST_ALPHA,[lr]:e.CONSTANT_COLOR,[cr]:e.ONE_MINUS_CONSTANT_COLOR,[sr]:e.CONSTANT_ALPHA,[or]:e.ONE_MINUS_CONSTANT_ALPHA};function je(m,ae,ee,te,$,k,de,Ce,Ye,Ge){if(m===wt){U===!0&&(le(e.BLEND),U=!1);return}if(U===!1&&(K(e.BLEND),U=!0),m!==zr){if(m!==l||Ge!==p){if((o!==jt||D!==jt)&&(e.blendEquation(e.FUNC_ADD),o=jt,D=jt),Ge)switch(m){case xn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Vi:e.blendFunc(e.ONE,e.ONE);break;case Hi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Gi:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:xt("WebGLState: Invalid blending: ",m);break}else switch(m){case xn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Vi:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Hi:xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gi:xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xt("WebGLState: Invalid blending: ",m);break}P=null,g=null,I=null,x=null,N.set(0,0,0),j=0,l=m,p=Ge}return}$=$||ae,k=k||ee,de=de||te,(ae!==o||$!==D)&&(e.blendEquationSeparate(ft[ae],ft[$]),o=ae,D=$),(ee!==P||te!==g||k!==I||de!==x)&&(e.blendFuncSeparate(we[ee],we[te],we[k],we[de]),P=ee,g=te,I=k,x=de),(Ce.equals(N)===!1||Ye!==j)&&(e.blendColor(Ce.r,Ce.g,Ce.b,Ye),N.copy(Ce),j=Ye),l=m,p=!1}function _(m,ae){m.side===Ct?le(e.CULL_FACE):K(e.CULL_FACE);let ee=m.side===Et;ae&&(ee=!ee),Ie(ee),m.blending===xn&&m.transparent===!1?je(wt):je(m.blending,m.blendEquation,m.blendSrc,m.blendDst,m.blendEquationAlpha,m.blendSrcAlpha,m.blendDstAlpha,m.blendColor,m.blendAlpha,m.premultipliedAlpha),h.setFunc(m.depthFunc),h.setTest(m.depthTest),h.setMask(m.depthWrite),r.setMask(m.colorWrite);const te=m.stencilWrite;d.setTest(te),te&&(d.setMask(m.stencilWriteMask),d.setFunc(m.stencilFunc,m.stencilRef,m.stencilFuncMask),d.setOp(m.stencilFail,m.stencilZFail,m.stencilZPass)),he(m.polygonOffset,m.polygonOffsetFactor,m.polygonOffsetUnits),m.alphaToCoverage===!0?K(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(m){f!==m&&(m?e.frontFace(e.CW):e.frontFace(e.CCW),f=m)}function Ne(m){m!==Vr?(K(e.CULL_FACE),m!==R&&(m===Bi?e.cullFace(e.BACK):m===kr?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):le(e.CULL_FACE),R=m}function Xe(m){m!==F&&(X&&e.lineWidth(m),F=m)}function he(m,ae,ee){m?(K(e.POLYGON_OFFSET_FILL),(z!==ae||W!==ee)&&(e.polygonOffset(ae,ee),z=ae,W=ee)):le(e.POLYGON_OFFSET_FILL)}function tt(m){m?K(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function ve(m){m===void 0&&(m=e.TEXTURE0+Z-1),fe!==m&&(e.activeTexture(m),fe=m)}function Pe(m,ae,ee){ee===void 0&&(fe===null?ee=e.TEXTURE0+Z-1:ee=fe);let te=pe[ee];te===void 0&&(te={type:void 0,texture:void 0},pe[ee]=te),(te.type!==m||te.texture!==ae)&&(fe!==ee&&(e.activeTexture(ee),fe=ee),e.bindTexture(m,ae||V[m]),te.type=m,te.texture=ae)}function u(){const m=pe[fe];m!==void 0&&m.type!==void 0&&(e.bindTexture(m.type,null),m.type=void 0,m.texture=void 0)}function a(){try{e.compressedTexImage2D(...arguments)}catch(m){m("WebGLState:",m)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(m){m("WebGLState:",m)}}function G(){try{e.texSubImage2D(...arguments)}catch(m){m("WebGLState:",m)}}function Y(){try{e.texSubImage3D(...arguments)}catch(m){m("WebGLState:",m)}}function O(){try{e.compressedTexSubImage2D(...arguments)}catch(m){m("WebGLState:",m)}}function me(){try{e.compressedTexSubImage3D(...arguments)}catch(m){m("WebGLState:",m)}}function ie(){try{e.texStorage2D(...arguments)}catch(m){m("WebGLState:",m)}}function Se(){try{e.texStorage3D(...arguments)}catch(m){m("WebGLState:",m)}}function _e(){try{e.texImage2D(...arguments)}catch(m){m("WebGLState:",m)}}function q(){try{e.texImage3D(...arguments)}catch(m){m("WebGLState:",m)}}function J(m){Je.equals(m)===!1&&(e.scissor(m.x,m.y,m.z,m.w),Je.copy(m))}function Te(m){$e.equals(m)===!1&&(e.viewport(m.x,m.y,m.z,m.w),$e.copy(m))}function Me(m,ae){let ee=S.get(ae);ee===void 0&&(ee=new WeakMap,S.set(ae,ee));let te=ee.get(m);te===void 0&&(te=e.getUniformBlockIndex(ae,m.name),ee.set(m,te))}function se(m,ae){const te=S.get(ae).get(m);A.get(ae)!==te&&(e.uniformBlockBinding(ae,te,m.__bindingPointIndex),A.set(ae,te))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),h.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),L={},fe=null,pe={},v={},E=new WeakMap,T=[],B=null,U=!1,l=null,o=null,P=null,g=null,D=null,I=null,x=null,N=new Qe(0,0,0),j=0,p=!1,f=null,R=null,F=null,z=null,W=null,Je.set(0,0,e.canvas.width,e.canvas.height),$e.set(0,0,e.canvas.width,e.canvas.height),r.reset(),h.reset(),d.reset()}return{buffers:{color:r,depth:h,stencil:d},enable:K,disable:le,bindFramebuffer:De,drawBuffers:xe,useProgram:ye,setBlending:je,setMaterial:_,setFlipSided:Ie,setCullFace:Ne,setLineWidth:Xe,setPolygonOffset:he,setScissorTest:tt,activeTexture:ve,bindTexture:Pe,unbindTexture:u,compressedTexImage2D:a,compressedTexImage3D:C,texImage2D:_e,texImage3D:q,updateUBOMapping:Me,uniformBlockBinding:se,texStorage2D:ie,texStorage3D:Se,texSubImage2D:G,texSubImage3D:Y,compressedTexSubImage2D:O,compressedTexSubImage3D:me,scissor:J,viewport:Te,reset:Re}}function $f(e,n,t,i,s,r,h){const d=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,A=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),S=new Ze,L=new WeakMap;let v;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function B(u,a){return T?new OffscreenCanvas(u,a):uo("canvas")}function U(u,a,C){let G=1;const Y=Pe(u);if((Y.width>C||Y.height>C)&&(G=C/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap||typeof VideoFrame<"u"&&u instanceof VideoFrame){const O=Math.floor(G*Y.width),me=Math.floor(G*Y.height);v===void 0&&(v=B(O,me));const ie=a?B(O,me):v;return ie.width=O,ie.height=me,ie.getContext("2d").drawImage(u,0,0,O,me),qe("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+O+"x"+me+")."),ie}else return"data"in u&&qe("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),u;return u}function l(u){return u.generateMipmaps}function o(u){e.generateMipmap(u)}function P(u){return u.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:u.isWebGL3DRenderTarget?e.TEXTURE_3D:u.isWebGLArrayRenderTarget||u.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function g(u,a,C,G,Y=!1){if(u!==null){if(e[u]!==void 0)return e[u];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+u+"'")}let O=a;if(a===e.RED&&(C===e.FLOAT&&(O=e.R32F),C===e.HALF_FLOAT&&(O=e.R16F),C===e.UNSIGNED_BYTE&&(O=e.R8)),a===e.RED_INTEGER&&(C===e.UNSIGNED_BYTE&&(O=e.R8UI),C===e.UNSIGNED_SHORT&&(O=e.R16UI),C===e.UNSIGNED_INT&&(O=e.R32UI),C===e.BYTE&&(O=e.R8I),C===e.SHORT&&(O=e.R16I),C===e.INT&&(O=e.R32I)),a===e.RG&&(C===e.FLOAT&&(O=e.RG32F),C===e.HALF_FLOAT&&(O=e.RG16F),C===e.UNSIGNED_BYTE&&(O=e.RG8)),a===e.RG_INTEGER&&(C===e.UNSIGNED_BYTE&&(O=e.RG8UI),C===e.UNSIGNED_SHORT&&(O=e.RG16UI),C===e.UNSIGNED_INT&&(O=e.RG32UI),C===e.BYTE&&(O=e.RG8I),C===e.SHORT&&(O=e.RG16I),C===e.INT&&(O=e.RG32I)),a===e.RGB_INTEGER&&(C===e.UNSIGNED_BYTE&&(O=e.RGB8UI),C===e.UNSIGNED_SHORT&&(O=e.RGB16UI),C===e.UNSIGNED_INT&&(O=e.RGB32UI),C===e.BYTE&&(O=e.RGB8I),C===e.SHORT&&(O=e.RGB16I),C===e.INT&&(O=e.RGB32I)),a===e.RGBA_INTEGER&&(C===e.UNSIGNED_BYTE&&(O=e.RGBA8UI),C===e.UNSIGNED_SHORT&&(O=e.RGBA16UI),C===e.UNSIGNED_INT&&(O=e.RGBA32UI),C===e.BYTE&&(O=e.RGBA8I),C===e.SHORT&&(O=e.RGBA16I),C===e.INT&&(O=e.RGBA32I)),a===e.RGB&&(C===e.UNSIGNED_INT_5_9_9_9_REV&&(O=e.RGB9_E5),C===e.UNSIGNED_INT_10F_11F_11F_REV&&(O=e.R11F_G11F_B10F)),a===e.RGBA){const me=Y?Oa:ot.getTransfer(G);C===e.FLOAT&&(O=e.RGBA32F),C===e.HALF_FLOAT&&(O=e.RGBA16F),C===e.UNSIGNED_BYTE&&(O=me===Ke?e.SRGB8_ALPHA8:e.RGBA8),C===e.UNSIGNED_SHORT_4_4_4_4&&(O=e.RGBA4),C===e.UNSIGNED_SHORT_5_5_5_1&&(O=e.RGB5_A1)}return(O===e.R16F||O===e.R32F||O===e.RG16F||O===e.RG32F||O===e.RGBA16F||O===e.RGBA32F)&&n.get("EXT_color_buffer_float"),O}function D(u,a){let C;return u?a===null||a===on||a===rn?C=e.DEPTH24_STENCIL8:a===Gt?C=e.DEPTH32F_STENCIL8:a===En&&(C=e.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):a===null||a===on||a===rn?C=e.DEPTH_COMPONENT24:a===Gt?C=e.DEPTH_COMPONENT32F:a===En&&(C=e.DEPTH_COMPONENT16),C}function I(u,a){return l(u)===!0||u.isFramebufferTexture&&u.minFilter!==tn&&u.minFilter!==Dt?Math.log2(Math.max(a.width,a.height))+1:u.mipmaps!==void 0&&u.mipmaps.length>0?u.mipmaps.length:u.isCompressedTexture&&Array.isArray(u.image)?a.mipmaps.length:1}function x(u){const a=u.target;a.removeEventListener("dispose",x),j(a),a.isVideoTexture&&L.delete(a)}function N(u){const a=u.target;a.removeEventListener("dispose",N),f(a)}function j(u){const a=i.get(u);if(a.__webglInit===void 0)return;const C=u.source,G=E.get(C);if(G){const Y=G[a.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&p(u),Object.keys(G).length===0&&E.delete(C)}i.remove(u)}function p(u){const a=i.get(u);e.deleteTexture(a.__webglTexture);const C=u.source,G=E.get(C);delete G[a.__cacheKey],h.memory.textures--}function f(u){const a=i.get(u);if(u.depthTexture&&(u.depthTexture.dispose(),i.remove(u.depthTexture)),u.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(a.__webglFramebuffer[G]))for(let Y=0;Y<a.__webglFramebuffer[G].length;Y++)e.deleteFramebuffer(a.__webglFramebuffer[G][Y]);else e.deleteFramebuffer(a.__webglFramebuffer[G]);a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[G])}else{if(Array.isArray(a.__webglFramebuffer))for(let G=0;G<a.__webglFramebuffer.length;G++)e.deleteFramebuffer(a.__webglFramebuffer[G]);else e.deleteFramebuffer(a.__webglFramebuffer);if(a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let G=0;G<a.__webglColorRenderbuffer.length;G++)a.__webglColorRenderbuffer[G]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[G]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}const C=u.textures;for(let G=0,Y=C.length;G<Y;G++){const O=i.get(C[G]);O.__webglTexture&&(e.deleteTexture(O.__webglTexture),h.memory.textures--),i.remove(C[G])}i.remove(u)}let R=0;function F(){R=0}function z(){const u=R;return u>=s.maxTextures&&qe("WebGLTextures: Trying to use "+u+" texture units while this GPU supports only "+s.maxTextures),R+=1,u}function W(u){const a=[];return a.push(u.wrapS),a.push(u.wrapT),a.push(u.wrapR||0),a.push(u.magFilter),a.push(u.minFilter),a.push(u.anisotropy),a.push(u.internalFormat),a.push(u.format),a.push(u.type),a.push(u.generateMipmaps),a.push(u.premultiplyAlpha),a.push(u.flipY),a.push(u.unpackAlignment),a.push(u.colorSpace),a.join()}function Z(u,a){const C=i.get(u);if(u.isVideoTexture&&tt(u),u.isRenderTargetTexture===!1&&u.isExternalTexture!==!0&&u.version>0&&C.__version!==u.version){const G=u.image;if(G===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{V(C,u,a);return}}else u.isExternalTexture&&(C.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,C.__webglTexture,e.TEXTURE0+a)}function X(u,a){const C=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&C.__version!==u.version){V(C,u,a);return}else u.isExternalTexture&&(C.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,C.__webglTexture,e.TEXTURE0+a)}function re(u,a){const C=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&C.__version!==u.version){V(C,u,a);return}t.bindTexture(e.TEXTURE_3D,C.__webglTexture,e.TEXTURE0+a)}function H(u,a){const C=i.get(u);if(u.version>0&&C.__version!==u.version){K(C,u,a);return}t.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+a)}const fe={[Mr]:e.REPEAT,[Vn]:e.CLAMP_TO_EDGE,[Er]:e.MIRRORED_REPEAT},pe={[tn]:e.NEAREST,[br]:e.NEAREST_MIPMAP_NEAREST,[dn]:e.NEAREST_MIPMAP_LINEAR,[Dt]:e.LINEAR,[Dn]:e.LINEAR_MIPMAP_NEAREST,[Jt]:e.LINEAR_MIPMAP_LINEAR},Ue={[Lr]:e.NEVER,[Dr]:e.ALWAYS,[Pr]:e.LESS,[Ea]:e.LEQUAL,[Cr]:e.EQUAL,[Rr]:e.GEQUAL,[Ar]:e.GREATER,[Tr]:e.NOTEQUAL};function ke(u,a){if(a.type===Gt&&n.has("OES_texture_float_linear")===!1&&(a.magFilter===Dt||a.magFilter===Dn||a.magFilter===dn||a.magFilter===Jt||a.minFilter===Dt||a.minFilter===Dn||a.minFilter===dn||a.minFilter===Jt)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(u,e.TEXTURE_WRAP_S,fe[a.wrapS]),e.texParameteri(u,e.TEXTURE_WRAP_T,fe[a.wrapT]),(u===e.TEXTURE_3D||u===e.TEXTURE_2D_ARRAY)&&e.texParameteri(u,e.TEXTURE_WRAP_R,fe[a.wrapR]),e.texParameteri(u,e.TEXTURE_MAG_FILTER,pe[a.magFilter]),e.texParameteri(u,e.TEXTURE_MIN_FILTER,pe[a.minFilter]),a.compareFunction&&(e.texParameteri(u,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(u,e.TEXTURE_COMPARE_FUNC,Ue[a.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(a.magFilter===tn||a.minFilter!==dn&&a.minFilter!==Jt||a.type===Gt&&n.has("OES_texture_float_linear")===!1)return;if(a.anisotropy>1||i.get(a).__currentAnisotropy){const C=n.get("EXT_texture_filter_anisotropic");e.texParameterf(u,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,s.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy}}}function Je(u,a){let C=!1;u.__webglInit===void 0&&(u.__webglInit=!0,a.addEventListener("dispose",x));const G=a.source;let Y=E.get(G);Y===void 0&&(Y={},E.set(G,Y));const O=W(a);if(O!==u.__cacheKey){Y[O]===void 0&&(Y[O]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,C=!0),Y[O].usedTimes++;const me=Y[u.__cacheKey];me!==void 0&&(Y[u.__cacheKey].usedTimes--,me.usedTimes===0&&p(a)),u.__cacheKey=O,u.__webglTexture=Y[O].texture}return C}function $e(u,a,C){return Math.floor(Math.floor(u/C)/a)}function et(u,a,C,G){const O=u.updateRanges;if(O.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,a.width,a.height,C,G,a.data);else{O.sort((q,J)=>q.start-J.start);let me=0;for(let q=1;q<O.length;q++){const J=O[me],Te=O[q],Me=J.start+J.count,se=$e(Te.start,a.width,4),Re=$e(J.start,a.width,4);Te.start<=Me+1&&se===Re&&$e(Te.start+Te.count-1,a.width,4)===se?J.count=Math.max(J.count,Te.start+Te.count-J.start):(++me,O[me]=Te)}O.length=me+1;const ie=e.getParameter(e.UNPACK_ROW_LENGTH),Se=e.getParameter(e.UNPACK_SKIP_PIXELS),_e=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,a.width);for(let q=0,J=O.length;q<J;q++){const Te=O[q],Me=Math.floor(Te.start/4),se=Math.ceil(Te.count/4),Re=Me%a.width,m=Math.floor(Me/a.width),ae=se,ee=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Re),e.pixelStorei(e.UNPACK_SKIP_ROWS,m),t.texSubImage2D(e.TEXTURE_2D,0,Re,m,ae,ee,C,G,a.data)}u.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ie),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Se),e.pixelStorei(e.UNPACK_SKIP_ROWS,_e)}}function V(u,a,C){let G=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(G=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(G=e.TEXTURE_3D);const Y=Je(u,a),O=a.source;t.bindTexture(G,u.__webglTexture,e.TEXTURE0+C);const me=i.get(O);if(O.version!==me.__version||Y===!0){t.activeTexture(e.TEXTURE0+C);const ie=ot.getPrimaries(ot.workingColorSpace),Se=a.colorSpace===Wt?null:ot.getPrimaries(a.colorSpace),_e=a.colorSpace===Wt||ie===Se?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let q=U(a.image,!1,s.maxTextureSize);q=ve(a,q);const J=r.convert(a.format,a.colorSpace),Te=r.convert(a.type);let Me=g(a.internalFormat,J,Te,a.colorSpace,a.isVideoTexture);ke(G,a);let se;const Re=a.mipmaps,m=a.isVideoTexture!==!0,ae=me.__version===void 0||Y===!0,ee=O.dataReady,te=I(a,q);if(a.isDepthTexture)Me=D(a.format===vn,a.type),ae&&(m?t.texStorage2D(e.TEXTURE_2D,1,Me,q.width,q.height):t.texImage2D(e.TEXTURE_2D,0,Me,q.width,q.height,0,J,Te,null));else if(a.isDataTexture)if(Re.length>0){m&&ae&&t.texStorage2D(e.TEXTURE_2D,te,Me,Re[0].width,Re[0].height);for(let $=0,k=Re.length;$<k;$++)se=Re[$],m?ee&&t.texSubImage2D(e.TEXTURE_2D,$,0,0,se.width,se.height,J,Te,se.data):t.texImage2D(e.TEXTURE_2D,$,Me,se.width,se.height,0,J,Te,se.data);a.generateMipmaps=!1}else m?(ae&&t.texStorage2D(e.TEXTURE_2D,te,Me,q.width,q.height),ee&&et(a,q,J,Te)):t.texImage2D(e.TEXTURE_2D,0,Me,q.width,q.height,0,J,Te,q.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){m&&ae&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,Me,Re[0].width,Re[0].height,q.depth);for(let $=0,k=Re.length;$<k;$++)if(se=Re[$],a.format!==Pt)if(J!==null)if(m){if(ee)if(a.layerUpdates.size>0){const de=zi(se.width,se.height,a.format,a.type);for(const Ce of a.layerUpdates){const Ye=se.data.subarray(Ce*de/se.data.BYTES_PER_ELEMENT,(Ce+1)*de/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,Ce,se.width,se.height,1,J,Ye)}a.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,se.width,se.height,q.depth,J,se.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,Me,se.width,se.height,q.depth,0,se.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else m?ee&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,se.width,se.height,q.depth,J,Te,se.data):t.texImage3D(e.TEXTURE_2D_ARRAY,$,Me,se.width,se.height,q.depth,0,J,Te,se.data)}else{m&&ae&&t.texStorage2D(e.TEXTURE_2D,te,Me,Re[0].width,Re[0].height);for(let $=0,k=Re.length;$<k;$++)se=Re[$],a.format!==Pt?J!==null?m?ee&&t.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,se.width,se.height,J,se.data):t.compressedTexImage2D(e.TEXTURE_2D,$,Me,se.width,se.height,0,se.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):m?ee&&t.texSubImage2D(e.TEXTURE_2D,$,0,0,se.width,se.height,J,Te,se.data):t.texImage2D(e.TEXTURE_2D,$,Me,se.width,se.height,0,J,Te,se.data)}else if(a.isDataArrayTexture)if(m){if(ae&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,Me,q.width,q.height,q.depth),ee)if(a.layerUpdates.size>0){const $=zi(q.width,q.height,a.format,a.type);for(const k of a.layerUpdates){const de=q.data.subarray(k*$/q.data.BYTES_PER_ELEMENT,(k+1)*$/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,k,q.width,q.height,1,J,Te,de)}a.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,J,Te,q.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,Me,q.width,q.height,q.depth,0,J,Te,q.data);else if(a.isData3DTexture)m?(ae&&t.texStorage3D(e.TEXTURE_3D,te,Me,q.width,q.height,q.depth),ee&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,J,Te,q.data)):t.texImage3D(e.TEXTURE_3D,0,Me,q.width,q.height,q.depth,0,J,Te,q.data);else if(a.isFramebufferTexture){if(ae)if(m)t.texStorage2D(e.TEXTURE_2D,te,Me,q.width,q.height);else{let $=q.width,k=q.height;for(let de=0;de<te;de++)t.texImage2D(e.TEXTURE_2D,de,Me,$,k,0,J,Te,null),$>>=1,k>>=1}}else if(Re.length>0){if(m&&ae){const $=Pe(Re[0]);t.texStorage2D(e.TEXTURE_2D,te,Me,$.width,$.height)}for(let $=0,k=Re.length;$<k;$++)se=Re[$],m?ee&&t.texSubImage2D(e.TEXTURE_2D,$,0,0,J,Te,se):t.texImage2D(e.TEXTURE_2D,$,Me,J,Te,se);a.generateMipmaps=!1}else if(m){if(ae){const $=Pe(q);t.texStorage2D(e.TEXTURE_2D,te,Me,$.width,$.height)}ee&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,J,Te,q)}else t.texImage2D(e.TEXTURE_2D,0,Me,J,Te,q);l(a)&&o(G),me.__version=O.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function K(u,a,C){if(a.image.length!==6)return;const G=Je(u,a),Y=a.source;t.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture,e.TEXTURE0+C);const O=i.get(Y);if(Y.version!==O.__version||G===!0){t.activeTexture(e.TEXTURE0+C);const me=ot.getPrimaries(ot.workingColorSpace),ie=a.colorSpace===Wt?null:ot.getPrimaries(a.colorSpace),Se=a.colorSpace===Wt||me===ie?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const _e=a.isCompressedTexture||a.image[0].isCompressedTexture,q=a.image[0]&&a.image[0].isDataTexture,J=[];for(let k=0;k<6;k++)!_e&&!q?J[k]=U(a.image[k],!0,s.maxCubemapSize):J[k]=q?a.image[k].image:a.image[k],J[k]=ve(a,J[k]);const Te=J[0],Me=r.convert(a.format,a.colorSpace),se=r.convert(a.type),Re=g(a.internalFormat,Me,se,a.colorSpace),m=a.isVideoTexture!==!0,ae=O.__version===void 0||G===!0,ee=Y.dataReady;let te=I(a,Te);ke(e.TEXTURE_CUBE_MAP,a);let $;if(_e){m&&ae&&t.texStorage2D(e.TEXTURE_CUBE_MAP,te,Re,Te.width,Te.height);for(let k=0;k<6;k++){$=J[k].mipmaps;for(let de=0;de<$.length;de++){const Ce=$[de];a.format!==Pt?Me!==null?m?ee&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,0,0,Ce.width,Ce.height,Me,Ce.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,Re,Ce.width,Ce.height,0,Ce.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):m?ee&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,0,0,Ce.width,Ce.height,Me,se,Ce.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,Re,Ce.width,Ce.height,0,Me,se,Ce.data)}}}else{if($=a.mipmaps,m&&ae){$.length>0&&te++;const k=Pe(J[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,te,Re,k.width,k.height)}for(let k=0;k<6;k++)if(q){m?ee&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,J[k].width,J[k].height,Me,se,J[k].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Re,J[k].width,J[k].height,0,Me,se,J[k].data);for(let de=0;de<$.length;de++){const Ye=$[de].image[k].image;m?ee&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,0,0,Ye.width,Ye.height,Me,se,Ye.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,Re,Ye.width,Ye.height,0,Me,se,Ye.data)}}else{m?ee&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Me,se,J[k]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Re,Me,se,J[k]);for(let de=0;de<$.length;de++){const Ce=$[de];m?ee&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,0,0,Me,se,Ce.image[k]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,Re,Me,se,Ce.image[k])}}}l(a)&&o(e.TEXTURE_CUBE_MAP),O.__version=Y.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function le(u,a,C,G,Y,O){const me=r.convert(C.format,C.colorSpace),ie=r.convert(C.type),Se=g(C.internalFormat,me,ie,C.colorSpace),_e=i.get(a),q=i.get(C);if(q.__renderTarget=a,!_e.__hasExternalTextures){const J=Math.max(1,a.width>>O),Te=Math.max(1,a.height>>O);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?t.texImage3D(Y,O,Se,J,Te,a.depth,0,me,ie,null):t.texImage2D(Y,O,Se,J,Te,0,me,ie,null)}t.bindFramebuffer(e.FRAMEBUFFER,u),he(a)?d.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,Y,q.__webglTexture,0,Xe(a)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,G,Y,q.__webglTexture,O),t.bindFramebuffer(e.FRAMEBUFFER,null)}function De(u,a,C){if(e.bindRenderbuffer(e.RENDERBUFFER,u),a.depthBuffer){const G=a.depthTexture,Y=G&&G.isDepthTexture?G.type:null,O=D(a.stencilBuffer,Y),me=a.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ie=Xe(a);he(a)?d.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ie,O,a.width,a.height):C?e.renderbufferStorageMultisample(e.RENDERBUFFER,ie,O,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,O,a.width,a.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,me,e.RENDERBUFFER,u)}else{const G=a.textures;for(let Y=0;Y<G.length;Y++){const O=G[Y],me=r.convert(O.format,O.colorSpace),ie=r.convert(O.type),Se=g(O.internalFormat,me,ie,O.colorSpace),_e=Xe(a);C&&he(a)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,_e,Se,a.width,a.height):he(a)?d.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,_e,Se,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,Se,a.width,a.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function xe(u,a){if(a&&a.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,u),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(a.depthTexture);G.__renderTarget=a,(!G.__webglTexture||a.depthTexture.image.width!==a.width||a.depthTexture.image.height!==a.height)&&(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),Z(a.depthTexture,0);const Y=G.__webglTexture,O=Xe(a);if(a.depthTexture.format===Qn)he(a)?d.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0,O):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0);else if(a.depthTexture.format===vn)he(a)?d.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0,O):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function ye(u){const a=i.get(u),C=u.isWebGLCubeRenderTarget===!0;if(a.__boundDepthTexture!==u.depthTexture){const G=u.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),G){const Y=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),a.__depthDisposeCallback=Y}a.__boundDepthTexture=G}if(u.depthTexture&&!a.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");const G=u.texture.mipmaps;G&&G.length>0?xe(a.__webglFramebuffer[0],u):xe(a.__webglFramebuffer,u)}else if(C){a.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[G]),a.__webglDepthbuffer[G]===void 0)a.__webglDepthbuffer[G]=e.createRenderbuffer(),De(a.__webglDepthbuffer[G],u,!1);else{const Y=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,O=a.__webglDepthbuffer[G];e.bindRenderbuffer(e.RENDERBUFFER,O),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,O)}}else{const G=u.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer===void 0)a.__webglDepthbuffer=e.createRenderbuffer(),De(a.__webglDepthbuffer,u,!1);else{const Y=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,O=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,O),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,O)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function ft(u,a,C){const G=i.get(u);a!==void 0&&le(G.__webglFramebuffer,u,u.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),C!==void 0&&ye(u)}function we(u){const a=u.texture,C=i.get(u),G=i.get(a);u.addEventListener("dispose",N);const Y=u.textures,O=u.isWebGLCubeRenderTarget===!0,me=Y.length>1;if(me||(G.__webglTexture===void 0&&(G.__webglTexture=e.createTexture()),G.__version=a.version,h.memory.textures++),O){C.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(a.mipmaps&&a.mipmaps.length>0){C.__webglFramebuffer[ie]=[];for(let Se=0;Se<a.mipmaps.length;Se++)C.__webglFramebuffer[ie][Se]=e.createFramebuffer()}else C.__webglFramebuffer[ie]=e.createFramebuffer()}else{if(a.mipmaps&&a.mipmaps.length>0){C.__webglFramebuffer=[];for(let ie=0;ie<a.mipmaps.length;ie++)C.__webglFramebuffer[ie]=e.createFramebuffer()}else C.__webglFramebuffer=e.createFramebuffer();if(me)for(let ie=0,Se=Y.length;ie<Se;ie++){const _e=i.get(Y[ie]);_e.__webglTexture===void 0&&(_e.__webglTexture=e.createTexture(),h.memory.textures++)}if(u.samples>0&&he(u)===!1){C.__webglMultisampledFramebuffer=e.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ie=0;ie<Y.length;ie++){const Se=Y[ie];C.__webglColorRenderbuffer[ie]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,C.__webglColorRenderbuffer[ie]);const _e=r.convert(Se.format,Se.colorSpace),q=r.convert(Se.type),J=g(Se.internalFormat,_e,q,Se.colorSpace,u.isXRRenderTarget===!0),Te=Xe(u);e.renderbufferStorageMultisample(e.RENDERBUFFER,Te,J,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.RENDERBUFFER,C.__webglColorRenderbuffer[ie])}e.bindRenderbuffer(e.RENDERBUFFER,null),u.depthBuffer&&(C.__webglDepthRenderbuffer=e.createRenderbuffer(),De(C.__webglDepthRenderbuffer,u,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(O){t.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture),ke(e.TEXTURE_CUBE_MAP,a);for(let ie=0;ie<6;ie++)if(a.mipmaps&&a.mipmaps.length>0)for(let Se=0;Se<a.mipmaps.length;Se++)le(C.__webglFramebuffer[ie][Se],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se);else le(C.__webglFramebuffer[ie],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);l(a)&&o(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ie=0,Se=Y.length;ie<Se;ie++){const _e=Y[ie],q=i.get(_e);let J=e.TEXTURE_2D;(u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(J=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(J,q.__webglTexture),ke(J,_e),le(C.__webglFramebuffer,u,_e,e.COLOR_ATTACHMENT0+ie,J,0),l(_e)&&o(J)}t.unbindTexture()}else{let ie=e.TEXTURE_2D;if((u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(ie=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ie,G.__webglTexture),ke(ie,a),a.mipmaps&&a.mipmaps.length>0)for(let Se=0;Se<a.mipmaps.length;Se++)le(C.__webglFramebuffer[Se],u,a,e.COLOR_ATTACHMENT0,ie,Se);else le(C.__webglFramebuffer,u,a,e.COLOR_ATTACHMENT0,ie,0);l(a)&&o(ie),t.unbindTexture()}u.depthBuffer&&ye(u)}function je(u){const a=u.textures;for(let C=0,G=a.length;C<G;C++){const Y=a[C];if(l(Y)){const O=P(u),me=i.get(Y).__webglTexture;t.bindTexture(O,me),o(O),t.unbindTexture()}}}const _=[],Ie=[];function Ne(u){if(u.samples>0){if(he(u)===!1){const a=u.textures,C=u.width,G=u.height;let Y=e.COLOR_BUFFER_BIT;const O=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=i.get(u),ie=a.length>1;if(ie)for(let _e=0;_e<a.length;_e++)t.bindFramebuffer(e.FRAMEBUFFER,me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const Se=u.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let _e=0;_e<a.length;_e++){if(u.resolveDepthBuffer&&(u.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),u.stencilBuffer&&u.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),ie){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const q=i.get(a[_e]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,q,0)}e.blitFramebuffer(0,0,C,G,0,0,C,G,Y,e.NEAREST),A===!0&&(_.length=0,Ie.length=0,_.push(e.COLOR_ATTACHMENT0+_e),u.depthBuffer&&u.resolveDepthBuffer===!1&&(_.push(O),Ie.push(O),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ie)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,_))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ie)for(let _e=0;_e<a.length;_e++){t.bindFramebuffer(e.FRAMEBUFFER,me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const q=i.get(a[_e]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,q,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(u.depthBuffer&&u.resolveDepthBuffer===!1&&A){const a=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[a])}}}function Xe(u){return Math.min(s.maxSamples,u.samples)}function he(u){const a=i.get(u);return u.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&a.__useRenderToTexture!==!1}function tt(u){const a=h.render.frame;L.get(u)!==a&&(L.set(u,a),u.update())}function ve(u,a){const C=u.colorSpace,G=u.format,Y=u.type;return u.isCompressedTexture===!0||u.isVideoTexture===!0||C!==Mn&&C!==Wt&&(ot.getTransfer(C)===Ke?(G!==Pt||Y!==Ht)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xt("WebGLTextures: Unsupported texture color space:",C)),a}function Pe(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement?(S.width=u.naturalWidth||u.width,S.height=u.naturalHeight||u.height):typeof VideoFrame<"u"&&u instanceof VideoFrame?(S.width=u.displayWidth,S.height=u.displayHeight):(S.width=u.width,S.height=u.height),S}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=re,this.setTextureCube=H,this.rebindTextures=ft,this.setupRenderTarget=we,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=le,this.useMultisampledRTT=he}function jf(e,n){function t(i,s=Wt){let r;const h=ot.getTransfer(s);if(i===Ht)return e.UNSIGNED_BYTE;if(i===Ca)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Pa)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Ir)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Nr)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Or)return e.BYTE;if(i===Fr)return e.SHORT;if(i===En)return e.UNSIGNED_SHORT;if(i===Ua)return e.INT;if(i===on)return e.UNSIGNED_INT;if(i===Gt)return e.FLOAT;if(i===cn)return e.HALF_FLOAT;if(i===Br)return e.ALPHA;if(i===Gr)return e.RGB;if(i===Pt)return e.RGBA;if(i===Qn)return e.DEPTH_COMPONENT;if(i===vn)return e.DEPTH_STENCIL;if(i===Hr)return e.RED;if(i===Ra)return e.RED_INTEGER;if(i===Sa)return e.RG;if(i===Aa)return e.RG_INTEGER;if(i===Ta)return e.RGBA_INTEGER;if(i===Ln||i===Un||i===wn||i===yn)if(h===Ke)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ln)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Un)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ln)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Un)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wn)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yn)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fi||i===di||i===ui||i===pi)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fi)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===di)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ui)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pi)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hi||i===_i||i===mi)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hi||i===_i)return h===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===mi)return h===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xi||i===gi||i===vi||i===Si||i===Ei||i===Mi||i===bi||i===Ti||i===Ai||i===Ri||i===Ci||i===Pi||i===Di||i===Li)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xi)return h===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gi)return h===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vi)return h===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Si)return h===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ei)return h===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mi)return h===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bi)return h===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ti)return h===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ai)return h===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ri)return h===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ci)return h===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pi)return h===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Di)return h===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Li)return h===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ui||i===wi||i===yi)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===Ui)return h===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wi)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yi)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ii||i===Ni||i===Oi||i===Fi)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ii)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ni)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oi)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fi)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Qf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ed{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Da(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new yt({vertexShader:Qf,fragmentShader:Jf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new La(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class td extends er{constructor(n,t){super();const i=this;let s=null,r=1,h=null,d="local-floor",A=1,S=null,L=null,v=null,E=null,T=null,B=null;const U=typeof XRWebGLBinding<"u",l=new ed,o={},P=t.getContextAttributes();let g=null,D=null;const I=[],x=[],N=new Ze;let j=null;const p=new _n;p.viewport=new mt;const f=new _n;f.viewport=new mt;const R=[p,f],F=new tr;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=I[V];return K===void 0&&(K=new Pn,I[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=I[V];return K===void 0&&(K=new Pn,I[V]=K),K.getGripSpace()},this.getHand=function(V){let K=I[V];return K===void 0&&(K=new Pn,I[V]=K),K.getHandSpace()};function Z(V){const K=x.indexOf(V.inputSource);if(K===-1)return;const le=I[K];le!==void 0&&(le.update(V.inputSource,V.frame,S||h),le.dispatchEvent({type:V.type,data:V.inputSource}))}function X(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",re);for(let V=0;V<I.length;V++){const K=x[V];K!==null&&(x[V]=null,I[V].disconnect(K))}z=null,W=null,l.reset();for(const V in o)delete o[V];n.setRenderTarget(g),T=null,E=null,v=null,s=null,D=null,et.stop(),i.isPresenting=!1,n.setPixelRatio(j),n.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){d=V,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return S||h},this.setReferenceSpace=function(V){S=V},this.getBaseLayer=function(){return E!==null?E:T},this.getBinding=function(){return v===null&&U&&(v=new XRWebGLBinding(s,t)),v},this.getFrame=function(){return B},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(g=n.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",re),P.xrCompatible!==!0&&await t.makeXRCompatible(),j=n.getPixelRatio(),n.getSize(N),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,De=null,xe=null;P.depth&&(xe=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=P.stencil?vn:Qn,De=P.stencil?rn:on);const ye={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};v=this.getBinding(),E=v.createProjectionLayer(ye),s.updateRenderState({layers:[E]}),n.setPixelRatio(1),n.setSize(E.textureWidth,E.textureHeight,!1),D=new Kt(E.textureWidth,E.textureHeight,{format:Pt,type:Ht,depthTexture:new va(E.textureWidth,E.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:P.stencil,colorSpace:n.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{const le={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:r};T=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:T}),n.setPixelRatio(1),n.setSize(T.framebufferWidth,T.framebufferHeight,!1),D=new Kt(T.framebufferWidth,T.framebufferHeight,{format:Pt,type:Ht,colorSpace:n.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(A),S=null,h=await s.requestReferenceSpace(d),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return l.getDepthTexture()};function re(V){for(let K=0;K<V.removed.length;K++){const le=V.removed[K],De=x.indexOf(le);De>=0&&(x[De]=null,I[De].disconnect(le))}for(let K=0;K<V.added.length;K++){const le=V.added[K];let De=x.indexOf(le);if(De===-1){for(let ye=0;ye<I.length;ye++)if(ye>=x.length){x.push(le),De=ye;break}else if(x[ye]===null){x[ye]=le,De=ye;break}if(De===-1)break}const xe=I[De];xe&&xe.connect(le)}}const H=new We,fe=new We;function pe(V,K,le){H.setFromMatrixPosition(K.matrixWorld),fe.setFromMatrixPosition(le.matrixWorld);const De=H.distanceTo(fe),xe=K.projectionMatrix.elements,ye=le.projectionMatrix.elements,ft=xe[14]/(xe[10]-1),we=xe[14]/(xe[10]+1),je=(xe[9]+1)/xe[5],_=(xe[9]-1)/xe[5],Ie=(xe[8]-1)/xe[0],Ne=(ye[8]+1)/ye[0],Xe=ft*Ie,he=ft*Ne,tt=De/(-Ie+Ne),ve=tt*-Ie;if(K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ve),V.translateZ(tt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),xe[10]===-1)V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Pe=ft+tt,u=we+tt,a=Xe-ve,C=he+(De-ve),G=je*we/u*Pe,Y=_*we/u*Pe;V.projectionMatrix.makePerspective(a,C,G,Y,Pe,u),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Ue(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let K=V.near,le=V.far;l.texture!==null&&(l.depthNear>0&&(K=l.depthNear),l.depthFar>0&&(le=l.depthFar)),F.near=f.near=p.near=K,F.far=f.far=p.far=le,(z!==F.near||W!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,W=F.far),F.layers.mask=V.layers.mask|6,p.layers.mask=F.layers.mask&3,f.layers.mask=F.layers.mask&5;const De=V.parent,xe=F.cameras;Ue(F,De);for(let ye=0;ye<xe.length;ye++)Ue(xe[ye],De);xe.length===2?pe(F,p,f):F.projectionMatrix.copy(p.projectionMatrix),ke(V,F,De)};function ke(V,K,le){le===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(le.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=nr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(E===null&&T===null))return A},this.setFoveation=function(V){A=V,E!==null&&(E.fixedFoveation=V),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=V)},this.hasDepthSensing=function(){return l.texture!==null},this.getDepthSensingMesh=function(){return l.getMesh(F)},this.getCameraTexture=function(V){return o[V]};let Je=null;function $e(V,K){if(L=K.getViewerPose(S||h),B=K,L!==null){const le=L.views;T!==null&&(n.setRenderTargetFramebuffer(D,T.framebuffer),n.setRenderTarget(D));let De=!1;le.length!==F.cameras.length&&(F.cameras.length=0,De=!0);for(let we=0;we<le.length;we++){const je=le[we];let _=null;if(T!==null)_=T.getViewport(je);else{const Ne=v.getViewSubImage(E,je);_=Ne.viewport,we===0&&(n.setRenderTargetTextures(D,Ne.colorTexture,Ne.depthStencilTexture),n.setRenderTarget(D))}let Ie=R[we];Ie===void 0&&(Ie=new _n,Ie.layers.enable(we),Ie.viewport=new mt,R[we]=Ie),Ie.matrix.fromArray(je.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(je.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(_.x,_.y,_.width,_.height),we===0&&(F.matrix.copy(Ie.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),De===!0&&F.cameras.push(Ie)}const xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&U){v=i.getBinding();const we=v.getDepthInformation(le[0]);we&&we.isValid&&we.texture&&l.init(we,s.renderState)}if(xe&&xe.includes("camera-access")&&U){n.state.unbindTexture(),v=i.getBinding();for(let we=0;we<le.length;we++){const je=le[we].camera;if(je){let _=o[je];_||(_=new Da,o[je]=_);const Ie=v.getCameraImage(je);_.sourceTexture=Ie}}}}for(let le=0;le<I.length;le++){const De=x[le],xe=I[le];De!==null&&xe!==void 0&&xe.update(De,K,S||h)}Je&&Je(V,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),B=null}const et=new Fa;et.setAnimationLoop($e),this.setAnimationLoop=function(V){Je=V},this.dispose=function(){}}}const Ft=new Na,nd=new nn;function id(e,n){function t(l,o){l.matrixAutoUpdate===!0&&l.updateMatrix(),o.value.copy(l.matrix)}function i(l,o){o.color.getRGB(l.fogColor.value,ya(e)),o.isFog?(l.fogNear.value=o.near,l.fogFar.value=o.far):o.isFogExp2&&(l.fogDensity.value=o.density)}function s(l,o,P,g,D){o.isMeshBasicMaterial||o.isMeshLambertMaterial?r(l,o):o.isMeshToonMaterial?(r(l,o),v(l,o)):o.isMeshPhongMaterial?(r(l,o),L(l,o)):o.isMeshStandardMaterial?(r(l,o),E(l,o),o.isMeshPhysicalMaterial&&T(l,o,D)):o.isMeshMatcapMaterial?(r(l,o),B(l,o)):o.isMeshDepthMaterial?r(l,o):o.isMeshDistanceMaterial?(r(l,o),U(l,o)):o.isMeshNormalMaterial?r(l,o):o.isLineBasicMaterial?(h(l,o),o.isLineDashedMaterial&&d(l,o)):o.isPointsMaterial?A(l,o,P,g):o.isSpriteMaterial?S(l,o):o.isShadowMaterial?(l.color.value.copy(o.color),l.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}function r(l,o){l.opacity.value=o.opacity,o.color&&l.diffuse.value.copy(o.color),o.emissive&&l.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(l.map.value=o.map,t(o.map,l.mapTransform)),o.alphaMap&&(l.alphaMap.value=o.alphaMap,t(o.alphaMap,l.alphaMapTransform)),o.bumpMap&&(l.bumpMap.value=o.bumpMap,t(o.bumpMap,l.bumpMapTransform),l.bumpScale.value=o.bumpScale,o.side===Et&&(l.bumpScale.value*=-1)),o.normalMap&&(l.normalMap.value=o.normalMap,t(o.normalMap,l.normalMapTransform),l.normalScale.value.copy(o.normalScale),o.side===Et&&l.normalScale.value.negate()),o.displacementMap&&(l.displacementMap.value=o.displacementMap,t(o.displacementMap,l.displacementMapTransform),l.displacementScale.value=o.displacementScale,l.displacementBias.value=o.displacementBias),o.emissiveMap&&(l.emissiveMap.value=o.emissiveMap,t(o.emissiveMap,l.emissiveMapTransform)),o.specularMap&&(l.specularMap.value=o.specularMap,t(o.specularMap,l.specularMapTransform)),o.alphaTest>0&&(l.alphaTest.value=o.alphaTest);const P=n.get(o),g=P.envMap,D=P.envMapRotation;g&&(l.envMap.value=g,Ft.copy(D),Ft.x*=-1,Ft.y*=-1,Ft.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Ft.y*=-1,Ft.z*=-1),l.envMapRotation.value.setFromMatrix4(nd.makeRotationFromEuler(Ft)),l.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,l.reflectivity.value=o.reflectivity,l.ior.value=o.ior,l.refractionRatio.value=o.refractionRatio),o.lightMap&&(l.lightMap.value=o.lightMap,l.lightMapIntensity.value=o.lightMapIntensity,t(o.lightMap,l.lightMapTransform)),o.aoMap&&(l.aoMap.value=o.aoMap,l.aoMapIntensity.value=o.aoMapIntensity,t(o.aoMap,l.aoMapTransform))}function h(l,o){l.diffuse.value.copy(o.color),l.opacity.value=o.opacity,o.map&&(l.map.value=o.map,t(o.map,l.mapTransform))}function d(l,o){l.dashSize.value=o.dashSize,l.totalSize.value=o.dashSize+o.gapSize,l.scale.value=o.scale}function A(l,o,P,g){l.diffuse.value.copy(o.color),l.opacity.value=o.opacity,l.size.value=o.size*P,l.scale.value=g*.5,o.map&&(l.map.value=o.map,t(o.map,l.uvTransform)),o.alphaMap&&(l.alphaMap.value=o.alphaMap,t(o.alphaMap,l.alphaMapTransform)),o.alphaTest>0&&(l.alphaTest.value=o.alphaTest)}function S(l,o){l.diffuse.value.copy(o.color),l.opacity.value=o.opacity,l.rotation.value=o.rotation,o.map&&(l.map.value=o.map,t(o.map,l.mapTransform)),o.alphaMap&&(l.alphaMap.value=o.alphaMap,t(o.alphaMap,l.alphaMapTransform)),o.alphaTest>0&&(l.alphaTest.value=o.alphaTest)}function L(l,o){l.specular.value.copy(o.specular),l.shininess.value=Math.max(o.shininess,1e-4)}function v(l,o){o.gradientMap&&(l.gradientMap.value=o.gradientMap)}function E(l,o){l.metalness.value=o.metalness,o.metalnessMap&&(l.metalnessMap.value=o.metalnessMap,t(o.metalnessMap,l.metalnessMapTransform)),l.roughness.value=o.roughness,o.roughnessMap&&(l.roughnessMap.value=o.roughnessMap,t(o.roughnessMap,l.roughnessMapTransform)),o.envMap&&(l.envMapIntensity.value=o.envMapIntensity)}function T(l,o,P){l.ior.value=o.ior,o.sheen>0&&(l.sheenColor.value.copy(o.sheenColor).multiplyScalar(o.sheen),l.sheenRoughness.value=o.sheenRoughness,o.sheenColorMap&&(l.sheenColorMap.value=o.sheenColorMap,t(o.sheenColorMap,l.sheenColorMapTransform)),o.sheenRoughnessMap&&(l.sheenRoughnessMap.value=o.sheenRoughnessMap,t(o.sheenRoughnessMap,l.sheenRoughnessMapTransform))),o.clearcoat>0&&(l.clearcoat.value=o.clearcoat,l.clearcoatRoughness.value=o.clearcoatRoughness,o.clearcoatMap&&(l.clearcoatMap.value=o.clearcoatMap,t(o.clearcoatMap,l.clearcoatMapTransform)),o.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=o.clearcoatRoughnessMap,t(o.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),o.clearcoatNormalMap&&(l.clearcoatNormalMap.value=o.clearcoatNormalMap,t(o.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(o.clearcoatNormalScale),o.side===Et&&l.clearcoatNormalScale.value.negate())),o.dispersion>0&&(l.dispersion.value=o.dispersion),o.iridescence>0&&(l.iridescence.value=o.iridescence,l.iridescenceIOR.value=o.iridescenceIOR,l.iridescenceThicknessMinimum.value=o.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=o.iridescenceThicknessRange[1],o.iridescenceMap&&(l.iridescenceMap.value=o.iridescenceMap,t(o.iridescenceMap,l.iridescenceMapTransform)),o.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=o.iridescenceThicknessMap,t(o.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),o.transmission>0&&(l.transmission.value=o.transmission,l.transmissionSamplerMap.value=P.texture,l.transmissionSamplerSize.value.set(P.width,P.height),o.transmissionMap&&(l.transmissionMap.value=o.transmissionMap,t(o.transmissionMap,l.transmissionMapTransform)),l.thickness.value=o.thickness,o.thicknessMap&&(l.thicknessMap.value=o.thicknessMap,t(o.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=o.attenuationDistance,l.attenuationColor.value.copy(o.attenuationColor)),o.anisotropy>0&&(l.anisotropyVector.value.set(o.anisotropy*Math.cos(o.anisotropyRotation),o.anisotropy*Math.sin(o.anisotropyRotation)),o.anisotropyMap&&(l.anisotropyMap.value=o.anisotropyMap,t(o.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=o.specularIntensity,l.specularColor.value.copy(o.specularColor),o.specularColorMap&&(l.specularColorMap.value=o.specularColorMap,t(o.specularColorMap,l.specularColorMapTransform)),o.specularIntensityMap&&(l.specularIntensityMap.value=o.specularIntensityMap,t(o.specularIntensityMap,l.specularIntensityMapTransform))}function B(l,o){o.matcap&&(l.matcap.value=o.matcap)}function U(l,o){const P=n.get(o).light;l.referencePosition.value.setFromMatrixPosition(P.matrixWorld),l.nearDistance.value=P.shadow.camera.near,l.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ad(e,n,t,i){let s={},r={},h=[];const d=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function A(P,g){const D=g.program;i.uniformBlockBinding(P,D)}function S(P,g){let D=s[P.id];D===void 0&&(B(P),D=L(P),s[P.id]=D,P.addEventListener("dispose",l));const I=g.program;i.updateUBOMapping(P,I);const x=n.render.frame;r[P.id]!==x&&(E(P),r[P.id]=x)}function L(P){const g=v();P.__bindingPointIndex=g;const D=e.createBuffer(),I=P.__size,x=P.usage;return e.bindBuffer(e.UNIFORM_BUFFER,D),e.bufferData(e.UNIFORM_BUFFER,I,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,g,D),D}function v(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(P){const g=s[P.id],D=P.uniforms,I=P.__cache;e.bindBuffer(e.UNIFORM_BUFFER,g);for(let x=0,N=D.length;x<N;x++){const j=Array.isArray(D[x])?D[x]:[D[x]];for(let p=0,f=j.length;p<f;p++){const R=j[p];if(T(R,x,p,I)===!0){const F=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let Z=0;Z<z.length;Z++){const X=z[Z],re=U(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,e.bufferSubData(e.UNIFORM_BUFFER,F+W,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,W),W+=re.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function T(P,g,D,I){const x=P.value,N=g+"_"+D;if(I[N]===void 0)return typeof x=="number"||typeof x=="boolean"?I[N]=x:I[N]=x.clone(),!0;{const j=I[N];if(typeof x=="number"||typeof x=="boolean"){if(j!==x)return I[N]=x,!0}else if(j.equals(x)===!1)return j.copy(x),!0}return!1}function B(P){const g=P.uniforms;let D=0;const I=16;for(let N=0,j=g.length;N<j;N++){const p=Array.isArray(g[N])?g[N]:[g[N]];for(let f=0,R=p.length;f<R;f++){const F=p[f],z=Array.isArray(F.value)?F.value:[F.value];for(let W=0,Z=z.length;W<Z;W++){const X=z[W],re=U(X),H=D%I,fe=H%re.boundary,pe=H+fe;D+=fe,pe!==0&&I-pe<re.storage&&(D+=I-pe),F.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=D,D+=re.storage}}}const x=D%I;return x>0&&(D+=I-x),P.__size=D,P.__cache={},this}function U(P){const g={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(g.boundary=4,g.storage=4):P.isVector2?(g.boundary=8,g.storage=8):P.isVector3||P.isColor?(g.boundary=16,g.storage=12):P.isVector4?(g.boundary=16,g.storage=16):P.isMatrix3?(g.boundary=48,g.storage=48):P.isMatrix4?(g.boundary=64,g.storage=64):P.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",P),g}function l(P){const g=P.target;g.removeEventListener("dispose",l);const D=h.indexOf(g.__bindingPointIndex);h.splice(D,1),e.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function o(){for(const P in s)e.deleteBuffer(s[P]);h=[],s={},r={}}return{bind:A,update:S,dispose:o}}const rd=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let At=null;function od(){return At===null&&(At=new ir(rd,32,32,Sa,cn),At.minFilter=Dt,At.magFilter=Dt,At.wrapS=Vn,At.wrapT=Vn,At.generateMipmaps=!1,At.needsUpdate=!0),At}class Ed{constructor(n={}){const{canvas:t=$a(),context:i=null,depth:s=!0,stencil:r=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:A=!0,preserveDrawingBuffer:S=!1,powerPreference:L="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:E=!1}=n;this.isWebGLRenderer=!0;let T;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=i.getContextAttributes().alpha}else T=h;const B=new Set([Ta,Aa,Ra]),U=new Set([Ht,on,En,rn,Ca,Pa]),l=new Uint32Array(4),o=new Int32Array(4);let P=null,g=null;const D=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ut,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let N=!1;this._outputColorSpace=ja;let j=0,p=0,f=null,R=-1,F=null;const z=new mt,W=new mt;let Z=null;const X=new Qe(0);let re=0,H=t.width,fe=t.height,pe=1,Ue=null,ke=null;const Je=new mt(0,0,H,fe),$e=new mt(0,0,H,fe);let et=!1;const V=new ga;let K=!1,le=!1;const De=new nn,xe=new We,ye=new mt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function je(){return f===null?pe:1}let _=i;function Ie(c,M){return t.getContext(c,M)}try{const c={alpha:!0,depth:s,stencil:r,antialias:d,premultipliedAlpha:A,preserveDrawingBuffer:S,powerPreference:L,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qa}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",de,!1),_===null){const M="webgl2";if(_=Ie(M,c),_===null)throw Ie(M)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(c){throw c("WebGLRenderer: "+c.message),c}let Ne,Xe,he,tt,ve,Pe,u,a,C,G,Y,O,me,ie,Se,_e,q,J,Te,Me,se,Re,m,ae;function ee(){Ne=new hl(_),Ne.init(),Re=new jf(_,Ne),Xe=new rl(_,Ne,n,Re),he=new Zf(_,Ne),Xe.reversedDepthBuffer&&E&&he.buffers.depth.setReversed(!0),tt=new xl(_),ve=new Of,Pe=new $f(_,Ne,he,ve,Xe,Re,tt),u=new sl(x),a=new pl(x),C=new Eo(_),m=new il(_,C),G=new _l(_,C,tt,m),Y=new vl(_,G,C,tt),Te=new gl(_,Xe,Pe),_e=new ol(ve),O=new Nf(x,u,a,Ne,Xe,m,_e),me=new id(x,ve),ie=new Bf,Se=new Wf(Ne),J=new nl(x,u,a,he,Y,T,A),q=new Kf(x,Y,Xe),ae=new ad(_,tt,Xe,he),Me=new al(_,Ne,tt),se=new ml(_,Ne,tt),tt.programs=O.programs,x.capabilities=Xe,x.extensions=Ne,x.properties=ve,x.renderLists=ie,x.shadowMap=q,x.state=he,x.info=tt}ee();const te=new td(x,_);this.xr=te,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const c=Ne.get("WEBGL_lose_context");c&&c.loseContext()},this.forceContextRestore=function(){const c=Ne.get("WEBGL_lose_context");c&&c.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(c){c!==void 0&&(pe=c,this.setSize(H,fe,!1))},this.getSize=function(c){return c.set(H,fe)},this.setSize=function(c,M,w=!0){if(te.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}H=c,fe=M,t.width=Math.floor(c*pe),t.height=Math.floor(M*pe),w===!0&&(t.style.width=c+"px",t.style.height=M+"px"),this.setViewport(0,0,c,M)},this.getDrawingBufferSize=function(c){return c.set(H*pe,fe*pe).floor()},this.setDrawingBufferSize=function(c,M,w){H=c,fe=M,pe=w,t.width=Math.floor(c*w),t.height=Math.floor(M*w),this.setViewport(0,0,c,M)},this.getCurrentViewport=function(c){return c.copy(z)},this.getViewport=function(c){return c.copy(Je)},this.setViewport=function(c,M,w,y){c.isVector4?Je.set(c.x,c.y,c.z,c.w):Je.set(c,M,w,y),he.viewport(z.copy(Je).multiplyScalar(pe).round())},this.getScissor=function(c){return c.copy($e)},this.setScissor=function(c,M,w,y){c.isVector4?$e.set(c.x,c.y,c.z,c.w):$e.set(c,M,w,y),he.scissor(W.copy($e).multiplyScalar(pe).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(c){he.setScissorTest(et=c)},this.setOpaqueSort=function(c){Ue=c},this.setTransparentSort=function(c){ke=c},this.getClearColor=function(c){return c.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(c=!0,M=!0,w=!0){let y=0;if(c){let b=!1;if(f!==null){const Q=f.texture.format;b=B.has(Q)}if(b){const Q=f.texture.type,oe=U.has(Q),ue=J.getClearColor(),ce=J.getClearAlpha(),be=ue.r,Ae=ue.g,ge=ue.b;oe?(l[0]=be,l[1]=Ae,l[2]=ge,l[3]=ce,_.clearBufferuiv(_.COLOR,0,l)):(o[0]=be,o[1]=Ae,o[2]=ge,o[3]=ce,_.clearBufferiv(_.COLOR,0,o))}else y|=_.COLOR_BUFFER_BIT}M&&(y|=_.DEPTH_BUFFER_BIT),w&&(y|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",de,!1),J.dispose(),ie.dispose(),Se.dispose(),ve.dispose(),u.dispose(),a.dispose(),Y.dispose(),m.dispose(),ae.dispose(),O.dispose(),te.dispose(),te.removeEventListener("sessionstart",ti),te.removeEventListener("sessionend",ni),It.stop()};function $(c){c.preventDefault(),ci("WebGLRenderer: Context Lost."),N=!0}function k(){ci("WebGLRenderer: Context Restored."),N=!1;const c=tt.autoReset,M=q.enabled,w=q.autoUpdate,y=q.needsUpdate,b=q.type;ee(),tt.autoReset=c,q.enabled=M,q.autoUpdate=w,q.needsUpdate=y,q.type=b}function de(c){xt("WebGLRenderer: A WebGL context could not be created. Reason: ",c.statusMessage)}function Ce(c){const M=c.target;M.removeEventListener("dispose",Ce),Ye(M)}function Ye(c){Ge(c),ve.remove(c)}function Ge(c){const M=ve.get(c).programs;M!==void 0&&(M.forEach(function(w){O.releaseProgram(w)}),c.isShaderMaterial&&O.releaseShaderCache(c))}this.renderBufferDirect=function(c,M,w,y,b,Q){M===null&&(M=ft);const oe=b.isMesh&&b.matrixWorld.determinant()<0,ue=Wa(c,M,w,y,b);he.setMaterial(y,oe);let ce=w.index,be=1;if(y.wireframe===!0){if(ce=G.getWireframeAttribute(w),ce===void 0)return;be=2}const Ae=w.drawRange,ge=w.attributes.position;let Oe=Ae.start*be,He=(Ae.start+Ae.count)*be;Q!==null&&(Oe=Math.max(Oe,Q.start*be),He=Math.min(He,(Q.start+Q.count)*be)),ce!==null?(Oe=Math.max(Oe,0),He=Math.min(He,ce.count)):ge!=null&&(Oe=Math.max(Oe,0),He=Math.min(He,ge.count));const at=He-Oe;if(at<0||at===1/0)return;m.setup(b,y,ue,w,ce);let rt,ze=Me;if(ce!==null&&(rt=C.get(ce),ze=se,ze.setIndex(rt)),b.isMesh)y.wireframe===!0?(he.setLineWidth(y.wireframeLinewidth*je()),ze.setMode(_.LINES)):ze.setMode(_.TRIANGLES);else if(b.isLine){let Ee=y.linewidth;Ee===void 0&&(Ee=1),he.setLineWidth(Ee*je()),b.isLineSegments?ze.setMode(_.LINES):b.isLineLoop?ze.setMode(_.LINE_LOOP):ze.setMode(_.LINE_STRIP)}else b.isPoints?ze.setMode(_.POINTS):b.isSprite&&ze.setMode(_.TRIANGLES);if(b.isBatchedMesh)if(b._multiDrawInstances!==null)Hn("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount,b._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))ze.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else{const Ee=b._multiDrawStarts,nt=b._multiDrawCounts,Fe=b._multiDrawCount,gt=ce?C.get(ce).bytesPerElement:1,kt=ve.get(y).currentProgram.getUniforms();for(let vt=0;vt<Fe;vt++)kt.setValue(_,"_gl_DrawID",vt),ze.render(Ee[vt]/gt,nt[vt])}else if(b.isInstancedMesh)ze.renderInstances(Oe,at,b.count);else if(w.isInstancedBufferGeometry){const Ee=w._maxInstanceCount!==void 0?w._maxInstanceCount:1/0,nt=Math.min(w.instanceCount,Ee);ze.renderInstances(Oe,at,nt)}else ze.render(Oe,at)};function bt(c,M,w){c.transparent===!0&&c.side===Ct&&c.forceSinglePass===!1?(c.side=Et,c.needsUpdate=!0,fn(c,M,w),c.side=an,c.needsUpdate=!0,fn(c,M,w),c.side=Ct):fn(c,M,w)}this.compile=function(c,M,w=null){w===null&&(w=c),g=Se.get(w),g.init(M),I.push(g),w.traverseVisible(function(b){b.isLight&&b.layers.test(M.layers)&&(g.pushLight(b),b.castShadow&&g.pushShadow(b))}),c!==w&&c.traverseVisible(function(b){b.isLight&&b.layers.test(M.layers)&&(g.pushLight(b),b.castShadow&&g.pushShadow(b))}),g.setupLights();const y=new Set;return c.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;const Q=b.material;if(Q)if(Array.isArray(Q))for(let oe=0;oe<Q.length;oe++){const ue=Q[oe];bt(ue,w,b),y.add(ue)}else bt(Q,w,b),y.add(Q)}),g=I.pop(),y},this.compileAsync=function(c,M,w=null){const y=this.compile(c,M,w);return new Promise(b=>{function Q(){if(y.forEach(function(oe){ve.get(oe).currentProgram.isReady()&&y.delete(oe)}),y.size===0){b(c);return}setTimeout(Q,10)}Ne.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Mt=null;function za(c){Mt&&Mt(c)}function ti(){It.stop()}function ni(){It.start()}const It=new Fa;It.setAnimationLoop(za),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(c){Mt=c,te.setAnimationLoop(c),c===null?It.stop():It.start()},te.addEventListener("sessionstart",ti),te.addEventListener("sessionend",ni),this.render=function(c,M){if(M!==void 0&&M.isCamera!==!0){xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(c.matrixWorldAutoUpdate===!0&&c.updateMatrixWorld(),M.parent===null&&M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(M),M=te.getCamera()),c.isScene===!0&&c.onBeforeRender(x,c,M,f),g=Se.get(c,I.length),g.init(M),I.push(g),De.multiplyMatrices(M.projectionMatrix,M.matrixWorldInverse),V.setFromProjectionMatrix(De,li,M.reversedDepth),le=this.localClippingEnabled,K=_e.init(this.clippingPlanes,le),P=ie.get(c,D.length),P.init(),D.push(P),te.enabled===!0&&te.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&Rn(Q,M,-1/0,x.sortObjects)}Rn(c,M,0,x.sortObjects),P.finish(),x.sortObjects===!0&&P.sort(Ue,ke),we=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,we&&J.addToRenderList(P,c),this.info.render.frame++,K===!0&&_e.beginShadows();const w=g.state.shadowsArray;q.render(w,c,M),K===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const y=P.opaque,b=P.transmissive;if(g.setupLights(),M.isArrayCamera){const Q=M.cameras;if(b.length>0)for(let oe=0,ue=Q.length;oe<ue;oe++){const ce=Q[oe];ai(y,b,c,ce)}we&&J.render(c);for(let oe=0,ue=Q.length;oe<ue;oe++){const ce=Q[oe];ii(P,c,ce,ce.viewport)}}else b.length>0&&ai(y,b,c,M),we&&J.render(c),ii(P,c,M);f!==null&&p===0&&(Pe.updateMultisampleRenderTarget(f),Pe.updateRenderTargetMipmap(f)),c.isScene===!0&&c.onAfterRender(x,c,M),m.resetDefaultState(),R=-1,F=null,I.pop(),I.length>0?(g=I[I.length-1],K===!0&&_e.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?P=D[D.length-1]:P=null};function Rn(c,M,w,y){if(c.visible===!1)return;if(c.layers.test(M.layers)){if(c.isGroup)w=c.renderOrder;else if(c.isLOD)c.autoUpdate===!0&&c.update(M);else if(c.isLight)g.pushLight(c),c.castShadow&&g.pushShadow(c);else if(c.isSprite){if(!c.frustumCulled||V.intersectsSprite(c)){y&&ye.setFromMatrixPosition(c.matrixWorld).applyMatrix4(De);const oe=Y.update(c),ue=c.material;ue.visible&&P.push(c,oe,ue,w,ye.z,null)}}else if((c.isMesh||c.isLine||c.isPoints)&&(!c.frustumCulled||V.intersectsObject(c))){const oe=Y.update(c),ue=c.material;if(y&&(c.boundingSphere!==void 0?(c.boundingSphere===null&&c.computeBoundingSphere(),ye.copy(c.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),ye.copy(oe.boundingSphere.center)),ye.applyMatrix4(c.matrixWorld).applyMatrix4(De)),Array.isArray(ue)){const ce=oe.groups;for(let be=0,Ae=ce.length;be<Ae;be++){const ge=ce[be],Oe=ue[ge.materialIndex];Oe&&Oe.visible&&P.push(c,oe,Oe,w,ye.z,ge)}}else ue.visible&&P.push(c,oe,ue,w,ye.z,null)}}const Q=c.children;for(let oe=0,ue=Q.length;oe<ue;oe++)Rn(Q[oe],M,w,y)}function ii(c,M,w,y){const{opaque:b,transmissive:Q,transparent:oe}=c;g.setupLightsView(w),K===!0&&_e.setGlobalState(x.clippingPlanes,w),y&&he.viewport(z.copy(y)),b.length>0&&ln(b,M,w),Q.length>0&&ln(Q,M,w),oe.length>0&&ln(oe,M,w),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function ai(c,M,w,y){if((w.isScene===!0?w.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[y.id]===void 0&&(g.state.transmissionRenderTarget[y.id]=new Kt(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?cn:Ht,minFilter:Jt,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const Q=g.state.transmissionRenderTarget[y.id],oe=y.viewport||z;Q.setSize(oe.z*x.transmissionResolutionScale,oe.w*x.transmissionResolutionScale);const ue=x.getRenderTarget(),ce=x.getActiveCubeFace(),be=x.getActiveMipmapLevel();x.setRenderTarget(Q),x.getClearColor(X),re=x.getClearAlpha(),re<1&&x.setClearColor(16777215,.5),x.clear(),we&&J.render(w);const Ae=x.toneMapping;x.toneMapping=Ut;const ge=y.viewport;if(y.viewport!==void 0&&(y.viewport=void 0),g.setupLightsView(y),K===!0&&_e.setGlobalState(x.clippingPlanes,y),ln(c,w,y),Pe.updateMultisampleRenderTarget(Q),Pe.updateRenderTargetMipmap(Q),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let He=0,at=M.length;He<at;He++){const rt=M[He],{object:ze,geometry:Ee,material:nt,group:Fe}=rt;if(nt.side===Ct&&ze.layers.test(y.layers)){const gt=nt.side;nt.side=Et,nt.needsUpdate=!0,ri(ze,w,y,Ee,nt,Fe),nt.side=gt,nt.needsUpdate=!0,Oe=!0}}Oe===!0&&(Pe.updateMultisampleRenderTarget(Q),Pe.updateRenderTargetMipmap(Q))}x.setRenderTarget(ue,ce,be),x.setClearColor(X,re),ge!==void 0&&(y.viewport=ge),x.toneMapping=Ae}function ln(c,M,w){const y=M.isScene===!0?M.overrideMaterial:null;for(let b=0,Q=c.length;b<Q;b++){const oe=c[b],{object:ue,geometry:ce,group:be}=oe;let Ae=oe.material;Ae.allowOverride===!0&&y!==null&&(Ae=y),ue.layers.test(w.layers)&&ri(ue,M,w,ce,Ae,be)}}function ri(c,M,w,y,b,Q){c.onBeforeRender(x,M,w,y,b,Q),c.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,c.matrixWorld),c.normalMatrix.getNormalMatrix(c.modelViewMatrix),b.onBeforeRender(x,M,w,y,c,Q),b.transparent===!0&&b.side===Ct&&b.forceSinglePass===!1?(b.side=Et,b.needsUpdate=!0,x.renderBufferDirect(w,M,y,b,c,Q),b.side=an,b.needsUpdate=!0,x.renderBufferDirect(w,M,y,b,c,Q),b.side=Ct):x.renderBufferDirect(w,M,y,b,c,Q),c.onAfterRender(x,M,w,y,b,Q)}function fn(c,M,w){M.isScene!==!0&&(M=ft);const y=ve.get(c),b=g.state.lights,Q=g.state.shadowsArray,oe=b.state.version,ue=O.getParameters(c,b.state,Q,M,w),ce=O.getProgramCacheKey(ue);let be=y.programs;y.environment=c.isMeshStandardMaterial?M.environment:null,y.fog=M.fog,y.envMap=(c.isMeshStandardMaterial?a:u).get(c.envMap||y.environment),y.envMapRotation=y.environment!==null&&c.envMap===null?M.environmentRotation:c.envMapRotation,be===void 0&&(c.addEventListener("dispose",Ce),be=new Map,y.programs=be);let Ae=be.get(ce);if(Ae!==void 0){if(y.currentProgram===Ae&&y.lightsStateVersion===oe)return si(c,ue),Ae}else ue.uniforms=O.getUniforms(c),c.onBeforeCompile(ue,x),Ae=O.acquireProgram(ue,ce),be.set(ce,Ae),y.uniforms=ue.uniforms;const ge=y.uniforms;return(!c.isShaderMaterial&&!c.isRawShaderMaterial||c.clipping===!0)&&(ge.clippingPlanes=_e.uniform),si(c,ue),y.needsLights=Ya(c),y.lightsStateVersion=oe,y.needsLights&&(ge.ambientLightColor.value=b.state.ambient,ge.lightProbe.value=b.state.probe,ge.directionalLights.value=b.state.directional,ge.directionalLightShadows.value=b.state.directionalShadow,ge.spotLights.value=b.state.spot,ge.spotLightShadows.value=b.state.spotShadow,ge.rectAreaLights.value=b.state.rectArea,ge.ltc_1.value=b.state.rectAreaLTC1,ge.ltc_2.value=b.state.rectAreaLTC2,ge.pointLights.value=b.state.point,ge.pointLightShadows.value=b.state.pointShadow,ge.hemisphereLights.value=b.state.hemi,ge.directionalShadowMap.value=b.state.directionalShadowMap,ge.directionalShadowMatrix.value=b.state.directionalShadowMatrix,ge.spotShadowMap.value=b.state.spotShadowMap,ge.spotLightMatrix.value=b.state.spotLightMatrix,ge.spotLightMap.value=b.state.spotLightMap,ge.pointShadowMap.value=b.state.pointShadowMap,ge.pointShadowMatrix.value=b.state.pointShadowMatrix),y.currentProgram=Ae,y.uniformsList=null,Ae}function oi(c){if(c.uniformsList===null){const M=c.currentProgram.getUniforms();c.uniformsList=gn.seqWithValue(M.seq,c.uniforms)}return c.uniformsList}function si(c,M){const w=ve.get(c);w.outputColorSpace=M.outputColorSpace,w.batching=M.batching,w.batchingColor=M.batchingColor,w.instancing=M.instancing,w.instancingColor=M.instancingColor,w.instancingMorph=M.instancingMorph,w.skinning=M.skinning,w.morphTargets=M.morphTargets,w.morphNormals=M.morphNormals,w.morphColors=M.morphColors,w.morphTargetsCount=M.morphTargetsCount,w.numClippingPlanes=M.numClippingPlanes,w.numIntersection=M.numClipIntersection,w.vertexAlphas=M.vertexAlphas,w.vertexTangents=M.vertexTangents,w.toneMapping=M.toneMapping}function Wa(c,M,w,y,b){M.isScene!==!0&&(M=ft),Pe.resetTextureUnits();const Q=M.fog,oe=y.isMeshStandardMaterial?M.environment:null,ue=f===null?x.outputColorSpace:f.isXRRenderTarget===!0?f.texture.colorSpace:Mn,ce=(y.isMeshStandardMaterial?a:u).get(y.envMap||oe),be=y.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,Ae=!!w.attributes.tangent&&(!!y.normalMap||y.anisotropy>0),ge=!!w.morphAttributes.position,Oe=!!w.morphAttributes.normal,He=!!w.morphAttributes.color;let at=Ut;y.toneMapped&&(f===null||f.isXRRenderTarget===!0)&&(at=x.toneMapping);const rt=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,ze=rt!==void 0?rt.length:0,Ee=ve.get(y),nt=g.state.lights;if(K===!0&&(le===!0||c!==F)){const dt=c===F&&y.id===R;_e.setState(y,c,dt)}let Fe=!1;y.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==nt.state.version||Ee.outputColorSpace!==ue||b.isBatchedMesh&&Ee.batching===!1||!b.isBatchedMesh&&Ee.batching===!0||b.isBatchedMesh&&Ee.batchingColor===!0&&b.colorTexture===null||b.isBatchedMesh&&Ee.batchingColor===!1&&b.colorTexture!==null||b.isInstancedMesh&&Ee.instancing===!1||!b.isInstancedMesh&&Ee.instancing===!0||b.isSkinnedMesh&&Ee.skinning===!1||!b.isSkinnedMesh&&Ee.skinning===!0||b.isInstancedMesh&&Ee.instancingColor===!0&&b.instanceColor===null||b.isInstancedMesh&&Ee.instancingColor===!1&&b.instanceColor!==null||b.isInstancedMesh&&Ee.instancingMorph===!0&&b.morphTexture===null||b.isInstancedMesh&&Ee.instancingMorph===!1&&b.morphTexture!==null||Ee.envMap!==ce||y.fog===!0&&Ee.fog!==Q||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==_e.numPlanes||Ee.numIntersection!==_e.numIntersection)||Ee.vertexAlphas!==be||Ee.vertexTangents!==Ae||Ee.morphTargets!==ge||Ee.morphNormals!==Oe||Ee.morphColors!==He||Ee.toneMapping!==at||Ee.morphTargetsCount!==ze)&&(Fe=!0):(Fe=!0,Ee.__version=y.version);let gt=Ee.currentProgram;Fe===!0&&(gt=fn(y,M,b));let kt=!1,vt=!1,$t=!1;const it=gt.getUniforms(),ut=Ee.uniforms;if(he.useProgram(gt.program)&&(kt=!0,vt=!0,$t=!0),y.id!==R&&(R=y.id,vt=!0),kt||F!==c){he.buffers.depth.getReversed()&&c.reversedDepth!==!0&&(c._reversedDepth=!0,c.updateProjectionMatrix()),it.setValue(_,"projectionMatrix",c.projectionMatrix),it.setValue(_,"viewMatrix",c.matrixWorldInverse);const pt=it.map.cameraPosition;pt!==void 0&&pt.setValue(_,xe.setFromMatrixPosition(c.matrixWorld)),Xe.logarithmicDepthBuffer&&it.setValue(_,"logDepthBufFC",2/(Math.log(c.far+1)/Math.LN2)),(y.isMeshPhongMaterial||y.isMeshToonMaterial||y.isMeshLambertMaterial||y.isMeshBasicMaterial||y.isMeshStandardMaterial||y.isShaderMaterial)&&it.setValue(_,"isOrthographic",c.isOrthographicCamera===!0),F!==c&&(F=c,vt=!0,$t=!0)}if(b.isSkinnedMesh){it.setOptional(_,b,"bindMatrix"),it.setOptional(_,b,"bindMatrixInverse");const dt=b.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),it.setValue(_,"boneTexture",dt.boneTexture,Pe))}b.isBatchedMesh&&(it.setOptional(_,b,"batchingTexture"),it.setValue(_,"batchingTexture",b._matricesTexture,Pe),it.setOptional(_,b,"batchingIdTexture"),it.setValue(_,"batchingIdTexture",b._indirectTexture,Pe),it.setOptional(_,b,"batchingColorTexture"),b._colorsTexture!==null&&it.setValue(_,"batchingColorTexture",b._colorsTexture,Pe));const St=w.morphAttributes;if((St.position!==void 0||St.normal!==void 0||St.color!==void 0)&&Te.update(b,w,gt),(vt||Ee.receiveShadow!==b.receiveShadow)&&(Ee.receiveShadow=b.receiveShadow,it.setValue(_,"receiveShadow",b.receiveShadow)),y.isMeshGouraudMaterial&&y.envMap!==null&&(ut.envMap.value=ce,ut.flipEnvMap.value=ce.isCubeTexture&&ce.isRenderTargetTexture===!1?-1:1),y.isMeshStandardMaterial&&y.envMap===null&&M.environment!==null&&(ut.envMapIntensity.value=M.environmentIntensity),ut.dfgLUT!==void 0&&(ut.dfgLUT.value=od()),vt&&(it.setValue(_,"toneMappingExposure",x.toneMappingExposure),Ee.needsLights&&Xa(ut,$t),Q&&y.fog===!0&&me.refreshFogUniforms(ut,Q),me.refreshMaterialUniforms(ut,y,pe,fe,g.state.transmissionRenderTarget[c.id]),gn.upload(_,oi(Ee),ut,Pe)),y.isShaderMaterial&&y.uniformsNeedUpdate===!0&&(gn.upload(_,oi(Ee),ut,Pe),y.uniformsNeedUpdate=!1),y.isSpriteMaterial&&it.setValue(_,"center",b.center),it.setValue(_,"modelViewMatrix",b.modelViewMatrix),it.setValue(_,"normalMatrix",b.normalMatrix),it.setValue(_,"modelMatrix",b.matrixWorld),y.isShaderMaterial||y.isRawShaderMaterial){const dt=y.uniformsGroups;for(let pt=0,Cn=dt.length;pt<Cn;pt++){const Nt=dt[pt];ae.update(Nt,gt),ae.bind(Nt,gt)}}return gt}function Xa(c,M){c.ambientLightColor.needsUpdate=M,c.lightProbe.needsUpdate=M,c.directionalLights.needsUpdate=M,c.directionalLightShadows.needsUpdate=M,c.pointLights.needsUpdate=M,c.pointLightShadows.needsUpdate=M,c.spotLights.needsUpdate=M,c.spotLightShadows.needsUpdate=M,c.rectAreaLights.needsUpdate=M,c.hemisphereLights.needsUpdate=M}function Ya(c){return c.isMeshLambertMaterial||c.isMeshToonMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.isShadowMaterial||c.isShaderMaterial&&c.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return f},this.setRenderTargetTextures=function(c,M,w){const y=ve.get(c);y.__autoAllocateDepthBuffer=c.resolveDepthBuffer===!1,y.__autoAllocateDepthBuffer===!1&&(y.__useRenderToTexture=!1),ve.get(c.texture).__webglTexture=M,ve.get(c.depthTexture).__webglTexture=y.__autoAllocateDepthBuffer?void 0:w,y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(c,M){const w=ve.get(c);w.__webglFramebuffer=M,w.__useDefaultFramebuffer=M===void 0};const Ka=_.createFramebuffer();this.setRenderTarget=function(c,M=0,w=0){f=c,j=M,p=w;let y=!0,b=null,Q=!1,oe=!1;if(c){const ce=ve.get(c);if(ce.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(_.FRAMEBUFFER,null),y=!1;else if(ce.__webglFramebuffer===void 0)Pe.setupRenderTarget(c);else if(ce.__hasExternalTextures)Pe.rebindTextures(c,ve.get(c.texture).__webglTexture,ve.get(c.depthTexture).__webglTexture);else if(c.depthBuffer){const ge=c.depthTexture;if(ce.__boundDepthTexture!==ge){if(ge!==null&&ve.has(ge)&&(c.width!==ge.image.width||c.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(c)}}const be=c.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(oe=!0);const Ae=ve.get(c).__webglFramebuffer;c.isWebGLCubeRenderTarget?(Array.isArray(Ae[M])?b=Ae[M][w]:b=Ae[M],Q=!0):c.samples>0&&Pe.useMultisampledRTT(c)===!1?b=ve.get(c).__webglMultisampledFramebuffer:Array.isArray(Ae)?b=Ae[w]:b=Ae,z.copy(c.viewport),W.copy(c.scissor),Z=c.scissorTest}else z.copy(Je).multiplyScalar(pe).floor(),W.copy($e).multiplyScalar(pe).floor(),Z=et;if(w!==0&&(b=Ka),he.bindFramebuffer(_.FRAMEBUFFER,b)&&y&&he.drawBuffers(c,b),he.viewport(z),he.scissor(W),he.setScissorTest(Z),Q){const ce=ve.get(c.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+M,ce.__webglTexture,w)}else if(oe){const ce=M;for(let be=0;be<c.textures.length;be++){const Ae=ve.get(c.textures[be]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+be,Ae.__webglTexture,w,ce)}}else if(c!==null&&w!==0){const ce=ve.get(c.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,ce.__webglTexture,w)}R=-1},this.readRenderTargetPixels=function(c,M,w,y,b,Q,oe,ue=0){if(!(c&&c.isWebGLRenderTarget)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ce=ve.get(c).__webglFramebuffer;if(c.isWebGLCubeRenderTarget&&oe!==void 0&&(ce=ce[oe]),ce){he.bindFramebuffer(_.FRAMEBUFFER,ce);try{const be=c.textures[ue],Ae=be.format,ge=be.type;if(!Xe.textureFormatReadable(Ae)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(ge)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}M>=0&&M<=c.width-y&&w>=0&&w<=c.height-b&&(c.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+ue),_.readPixels(M,w,y,b,Re.convert(Ae),Re.convert(ge),Q))}finally{const be=f!==null?ve.get(f).__webglFramebuffer:null;he.bindFramebuffer(_.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(c,M,w,y,b,Q,oe,ue=0){if(!(c&&c.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ce=ve.get(c).__webglFramebuffer;if(c.isWebGLCubeRenderTarget&&oe!==void 0&&(ce=ce[oe]),ce)if(M>=0&&M<=c.width-y&&w>=0&&w<=c.height-b){he.bindFramebuffer(_.FRAMEBUFFER,ce);const be=c.textures[ue],Ae=be.format,ge=be.type;if(!Xe.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,Oe),_.bufferData(_.PIXEL_PACK_BUFFER,Q.byteLength,_.STREAM_READ),c.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+ue),_.readPixels(M,w,y,b,Re.convert(Ae),Re.convert(ge),0);const He=f!==null?ve.get(f).__webglFramebuffer:null;he.bindFramebuffer(_.FRAMEBUFFER,He);const at=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await Ja(_,at,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,Oe),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,Q),_.deleteBuffer(Oe),_.deleteSync(at),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(c,M=null,w=0){const y=Math.pow(2,-w),b=Math.floor(c.image.width*y),Q=Math.floor(c.image.height*y),oe=M!==null?M.x:0,ue=M!==null?M.y:0;Pe.setTexture2D(c,0),_.copyTexSubImage2D(_.TEXTURE_2D,w,0,0,oe,ue,b,Q),he.unbindTexture()};const qa=_.createFramebuffer(),Za=_.createFramebuffer();this.copyTextureToTexture=function(c,M,w=null,y=null,b=0,Q=null){Q===null&&(b!==0?(Hn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=b,b=0):Q=0);let oe,ue,ce,be,Ae,ge,Oe,He,at;const rt=c.isCompressedTexture?c.mipmaps[Q]:c.image;if(w!==null)oe=w.max.x-w.min.x,ue=w.max.y-w.min.y,ce=w.isBox3?w.max.z-w.min.z:1,be=w.min.x,Ae=w.min.y,ge=w.isBox3?w.min.z:0;else{const St=Math.pow(2,-b);oe=Math.floor(rt.width*St),ue=Math.floor(rt.height*St),c.isDataArrayTexture?ce=rt.depth:c.isData3DTexture?ce=Math.floor(rt.depth*St):ce=1,be=0,Ae=0,ge=0}y!==null?(Oe=y.x,He=y.y,at=y.z):(Oe=0,He=0,at=0);const ze=Re.convert(M.format),Ee=Re.convert(M.type);let nt;M.isData3DTexture?(Pe.setTexture3D(M,0),nt=_.TEXTURE_3D):M.isDataArrayTexture||M.isCompressedArrayTexture?(Pe.setTexture2DArray(M,0),nt=_.TEXTURE_2D_ARRAY):(Pe.setTexture2D(M,0),nt=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,M.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,M.unpackAlignment);const Fe=_.getParameter(_.UNPACK_ROW_LENGTH),gt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),kt=_.getParameter(_.UNPACK_SKIP_PIXELS),vt=_.getParameter(_.UNPACK_SKIP_ROWS),$t=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,rt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,rt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,be),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ae),_.pixelStorei(_.UNPACK_SKIP_IMAGES,ge);const it=c.isDataArrayTexture||c.isData3DTexture,ut=M.isDataArrayTexture||M.isData3DTexture;if(c.isDepthTexture){const St=ve.get(c),dt=ve.get(M),pt=ve.get(St.__renderTarget),Cn=ve.get(dt.__renderTarget);he.bindFramebuffer(_.READ_FRAMEBUFFER,pt.__webglFramebuffer),he.bindFramebuffer(_.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Nt=0;Nt<ce;Nt++)it&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ve.get(c).__webglTexture,b,ge+Nt),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ve.get(M).__webglTexture,Q,at+Nt)),_.blitFramebuffer(be,Ae,oe,ue,Oe,He,oe,ue,_.DEPTH_BUFFER_BIT,_.NEAREST);he.bindFramebuffer(_.READ_FRAMEBUFFER,null),he.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(b!==0||c.isRenderTargetTexture||ve.has(c)){const St=ve.get(c),dt=ve.get(M);he.bindFramebuffer(_.READ_FRAMEBUFFER,qa),he.bindFramebuffer(_.DRAW_FRAMEBUFFER,Za);for(let pt=0;pt<ce;pt++)it?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,St.__webglTexture,b,ge+pt):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,St.__webglTexture,b),ut?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,dt.__webglTexture,Q,at+pt):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,dt.__webglTexture,Q),b!==0?_.blitFramebuffer(be,Ae,oe,ue,Oe,He,oe,ue,_.COLOR_BUFFER_BIT,_.NEAREST):ut?_.copyTexSubImage3D(nt,Q,Oe,He,at+pt,be,Ae,oe,ue):_.copyTexSubImage2D(nt,Q,Oe,He,be,Ae,oe,ue);he.bindFramebuffer(_.READ_FRAMEBUFFER,null),he.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else ut?c.isDataTexture||c.isData3DTexture?_.texSubImage3D(nt,Q,Oe,He,at,oe,ue,ce,ze,Ee,rt.data):M.isCompressedArrayTexture?_.compressedTexSubImage3D(nt,Q,Oe,He,at,oe,ue,ce,ze,rt.data):_.texSubImage3D(nt,Q,Oe,He,at,oe,ue,ce,ze,Ee,rt):c.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,Q,Oe,He,oe,ue,ze,Ee,rt.data):c.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,Q,Oe,He,rt.width,rt.height,ze,rt.data):_.texSubImage2D(_.TEXTURE_2D,Q,Oe,He,oe,ue,ze,Ee,rt);_.pixelStorei(_.UNPACK_ROW_LENGTH,Fe),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,gt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,kt),_.pixelStorei(_.UNPACK_SKIP_ROWS,vt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,$t),Q===0&&M.generateMipmaps&&_.generateMipmap(nt),he.unbindTexture()},this.initRenderTarget=function(c){ve.get(c).__webglFramebuffer===void 0&&Pe.setupRenderTarget(c)},this.initTexture=function(c){c.isCubeTexture?Pe.setTextureCube(c,0):c.isData3DTexture?Pe.setTexture3D(c,0):c.isDataArrayTexture||c.isCompressedArrayTexture?Pe.setTexture2DArray(c,0):Pe.setTexture2D(c,0),he.unbindTexture()},this.resetState=function(){j=0,p=0,f=null,he.reset(),m.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(n),t.unpackColorSpace=ot._getUnpackColorSpace()}}const ma={type:"change"},ei={type:"start"},ka={type:"end"},hn=new vo,xa=new Ma,sd=Math.cos(70*So.DEG2RAD),st=new We,ht=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gn=1e-6;class Md extends go{constructor(n,t=null){super(n,t),this.state=Ve.NONE,this.target=new We,this.cursor=new We,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yt.ROTATE,MIDDLE:Yt.DOLLY,RIGHT:Yt.PAN},this.touches={ONE:Xt.ROTATE,TWO:Xt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new We,this._lastQuaternion=new Xi,this._lastTargetPosition=new We,this._quat=new Xi().setFromUnitVectors(n.up,new We(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yi,this._sphericalDelta=new Yi,this._scale=1,this._panOffset=new We,this._rotateStart=new Ze,this._rotateEnd=new Ze,this._rotateDelta=new Ze,this._panStart=new Ze,this._panEnd=new Ze,this._panDelta=new Ze,this._dollyStart=new Ze,this._dollyEnd=new Ze,this._dollyDelta=new Ze,this._dollyDirection=new We,this._mouse=new Ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ld.bind(this),this._onPointerDown=cd.bind(this),this._onPointerUp=fd.bind(this),this._onContextMenu=xd.bind(this),this._onMouseWheel=pd.bind(this),this._onKeyDown=hd.bind(this),this._onTouchStart=_d.bind(this),this._onTouchMove=md.bind(this),this._onMouseDown=dd.bind(this),this._onMouseMove=ud.bind(this),this._interceptControlDown=gd.bind(this),this._interceptControlUp=vd.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(n){super.connect(n),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(n){n.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=n}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ma),this.update(),this.state=Ve.NONE}update(n=null){const t=this.object.position;st.copy(t).sub(this.target),st.applyQuaternion(this._quat),this._spherical.setFromVector3(st),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(n)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ht:i>Math.PI&&(i-=ht),s<-Math.PI?s+=ht:s>Math.PI&&(s-=ht),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=h!=this._spherical.radius}if(st.setFromSpherical(this._spherical),st.applyQuaternion(this._quatInverse),t.copy(this.target).add(st),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=st.length();h=this._clampDistance(d*this._scale);const A=d-h;this.object.position.addScaledVector(this._dollyDirection,A),this.object.updateMatrixWorld(),r=!!A}else if(this.object.isOrthographicCamera){const d=new We(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const A=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=A!==this.object.zoom;const S=new We(this._mouse.x,this._mouse.y,0);S.unproject(this.object),this.object.position.sub(S).add(d),this.object.updateMatrixWorld(),h=st.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(hn.origin.copy(this.object.position),hn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(hn.direction))<sd?this.object.lookAt(this.target):(xa.setFromNormalAndCoplanarPoint(this.object.up,this.target),hn.intersectPlane(xa,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gn||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gn||this._lastTargetPosition.distanceToSquared(this.target)>Gn?(this.dispatchEvent(ma),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(n){return n!==null?ht/60*this.autoRotateSpeed*n:ht/60/60*this.autoRotateSpeed}_getZoomScale(n){const t=Math.abs(n*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(n){this._sphericalDelta.theta-=n}_rotateUp(n){this._sphericalDelta.phi-=n}_panLeft(n,t){st.setFromMatrixColumn(t,0),st.multiplyScalar(-n),this._panOffset.add(st)}_panUp(n,t){this.screenSpacePanning===!0?st.setFromMatrixColumn(t,1):(st.setFromMatrixColumn(t,0),st.crossVectors(this.object.up,st)),st.multiplyScalar(n),this._panOffset.add(st)}_pan(n,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;st.copy(s).sub(this.target);let r=st.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*n*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(n*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(n,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=n-i.left,r=t-i.top,h=i.width,d=i.height;this._mouse.x=s/h*2-1,this._mouse.y=-(r/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(n){return Math.max(this.minDistance,Math.min(this.maxDistance,n))}_handleMouseDownRotate(n){this._rotateStart.set(n.clientX,n.clientY)}_handleMouseDownDolly(n){this._updateZoomParameters(n.clientX,n.clientX),this._dollyStart.set(n.clientX,n.clientY)}_handleMouseDownPan(n){this._panStart.set(n.clientX,n.clientY)}_handleMouseMoveRotate(n){this._rotateEnd.set(n.clientX,n.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(n){this._dollyEnd.set(n.clientX,n.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(n){this._panEnd.set(n.clientX,n.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(n){this._updateZoomParameters(n.clientX,n.clientY),n.deltaY<0?this._dollyIn(this._getZoomScale(n.deltaY)):n.deltaY>0&&this._dollyOut(this._getZoomScale(n.deltaY)),this.update()}_handleKeyDown(n){let t=!1;switch(n.code){case this.keys.UP:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(-ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(-ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(n.preventDefault(),this.update())}_handleTouchStartRotate(n){if(this._pointers.length===1)this._rotateStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),s=.5*(n.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(n){if(this._pointers.length===1)this._panStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),s=.5*(n.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,s=n.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enablePan&&this._handleTouchStartPan(n)}_handleTouchStartDollyRotate(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enableRotate&&this._handleTouchStartRotate(n)}_handleTouchMoveRotate(n){if(this._pointers.length==1)this._rotateEnd.set(n.pageX,n.pageY);else{const i=this._getSecondPointerPosition(n),s=.5*(n.pageX+i.x),r=.5*(n.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(n){if(this._pointers.length===1)this._panEnd.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),s=.5*(n.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,s=n.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(n.pageX+t.x)*.5,d=(n.pageY+t.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enablePan&&this._handleTouchMovePan(n)}_handleTouchMoveDollyRotate(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enableRotate&&this._handleTouchMoveRotate(n)}_addPointer(n){this._pointers.push(n.pointerId)}_removePointer(n){delete this._pointerPositions[n.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(n){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId)return!0;return!1}_trackPointer(n){let t=this._pointerPositions[n.pointerId];t===void 0&&(t=new Ze,this._pointerPositions[n.pointerId]=t),t.set(n.pageX,n.pageY)}_getSecondPointerPosition(n){const t=n.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(n){const t=n.deltaMode,i={clientX:n.clientX,clientY:n.clientY,deltaY:n.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return n.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function cd(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function ld(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function fd(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ka),this.state=Ve.NONE;break;case 1:const n=this._pointers[0],t=this._pointerPositions[n];this._onTouchStart({pointerId:n,pageX:t.x,pageY:t.y});break}}function dd(e){let n;switch(e.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case Yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Ve.DOLLY;break;case Yt.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Ve.ROTATE}break;case Yt.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(ei)}function ud(e){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function pd(e){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(e.preventDefault(),this.dispatchEvent(ei),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(ka))}function hd(e){this.enabled!==!1&&this._handleKeyDown(e)}function _d(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Xt.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Ve.TOUCH_ROTATE;break;case Xt.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case Xt.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Ve.TOUCH_DOLLY_PAN;break;case Xt.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(ei)}function md(e){switch(this._trackPointer(e),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Ve.NONE}}function xd(e){this.enabled!==!1&&e.preventDefault()}function gd(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vd(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}export{Md as O,Tt as S,ne as U,Ed as W};
