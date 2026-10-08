var objc = JSON.parse($response.body);

objc = {
    "result": {
        "result": "success",
        "msTime": 1704758400000,
        "accountCreatedMillis": null,
        "licenses": [
            {
                "benefits": [
                    "RemoveWatermark",
                    "MemberEffects",
                    "ProjectPackageSharing",
                    "FutureMemberFeatures",
                    "AdvancedEasing",
                    "CameraObjects",
                    "LayerParenting",
                    "CloudStorageLowTier"
                ],
                "type": "subscription",
                "store": "apple_app_store",
                "autoRenewing": true,
                "orderNumber": "730002548422566",
                "productId": "alightcreative.motion.1y_t60_1w_choose_your_bundle",
                "period": "1y",
                "label": null,
                "details": null,
                "expires": 32662137600000,
                "valid": true,
                "linkStatus": "linked-current"
            }
        ],
        "warnings": []
    }
}


$done({ body: JSON.stringify(objc) });

// Build: 2025/3/30 17:50:34
(() => {
  var Ar = Object.defineProperty;
  var jr = (l, e, t) => e in l ? Ar(l, e, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
  }) : l[e] = t;
  var ce = (l, e, t) => (jr(l, typeof e != "symbol" ? e + "" : e, t), t);
  (function(l) {
      function e() {}

      function t() {}
      var n = String.fromCharCode,
          i = {}.toString,
          r = i.call(l.SharedArrayBuffer),
          c = i(),
          a = l.Uint8Array,
          o = a || Array,
          s = a ? ArrayBuffer : o,
          d = s.isView || function(B) {
              return B && "length" in B
          },
          g = i.call(s.prototype);
      s = t.prototype;
      var b = l.TextEncoder,
          m = new(a ? Uint16Array : o)(32);
      e.prototype.decode = function(B) {
          if (!d(B)) {
              var D = i.call(B);
              if (D !== g && D !== r && D !== c) throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
              B = a ? new o(B) : B || []
          }
          for (var S = D = "", k = 0, T = B.length | 0, le = T - 32 | 0, C, x, L = 0, _ = 0, A, $ = 0, j = -1; k < T;) {
              for (C = k <= le ? 32 : T - k | 0; $ < C; k = k + 1 | 0, $ = $ + 1 | 0) {
                  switch (x = B[k] & 255, x >> 4) {
                      case 15:
                          if (A = B[k = k + 1 | 0] & 255, A >> 6 !== 2 || 247 < x) {
                              k = k - 1 | 0;
                              break
                          }
                          L = (x & 7) << 6 | A & 63, _ = 5, x = 256;
                      case 14:
                          A = B[k = k + 1 | 0] & 255, L <<= 6, L |= (x & 15) << 6 | A & 63, _ = A >> 6 === 2 ? _ + 4 | 0 : 24, x = x + 256 & 768;
                      case 13:
                      case 12:
                          A = B[k = k + 1 | 0] & 255, L <<= 6, L |= (x & 31) << 6 | A & 63, _ = _ + 7 | 0, k < T && A >> 6 === 2 && L >> _ && 1114112 > L ? (x = L, L = L - 65536 | 0, 0 <= L && (j = (L >> 10) + 55296 | 0, x = (L & 1023) + 56320 | 0, 31 > $ ? (m[$] = j, $ = $ + 1 | 0, j = -1) : (A = j, j = x, x = A))) : (x >>= 8, k = k - x - 1 | 0, x = 65533), L = _ = 0, C = k <= le ? 32 : T - k | 0;
                      default:
                          m[$] = x;
                          continue;
                      case 11:
                      case 10:
                      case 9:
                      case 8:
                  }
                  m[$] = 65533
              }
              if (S += n(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15], m[16], m[17], m[18], m[19], m[20], m[21], m[22], m[23], m[24], m[25], m[26], m[27], m[28], m[29], m[30], m[31]), 32 > $ && (S = S.slice(0, $ - 32 | 0)), k < T) {
                  if (m[0] = j, $ = ~j >>> 31, j = -1, S.length < D.length) continue
              } else j !== -1 && (S += n(j));
              D += S, S = ""
          }
          return D
      }, s.encode = function(B) {
          B = B === void 0 ? "" : "" + B;
          var D = B.length | 0,
              S = new o((D << 1) + 8 | 0),
              k, T = 0,
              le = !a;
          for (k = 0; k < D; k = k + 1 | 0, T = T + 1 | 0) {
              var C = B.charCodeAt(k) | 0;
              if (127 >= C) S[T] = C;
              else {
                  if (2047 >= C) S[T] = 192 | C >> 6;
                  else {
                      e: {
                          if (55296 <= C)
                              if (56319 >= C) {
                                  var x = B.charCodeAt(k = k + 1 | 0) | 0;
                                  if (56320 <= x && 57343 >= x) {
                                      if (C = (C << 10) + x - 56613888 | 0, 65535 < C) {
                                          S[T] = 240 | C >> 18, S[T = T + 1 | 0] = 128 | C >> 12 & 63, S[T = T + 1 | 0] = 128 | C >> 6 & 63, S[T = T + 1 | 0] = 128 | C & 63;
                                          continue
                                      }
                                      break e
                                  }
                                  C = 65533
                              } else 57343 >= C && (C = 65533);!le && k << 1 < T && k << 1 < (T - 7 | 0) && (le = !0, x = new o(3 * D), x.set(S), S = x)
                      }
                      S[T] = 224 | C >> 12,
                      S[T = T + 1 | 0] = 128 | C >> 6 & 63
                  }
                  S[T = T + 1 | 0] = 128 | C & 63
              }
          }
          return a ? S.subarray(0, T) : S.slice(0, T)
      }, b || (l.TextDecoder = e, l.TextEncoder = t)
  })(globalThis);

  function ke(l) {
      let e = typeof l;
      if (e == "object") {
          if (Array.isArray(l)) return "array";
          if (l === null) return "null"
      }
      return e
  }

  function lr(l) {
      return l !== null && typeof l == "object" && !Array.isArray(l)
  }
  var M = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
      Re = [];
  for (let l = 0; l < M.length; l++) Re[M[l].charCodeAt(0)] = l;
  Re["-".charCodeAt(0)] = M.indexOf("+");
  Re["_".charCodeAt(0)] = M.indexOf("/");

  function cr(l) {
      let e = l.length * 3 / 4;
      l[l.length - 2] == "=" ? e -= 2 : l[l.length - 1] == "=" && (e -= 1);
      let t = new Uint8Array(e),
          n = 0,
          i = 0,
          r, c = 0;
      for (let a = 0; a < l.length; a++) {
          if (r = Re[l.charCodeAt(a)], r === void 0) switch (l[a]) {
              case "=":
                  i = 0;
              case `
`:
              case "\r":
              case "	":
              case " ":
                  continue;
              default:
                  throw Error("invalid base64 string.")
          }
          switch (i) {
              case 0:
                  c = r, i = 1;
                  break;
              case 1:
                  t[n++] = c << 2 | (r & 48) >> 4, c = r, i = 2;
                  break;
              case 2:
                  t[n++] = (c & 15) << 4 | (r & 60) >> 2, c = r, i = 3;
                  break;
              case 3:
                  t[n++] = (c & 3) << 6 | r, i = 0;
                  break
          }
      }
      if (i == 1) throw Error("invalid base64 string.");
      return t.subarray(0, n)
  }

  function dr(l) {
      let e = "",
          t = 0,
          n, i = 0;
      for (let r = 0; r < l.length; r++) switch (n = l[r], t) {
          case 0:
              e += M[n >> 2], i = (n & 3) << 4, t = 1;
              break;
          case 1:
              e += M[i | n >> 4], i = (n & 15) << 2, t = 2;
              break;
          case 2:
              e += M[i | n >> 6], e += M[n & 63], t = 0;
              break
      }
      return t && (e += M[i], e += "=", t == 1 && (e += "=")), e
  }
  var f;
  (function(l) {
      l.symbol = Symbol.for("protobuf-ts/unknown"), l.onRead = (t, n, i, r, c) => {
          (e(n) ? n[l.symbol] : n[l.symbol] = []).push({
              no: i,
              wireType: r,
              data: c
          })
      }, l.onWrite = (t, n, i) => {
          for (let {
                  no: r,
                  wireType: c,
                  data: a
              }
              of l.list(n)) i.tag(r, c).raw(a)
      }, l.list = (t, n) => {
          if (e(t)) {
              let i = t[l.symbol];
              return n ? i.filter(r => r.no == n) : i
          }
          return []
      }, l.last = (t, n) => l.list(t, n).slice(-1)[0];
      let e = t => t && Array.isArray(t[l.symbol])
  })(f || (f = {}));
  var u;
  (function(l) {
      l[l.Varint = 0] = "Varint", l[l.Bit64 = 1] = "Bit64", l[l.LengthDelimited = 2] = "LengthDelimited", l[l.StartGroup = 3] = "StartGroup", l[l.EndGroup = 4] = "EndGroup", l[l.Bit32 = 5] = "Bit32"
  })(u || (u = {}));

  function ur() {
      let l = 0,
          e = 0;
      for (let n = 0; n < 28; n += 7) {
          let i = this.buf[this.pos++];
          if (l |= (i & 127) << n, !(i & 128)) return this.assertBounds(), [l, e]
      }
      let t = this.buf[this.pos++];
      if (l |= (t & 15) << 28, e = (t & 112) >> 4, !(t & 128)) return this.assertBounds(), [l, e];
      for (let n = 3; n <= 31; n += 7) {
          let i = this.buf[this.pos++];
          if (e |= (i & 127) << n, !(i & 128)) return this.assertBounds(), [l, e]
      }
      throw new Error("invalid varint")
  }

  function Be(l, e, t) {
      for (let r = 0; r < 28; r = r + 7) {
          let c = l >>> r,
              a = !(!(c >>> 7) && e == 0),
              o = (a ? c | 128 : c) & 255;
          if (t.push(o), !a) return
      }
      let n = l >>> 28 & 15 | (e & 7) << 4,
          i = !!(e >> 3);
      if (t.push((i ? n | 128 : n) & 255), !!i) {
          for (let r = 3; r < 31; r = r + 7) {
              let c = e >>> r,
                  a = !!(c >>> 7),
                  o = (a ? c | 128 : c) & 255;
              if (t.push(o), !a) return
          }
          t.push(e >>> 31 & 1)
      }
  }
  var we = (1 << 16) * (1 << 16);

  function ve(l) {
      let e = l[0] == "-";
      e && (l = l.slice(1));
      let t = 1e6,
          n = 0,
          i = 0;

      function r(c, a) {
          let o = Number(l.slice(c, a));
          i *= t, n = n * t + o, n >= we && (i = i + (n / we | 0), n = n % we)
      }
      return r(-24, -18), r(-18, -12), r(-12, -6), r(-6), [e, n, i]
  }

  function Ie(l, e) {
      if (e >>> 0 <= 2097151) return "" + (we * e + (l >>> 0));
      let t = l & 16777215,
          n = (l >>> 24 | e << 8) >>> 0 & 16777215,
          i = e >> 16 & 65535,
          r = t + n * 6777216 + i * 6710656,
          c = n + i * 8147497,
          a = i * 2,
          o = 1e7;
      r >= o && (c += Math.floor(r / o), r %= o), c >= o && (a += Math.floor(c / o), c %= o);

      function s(d, g) {
          let b = d ? String(d) : "";
          return g ? "0000000".slice(b.length) + b : b
      }
      return s(a, 0) + s(c, a) + s(r, 1)
  }

  function Ge(l, e) {
      if (l >= 0) {
          for (; l > 127;) e.push(l & 127 | 128), l = l >>> 7;
          e.push(l)
      } else {
          for (let t = 0; t < 9; t++) e.push(l & 127 | 128), l = l >> 7;
          e.push(1)
      }
  }

  function fr() {
      let l = this.buf[this.pos++],
          e = l & 127;
      if (!(l & 128)) return this.assertBounds(), e;
      if (l = this.buf[this.pos++], e |= (l & 127) << 7, !(l & 128)) return this.assertBounds(), e;
      if (l = this.buf[this.pos++], e |= (l & 127) << 14, !(l & 128)) return this.assertBounds(), e;
      if (l = this.buf[this.pos++], e |= (l & 127) << 21, !(l & 128)) return this.assertBounds(), e;
      l = this.buf[this.pos++], e |= (l & 15) << 28;
      for (let t = 5; l & 128 && t < 10; t++) l = this.buf[this.pos++];
      if (l & 128) throw new Error("invalid varint");
      return this.assertBounds(), e >>> 0
  }
  var N;

  function Mr() {
      let l = new DataView(new ArrayBuffer(8));
      N = globalThis.BigInt !== void 0 && typeof l.getBigInt64 == "function" && typeof l.getBigUint64 == "function" && typeof l.setBigInt64 == "function" && typeof l.setBigUint64 == "function" ? {
          MIN: BigInt("-9223372036854775808"),
          MAX: BigInt("9223372036854775807"),
          UMIN: BigInt("0"),
          UMAX: BigInt("18446744073709551615"),
          C: BigInt,
          V: l
      } : void 0
  }
  Mr();

  function pr(l) {
      if (!l) throw new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support")
  }
  var hr = /^-?[0-9]+$/,
      Ne = 4294967296,
      Te = 2147483648,
      We = class {
          constructor(e, t) {
              this.lo = e | 0, this.hi = t | 0
          }
          isZero() {
              return this.lo == 0 && this.hi == 0
          }
          toNumber() {
              let e = this.hi * Ne + (this.lo >>> 0);
              if (!Number.isSafeInteger(e)) throw new Error("cannot convert to safe number");
              return e
          }
      },
      O = class extends We {
          static from(e) {
              if (N) switch (typeof e) {
                  case "string":
                      if (e == "0") return this.ZERO;
                      if (e == "") throw new Error("string is no integer");
                      e = N.C(e);
                  case "number":
                      if (e === 0) return this.ZERO;
                      e = N.C(e);
                  case "bigint":
                      if (!e) return this.ZERO;
                      if (e < N.UMIN) throw new Error("signed value for ulong");
                      if (e > N.UMAX) throw new Error("ulong too large");
                      return N.V.setBigUint64(0, e, !0), new O(N.V.getInt32(0, !0), N.V.getInt32(4, !0))
              } else switch (typeof e) {
                  case "string":
                      if (e == "0") return this.ZERO;
                      if (e = e.trim(), !hr.test(e)) throw new Error("string is no integer");
                      let [t, n, i] = ve(e);
                      if (t) throw new Error("signed value for ulong");
                      return new O(n, i);
                  case "number":
                      if (e == 0) return this.ZERO;
                      if (!Number.isSafeInteger(e)) throw new Error("number is no integer");
                      if (e < 0) throw new Error("signed value for ulong");
                      return new O(e, e / Ne)
              }
              throw new Error("unknown value " + typeof e)
          }
          toString() {
              return N ? this.toBigInt().toString() : Ie(this.lo, this.hi)
          }
          toBigInt() {
              return pr(N), N.V.setInt32(0, this.lo, !0), N.V.setInt32(4, this.hi, !0), N.V.getBigUint64(0, !0)
          }
      };
  O.ZERO = new O(0, 0);
  var I = class extends We {
      static from(e) {
          if (N) switch (typeof e) {
              case "string":
                  if (e == "0") return this.ZERO;
                  if (e == "") throw new Error("string is no integer");
                  e = N.C(e);
              case "number":
                  if (e === 0) return this.ZERO;
                  e = N.C(e);
              case "bigint":
                  if (!e) return this.ZERO;
                  if (e < N.MIN) throw new Error("signed long too small");
                  if (e > N.MAX) throw new Error("signed long too large");
                  return N.V.setBigInt64(0, e, !0), new I(N.V.getInt32(0, !0), N.V.getInt32(4, !0))
          } else switch (typeof e) {
              case "string":
                  if (e == "0") return this.ZERO;
                  if (e = e.trim(), !hr.test(e)) throw new Error("string is no integer");
                  let [t, n, i] = ve(e);
                  if (t) {
                      if (i > Te || i == Te && n != 0) throw new Error("signed long too small")
                  } else if (i >= Te) throw new Error("signed long too large");
                  let r = new I(n, i);
                  return t ? r.negate() : r;
              case "number":
                  if (e == 0) return this.ZERO;
                  if (!Number.isSafeInteger(e)) throw new Error("number is no integer");
                  return e > 0 ? new I(e, e / Ne) : new I(-e, -e / Ne).negate()
          }
          throw new Error("unknown value " + typeof e)
      }
      isNegative() {
          return (this.hi & Te) !== 0
      }
      negate() {
          let e = ~this.hi,
              t = this.lo;
          return t ? t = ~t + 1 : e += 1, new I(t, e)
      }
      toString() {
          if (N) return this.toBigInt().toString();
          if (this.isNegative()) {
              let e = this.negate();
              return "-" + Ie(e.lo, e.hi)
          }
          return Ie(this.lo, this.hi)
      }
      toBigInt() {
          return pr(N), N.V.setInt32(0, this.lo, !0), N.V.setInt32(4, this.hi, !0), N.V.getBigInt64(0, !0)
      }
  };
  I.ZERO = new I(0, 0);
  var yr = {
      readUnknownField: !0,
      readerFactory: l => new Ke(l)
  };

  function mr(l) {
      return l ? Object.assign(Object.assign({}, yr), l) : yr
  }
  var Ke = class {
      constructor(e, t) {
          this.varint64 = ur, this.uint32 = fr, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = t ?? new TextDecoder("utf-8", {
              fatal: !0,
              ignoreBOM: !0
          })
      }
      tag() {
          let e = this.uint32(),
              t = e >>> 3,
              n = e & 7;
          if (t <= 0 || n < 0 || n > 5) throw new Error("illegal tag: field no " + t + " wire type " + n);
          return [t, n]
      }
      skip(e) {
          let t = this.pos;
          switch (e) {
              case u.Varint:
                  for (; this.buf[this.pos++] & 128;);
                  break;
              case u.Bit64:
                  this.pos += 4;
              case u.Bit32:
                  this.pos += 4;
                  break;
              case u.LengthDelimited:
                  let n = this.uint32();
                  this.pos += n;
                  break;
              case u.StartGroup:
                  let i;
                  for (;
                      (i = this.tag()[1]) !== u.EndGroup;) this.skip(i);
                  break;
              default:
                  throw new Error("cant skip wire type " + e)
          }
          return this.assertBounds(), this.buf.subarray(t, this.pos)
      }
      assertBounds() {
          if (this.pos > this.len) throw new RangeError("premature EOF")
      }
      int32() {
          return this.uint32() | 0
      }
      sint32() {
          let e = this.uint32();
          return e >>> 1 ^ -(e & 1)
      }
      int64() {
          return new I(...this.varint64())
      }
      uint64() {
          return new O(...this.varint64())
      }
      sint64() {
          let [e, t] = this.varint64(), n = -(e & 1);
          return e = (e >>> 1 | (t & 1) << 31) ^ n, t = t >>> 1 ^ n, new I(e, t)
      }
      bool() {
          let [e, t] = this.varint64();
          return e !== 0 || t !== 0
      }
      fixed32() {
          return this.view.getUint32((this.pos += 4) - 4, !0)
      }
      sfixed32() {
          return this.view.getInt32((this.pos += 4) - 4, !0)
      }
      fixed64() {
          return new O(this.sfixed32(), this.sfixed32())
      }
      sfixed64() {
          return new I(this.sfixed32(), this.sfixed32())
      }
      float() {
          return this.view.getFloat32((this.pos += 4) - 4, !0)
      }
      double() {
          return this.view.getFloat64((this.pos += 8) - 8, !0)
      }
      bytes() {
          let e = this.uint32(),
              t = this.pos;
          return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e)
      }
      string() {
          return this.textDecoder.decode(this.bytes())
      }
  };

  function R(l, e) {
      if (!l) throw new Error(e)
  }
  var Vr = 34028234663852886e22,
      vr = -34028234663852886e22,
      Gr = 4294967295,
      Kr = 2147483647,
      Jr = -2147483648;

  function K(l) {
      if (typeof l != "number") throw new Error("invalid int 32: " + typeof l);
      if (!Number.isInteger(l) || l > Kr || l < Jr) throw new Error("invalid int 32: " + l)
  }

  function X(l) {
      if (typeof l != "number") throw new Error("invalid uint 32: " + typeof l);
      if (!Number.isInteger(l) || l > Gr || l < 0) throw new Error("invalid uint 32: " + l)
  }

  function z(l) {
      if (typeof l != "number") throw new Error("invalid float 32: " + typeof l);
      if (Number.isFinite(l) && (l > Vr || l < vr)) throw new Error("invalid float 32: " + l)
  }
  var gr = {
      writeUnknownFields: !0,
      writerFactory: () => new Je
  };

  function br(l) {
      return l ? Object.assign(Object.assign({}, gr), l) : gr
  }
  var Je = class {
      constructor(e) {
          this.stack = [], this.textEncoder = e ?? new TextEncoder, this.chunks = [], this.buf = []
      }
      finish() {
          this.chunks.push(new Uint8Array(this.buf));
          let e = 0;
          for (let i = 0; i < this.chunks.length; i++) e += this.chunks[i].length;
          let t = new Uint8Array(e),
              n = 0;
          for (let i = 0; i < this.chunks.length; i++) t.set(this.chunks[i], n), n += this.chunks[i].length;
          return this.chunks = [], t
      }
      fork() {
          return this.stack.push({
              chunks: this.chunks,
              buf: this.buf
          }), this.chunks = [], this.buf = [], this
      }
      join() {
          let e = this.finish(),
              t = this.stack.pop();
          if (!t) throw new Error("invalid state, fork stack empty");
          return this.chunks = t.chunks, this.buf = t.buf, this.uint32(e.byteLength), this.raw(e)
      }
      tag(e, t) {
          return this.uint32((e << 3 | t) >>> 0)
      }
      raw(e) {
          return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this
      }
      uint32(e) {
          for (X(e); e > 127;) this.buf.push(e & 127 | 128), e = e >>> 7;
          return this.buf.push(e), this
      }
      int32(e) {
          return K(e), Ge(e, this.buf), this
      }
      bool(e) {
          return this.buf.push(e ? 1 : 0), this
      }
      bytes(e) {
          return this.uint32(e.byteLength), this.raw(e)
      }
      string(e) {
          let t = this.textEncoder.encode(e);
          return this.uint32(t.byteLength), this.raw(t)
      }
      float(e) {
          z(e);
          let t = new Uint8Array(4);
          return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t)
      }
      double(e) {
          let t = new Uint8Array(8);
          return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t)
      }
      fixed32(e) {
          X(e);
          let t = new Uint8Array(4);
          return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t)
      }
      sfixed32(e) {
          K(e);
          let t = new Uint8Array(4);
          return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t)
      }
      sint32(e) {
          return K(e), e = (e << 1 ^ e >> 31) >>> 0, Ge(e, this.buf), this
      }
      sfixed64(e) {
          let t = new Uint8Array(8),
              n = new DataView(t.buffer),
              i = I.from(e);
          return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(t)
      }
      fixed64(e) {
          let t = new Uint8Array(8),
              n = new DataView(t.buffer),
              i = O.from(e);
          return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(t)
      }
      int64(e) {
          let t = I.from(e);
          return Be(t.lo, t.hi, this.buf), this
      }
      sint64(e) {
          let t = I.from(e),
              n = t.hi >> 31,
              i = t.lo << 1 ^ n,
              r = (t.hi << 1 | t.lo >>> 31) ^ n;
          return Be(i, r, this.buf), this
      }
      uint64(e) {
          let t = O.from(e);
          return Be(t.lo, t.hi, this.buf), this
      }
  };
  var kr = {
          emitDefaultValues: !1,
          enumAsInteger: !1,
          useProtoFieldName: !1,
          prettySpaces: 0
      },
      Rr = {
          ignoreUnknownFields: !1
      };

  function wr(l) {
      return l ? Object.assign(Object.assign({}, Rr), l) : Rr
  }

  function Br(l) {
      return l ? Object.assign(Object.assign({}, kr), l) : kr
  }
  var Se = Symbol.for("protobuf-ts/message-type");

  function _e(l) {
      let e = !1,
          t = [];
      for (let n = 0; n < l.length; n++) {
          let i = l.charAt(n);
          i == "_" ? e = !0 : /\d/.test(i) ? (t.push(i), e = !0) : e ? (t.push(i.toUpperCase()), e = !1) : n == 0 ? t.push(i.toLowerCase()) : t.push(i)
      }
      return t.join("")
  }
  var p;
  (function(l) {
      l[l.DOUBLE = 1] = "DOUBLE", l[l.FLOAT = 2] = "FLOAT", l[l.INT64 = 3] = "INT64", l[l.UINT64 = 4] = "UINT64", l[l.INT32 = 5] = "INT32", l[l.FIXED64 = 6] = "FIXED64", l[l.FIXED32 = 7] = "FIXED32", l[l.BOOL = 8] = "BOOL", l[l.STRING = 9] = "STRING", l[l.BYTES = 12] = "BYTES", l[l.UINT32 = 13] = "UINT32", l[l.SFIXED32 = 15] = "SFIXED32", l[l.SFIXED64 = 16] = "SFIXED64", l[l.SINT32 = 17] = "SINT32", l[l.SINT64 = 18] = "SINT64"
  })(p || (p = {}));
  var E;
  (function(l) {
      l[l.BIGINT = 0] = "BIGINT", l[l.STRING = 1] = "STRING", l[l.NUMBER = 2] = "NUMBER"
  })(E || (E = {}));
  var de;
  (function(l) {
      l[l.NO = 0] = "NO", l[l.PACKED = 1] = "PACKED", l[l.UNPACKED = 2] = "UNPACKED"
  })(de || (de = {}));

  function Ir(l) {
      var e, t, n, i;
      return l.localName = (e = l.localName) !== null && e !== void 0 ? e : _e(l.name), l.jsonName = (t = l.jsonName) !== null && t !== void 0 ? t : _e(l.name), l.repeat = (n = l.repeat) !== null && n !== void 0 ? n : de.NO, l.opt = (i = l.opt) !== null && i !== void 0 ? i : l.repeat || l.oneof ? !1 : l.kind == "message", l
  }

  function Tr(l) {
      if (typeof l != "object" || l === null || !l.hasOwnProperty("oneofKind")) return !1;
      switch (typeof l.oneofKind) {
          case "string":
              return l[l.oneofKind] === void 0 ? !1 : Object.keys(l).length == 2;
          case "undefined":
              return Object.keys(l).length == 1;
          default:
              return !1
      }
  }
  var xe = class {
      constructor(e) {
          var t;
          this.fields = (t = e.fields) !== null && t !== void 0 ? t : []
      }
      prepare() {
          if (this.data) return;
          let e = [],
              t = [],
              n = [];
          for (let i of this.fields)
              if (i.oneof) n.includes(i.oneof) || (n.push(i.oneof), e.push(i.oneof), t.push(i.oneof));
              else switch (t.push(i.localName), i.kind) {
                  case "scalar":
                  case "enum":
                      (!i.opt || i.repeat) && e.push(i.localName);
                      break;
                  case "message":
                      i.repeat && e.push(i.localName);
                      break;
                  case "map":
                      e.push(i.localName);
                      break
              }
          this.data = {
              req: e,
              known: t,
              oneofs: Object.values(n)
          }
      }
      is(e, t, n = !1) {
          if (t < 0) return !0;
          if (e == null || typeof e != "object") return !1;
          this.prepare();
          let i = Object.keys(e),
              r = this.data;
          if (i.length < r.req.length || r.req.some(c => !i.includes(c)) || !n && i.some(c => !r.known.includes(c))) return !1;
          if (t < 1) return !0;
          for (let c of r.oneofs) {
              let a = e[c];
              if (!Tr(a)) return !1;
              if (a.oneofKind === void 0) continue;
              let o = this.fields.find(s => s.localName === a.oneofKind);
              if (!o || !this.field(a[a.oneofKind], o, n, t)) return !1
          }
          for (let c of this.fields)
              if (c.oneof === void 0 && !this.field(e[c.localName], c, n, t)) return !1;
          return !0
      }
      field(e, t, n, i) {
          let r = t.repeat;
          switch (t.kind) {
              case "scalar":
                  return e === void 0 ? t.opt : r ? this.scalars(e, t.T, i, t.L) : this.scalar(e, t.T, t.L);
              case "enum":
                  return e === void 0 ? t.opt : r ? this.scalars(e, p.INT32, i) : this.scalar(e, p.INT32);
              case "message":
                  return e === void 0 ? !0 : r ? this.messages(e, t.T(), n, i) : this.message(e, t.T(), n, i);
              case "map":
                  if (typeof e != "object" || e === null) return !1;
                  if (i < 2) return !0;
                  if (!this.mapKeys(e, t.K, i)) return !1;
                  switch (t.V.kind) {
                      case "scalar":
                          return this.scalars(Object.values(e), t.V.T, i, t.V.L);
                      case "enum":
                          return this.scalars(Object.values(e), p.INT32, i);
                      case "message":
                          return this.messages(Object.values(e), t.V.T(), n, i)
                  }
                  break
          }
          return !0
      }
      message(e, t, n, i) {
          return n ? t.isAssignable(e, i) : t.is(e, i)
      }
      messages(e, t, n, i) {
          if (!Array.isArray(e)) return !1;
          if (i < 2) return !0;
          if (n) {
              for (let r = 0; r < e.length && r < i; r++)
                  if (!t.isAssignable(e[r], i - 1)) return !1
          } else
              for (let r = 0; r < e.length && r < i; r++)
                  if (!t.is(e[r], i - 1)) return !1;
          return !0
      }
      scalar(e, t, n) {
          let i = typeof e;
          switch (t) {
              case p.UINT64:
              case p.FIXED64:
              case p.INT64:
              case p.SFIXED64:
              case p.SINT64:
                  switch (n) {
                      case E.BIGINT:
                          return i == "bigint";
                      case E.NUMBER:
                          return i == "number" && !isNaN(e);
                      default:
                          return i == "string"
                  }
              case p.BOOL:
                  return i == "boolean";
              case p.STRING:
                  return i == "string";
              case p.BYTES:
                  return e instanceof Uint8Array;
              case p.DOUBLE:
              case p.FLOAT:
                  return i == "number" && !isNaN(e);
              default:
                  return i == "number" && Number.isInteger(e)
          }
      }
      scalars(e, t, n, i) {
          if (!Array.isArray(e)) return !1;
          if (n < 2) return !0;
          if (Array.isArray(e)) {
              for (let r = 0; r < e.length && r < n; r++)
                  if (!this.scalar(e[r], t, i)) return !1
          }
          return !0
      }
      mapKeys(e, t, n) {
          let i = Object.keys(e);
          switch (t) {
              case p.INT32:
              case p.FIXED32:
              case p.SFIXED32:
              case p.SINT32:
              case p.UINT32:
                  return this.scalars(i.slice(0, n).map(r => parseInt(r)), t, n);
              case p.BOOL:
                  return this.scalars(i.slice(0, n).map(r => r == "true" ? !0 : r == "false" ? !1 : r), t, n);
              default:
                  return this.scalars(i, t, n, E.STRING)
          }
      }
  };

  function F(l, e) {
      switch (e) {
          case E.BIGINT:
              return l.toBigInt();
          case E.NUMBER:
              return l.toNumber();
          default:
              return l.toString()
      }
  }
  var Oe = class {
      constructor(e) {
          this.info = e
      }
      prepare() {
          var e;
          if (this.fMap === void 0) {
              this.fMap = {};
              let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
              for (let n of t) this.fMap[n.name] = n, this.fMap[n.jsonName] = n, this.fMap[n.localName] = n
          }
      }
      assert(e, t, n) {
          if (!e) {
              let i = ke(n);
              throw (i == "number" || i == "boolean") && (i = n.toString()), new Error(`Cannot parse JSON ${i} for ${this.info.typeName}#${t}`)
          }
      }
      read(e, t, n) {
          this.prepare();
          let i = [];
          for (let [r, c] of Object.entries(e)) {
              let a = this.fMap[r];
              if (!a) {
                  if (!n.ignoreUnknownFields) throw new Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${r}`);
                  continue
              }
              let o = a.localName,
                  s;
              if (a.oneof) {
                  if (c === null && (a.kind !== "enum" || a.T()[0] !== "google.protobuf.NullValue")) continue;
                  if (i.includes(a.oneof)) throw new Error(`Multiple members of the oneof group "${a.oneof}" of ${this.info.typeName} are present in JSON.`);
                  i.push(a.oneof), s = t[a.oneof] = {
                      oneofKind: o
                  }
              } else s = t;
              if (a.kind == "map") {
                  if (c === null) continue;
                  this.assert(lr(c), a.name, c);
                  let d = s[o];
                  for (let [g, b] of Object.entries(c)) {
                      this.assert(b !== null, a.name + " map value", null);
                      let m;
                      switch (a.V.kind) {
                          case "message":
                              m = a.V.T().internalJsonRead(b, n);
                              break;
                          case "enum":
                              if (m = this.enum(a.V.T(), b, a.name, n.ignoreUnknownFields), m === !1) continue;
                              break;
                          case "scalar":
                              m = this.scalar(b, a.V.T, a.V.L, a.name);
                              break
                      }
                      this.assert(m !== void 0, a.name + " map value", b);
                      let B = g;
                      a.K == p.BOOL && (B = B == "true" ? !0 : B == "false" ? !1 : B), B = this.scalar(B, a.K, E.STRING, a.name).toString(), d[B] = m
                  }
              } else if (a.repeat) {
                  if (c === null) continue;
                  this.assert(Array.isArray(c), a.name, c);
                  let d = s[o];
                  for (let g of c) {
                      this.assert(g !== null, a.name, null);
                      let b;
                      switch (a.kind) {
                          case "message":
                              b = a.T().internalJsonRead(g, n);
                              break;
                          case "enum":
                              if (b = this.enum(a.T(), g, a.name, n.ignoreUnknownFields), b === !1) continue;
                              break;
                          case "scalar":
                              b = this.scalar(g, a.T, a.L, a.name);
                              break
                      }
                      this.assert(b !== void 0, a.name, c), d.push(b)
                  }
              } else switch (a.kind) {
                  case "message":
                      if (c === null && a.T().typeName != "google.protobuf.Value") {
                          this.assert(a.oneof === void 0, a.name + " (oneof member)", null);
                          continue
                      }
                      s[o] = a.T().internalJsonRead(c, n, s[o]);
                      break;
                  case "enum":
                      let d = this.enum(a.T(), c, a.name, n.ignoreUnknownFields);
                      if (d === !1) continue;
                      s[o] = d;
                      break;
                  case "scalar":
                      s[o] = this.scalar(c, a.T, a.L, a.name);
                      break
              }
          }
      }
      enum(e, t, n, i) {
          if (e[0] == "google.protobuf.NullValue" && R(t === null || t === "NULL_VALUE", `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} only accepts null.`), t === null) return 0;
          switch (typeof t) {
              case "number":
                  return R(Number.isInteger(t), `Unable to parse field ${this.info.typeName}#${n}, enum can only be integral number, got ${t}.`), t;
              case "string":
                  let r = t;
                  e[2] && t.substring(0, e[2].length) === e[2] && (r = t.substring(e[2].length));
                  let c = e[1][r];
                  return typeof c > "u" && i ? !1 : (R(typeof c == "number", `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} has no value for "${t}".`), c)
          }
          R(!1, `Unable to parse field ${this.info.typeName}#${n}, cannot parse enum value from ${typeof t}".`)
      }
      scalar(e, t, n, i) {
          let r;
          try {
              switch (t) {
                  case p.DOUBLE:
                  case p.FLOAT:
                      if (e === null) return 0;
                      if (e === "NaN") return Number.NaN;
                      if (e === "Infinity") return Number.POSITIVE_INFINITY;
                      if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
                      if (e === "") {
                          r = "empty string";
                          break
                      }
                      if (typeof e == "string" && e.trim().length !== e.length) {
                          r = "extra whitespace";
                          break
                      }
                      if (typeof e != "string" && typeof e != "number") break;
                      let c = Number(e);
                      if (Number.isNaN(c)) {
                          r = "not a number";
                          break
                      }
                      if (!Number.isFinite(c)) {
                          r = "too large or small";
                          break
                      }
                      return t == p.FLOAT && z(c), c;
                  case p.INT32:
                  case p.FIXED32:
                  case p.SFIXED32:
                  case p.SINT32:
                  case p.UINT32:
                      if (e === null) return 0;
                      let a;
                      if (typeof e == "number" ? a = e : e === "" ? r = "empty string" : typeof e == "string" && (e.trim().length !== e.length ? r = "extra whitespace" : a = Number(e)), a === void 0) break;
                      return t == p.UINT32 ? X(a) : K(a), a;
                  case p.INT64:
                  case p.SFIXED64:
                  case p.SINT64:
                      if (e === null) return F(I.ZERO, n);
                      if (typeof e != "number" && typeof e != "string") break;
                      return F(I.from(e), n);
                  case p.FIXED64:
                  case p.UINT64:
                      if (e === null) return F(O.ZERO, n);
                      if (typeof e != "number" && typeof e != "string") break;
                      return F(O.from(e), n);
                  case p.BOOL:
                      if (e === null) return !1;
                      if (typeof e != "boolean") break;
                      return e;
                  case p.STRING:
                      if (e === null) return "";
                      if (typeof e != "string") {
                          r = "extra whitespace";
                          break
                      }
                      try {
                          encodeURIComponent(e)
                      } catch (o) {
                          o = "invalid UTF8";
                          break
                      }
                      return e;
                  case p.BYTES:
                      if (e === null || e === "") return new Uint8Array(0);
                      if (typeof e != "string") break;
                      return cr(e)
              }
          } catch (c) {
              r = c.message
          }
          this.assert(!1, i + (r ? " - " + r : ""), e)
      }
  };
  var Pe = class {
      constructor(e) {
          var t;
          this.fields = (t = e.fields) !== null && t !== void 0 ? t : []
      }
      write(e, t) {
          let n = {},
              i = e;
          for (let r of this.fields) {
              if (!r.oneof) {
                  let s = this.field(r, i[r.localName], t);
                  s !== void 0 && (n[t.useProtoFieldName ? r.name : r.jsonName] = s);
                  continue
              }
              let c = i[r.oneof];
              if (c.oneofKind !== r.localName) continue;
              let a = r.kind == "scalar" || r.kind == "enum" ? Object.assign(Object.assign({}, t), {
                      emitDefaultValues: !0
                  }) : t,
                  o = this.field(r, c[r.localName], a);
              R(o !== void 0), n[t.useProtoFieldName ? r.name : r.jsonName] = o
          }
          return n
      }
      field(e, t, n) {
          let i;
          if (e.kind == "map") {
              R(typeof t == "object" && t !== null);
              let r = {};
              switch (e.V.kind) {
                  case "scalar":
                      for (let [o, s] of Object.entries(t)) {
                          let d = this.scalar(e.V.T, s, e.name, !1, !0);
                          R(d !== void 0), r[o.toString()] = d
                      }
                      break;
                  case "message":
                      let c = e.V.T();
                      for (let [o, s] of Object.entries(t)) {
                          let d = this.message(c, s, e.name, n);
                          R(d !== void 0), r[o.toString()] = d
                      }
                      break;
                  case "enum":
                      let a = e.V.T();
                      for (let [o, s] of Object.entries(t)) {
                          R(s === void 0 || typeof s == "number");
                          let d = this.enum(a, s, e.name, !1, !0, n.enumAsInteger);
                          R(d !== void 0), r[o.toString()] = d
                      }
                      break
              }(n.emitDefaultValues || Object.keys(r).length > 0) && (i = r)
          } else if (e.repeat) {
              R(Array.isArray(t));
              let r = [];
              switch (e.kind) {
                  case "scalar":
                      for (let o = 0; o < t.length; o++) {
                          let s = this.scalar(e.T, t[o], e.name, e.opt, !0);
                          R(s !== void 0), r.push(s)
                      }
                      break;
                  case "enum":
                      let c = e.T();
                      for (let o = 0; o < t.length; o++) {
                          R(t[o] === void 0 || typeof t[o] == "number");
                          let s = this.enum(c, t[o], e.name, e.opt, !0, n.enumAsInteger);
                          R(s !== void 0), r.push(s)
                      }
                      break;
                  case "message":
                      let a = e.T();
                      for (let o = 0; o < t.length; o++) {
                          let s = this.message(a, t[o], e.name, n);
                          R(s !== void 0), r.push(s)
                      }
                      break
              }(n.emitDefaultValues || r.length > 0 || n.emitDefaultValues) && (i = r)
          } else switch (e.kind) {
              case "scalar":
                  i = this.scalar(e.T, t, e.name, e.opt, n.emitDefaultValues);
                  break;
              case "enum":
                  i = this.enum(e.T(), t, e.name, e.opt, n.emitDefaultValues, n.enumAsInteger);
                  break;
              case "message":
                  i = this.message(e.T(), t, e.name, n);
                  break
          }
          return i
      }
      enum(e, t, n, i, r, c) {
          if (e[0] == "google.protobuf.NullValue") return !r && !i ? void 0 : null;
          if (t === void 0) {
              R(i);
              return
          }
          if (!(t === 0 && !r && !i)) return R(typeof t == "number"), R(Number.isInteger(t)), c || !e[1].hasOwnProperty(t) ? t : e[2] ? e[2] + e[1][t] : e[1][t]
      }
      message(e, t, n, i) {
          return t === void 0 ? i.emitDefaultValues ? null : void 0 : e.internalJsonWrite(t, i)
      }
      scalar(e, t, n, i, r) {
          if (t === void 0) {
              R(i);
              return
          }
          let c = r || i;
          switch (e) {
              case p.INT32:
              case p.SFIXED32:
              case p.SINT32:
                  return t === 0 ? c ? 0 : void 0 : (K(t), t);
              case p.FIXED32:
              case p.UINT32:
                  return t === 0 ? c ? 0 : void 0 : (X(t), t);
              case p.FLOAT:
                  z(t);
              case p.DOUBLE:
                  return t === 0 ? c ? 0 : void 0 : (R(typeof t == "number"), Number.isNaN(t) ? "NaN" : t === Number.POSITIVE_INFINITY ? "Infinity" : t === Number.NEGATIVE_INFINITY ? "-Infinity" : t);
              case p.STRING:
                  return t === "" ? c ? "" : void 0 : (R(typeof t == "string"), t);
              case p.BOOL:
                  return t === !1 ? c ? !1 : void 0 : (R(typeof t == "boolean"), t);
              case p.UINT64:
              case p.FIXED64:
                  R(typeof t == "number" || typeof t == "string" || typeof t == "bigint");
                  let a = O.from(t);
                  return a.isZero() && !c ? void 0 : a.toString();
              case p.INT64:
              case p.SFIXED64:
              case p.SINT64:
                  R(typeof t == "number" || typeof t == "string" || typeof t == "bigint");
                  let o = I.from(t);
                  return o.isZero() && !c ? void 0 : o.toString();
              case p.BYTES:
                  return R(t instanceof Uint8Array), t.byteLength ? dr(t) : c ? "" : void 0
          }
      }
  };

  function ue(l, e = E.STRING) {
      switch (l) {
          case p.BOOL:
              return !1;
          case p.UINT64:
          case p.FIXED64:
              return F(O.ZERO, e);
          case p.INT64:
          case p.SFIXED64:
          case p.SINT64:
              return F(I.ZERO, e);
          case p.DOUBLE:
          case p.FLOAT:
              return 0;
          case p.BYTES:
              return new Uint8Array(0);
          case p.STRING:
              return "";
          default:
              return 0
      }
  }
  var Ce = class {
      constructor(e) {
          this.info = e
      }
      prepare() {
          var e;
          if (!this.fieldNoToField) {
              let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
              this.fieldNoToField = new Map(t.map(n => [n.no, n]))
          }
      }
      read(e, t, n, i) {
          this.prepare();
          let r = i === void 0 ? e.len : e.pos + i;
          for (; e.pos < r;) {
              let [c, a] = e.tag(), o = this.fieldNoToField.get(c);
              if (!o) {
                  let b = n.readUnknownField;
                  if (b == "throw") throw new Error(`Unknown field ${c} (wire type ${a}) for ${this.info.typeName}`);
                  let m = e.skip(a);
                  b !== !1 && (b === !0 ? f.onRead : b)(this.info.typeName, t, c, a, m);
                  continue
              }
              let s = t,
                  d = o.repeat,
                  g = o.localName;
              switch (o.oneof && (s = s[o.oneof], s.oneofKind !== g && (s = t[o.oneof] = {
                      oneofKind: g
                  })), o.kind) {
                  case "scalar":
                  case "enum":
                      let b = o.kind == "enum" ? p.INT32 : o.T,
                          m = o.kind == "scalar" ? o.L : void 0;
                      if (d) {
                          let S = s[g];
                          if (a == u.LengthDelimited && b != p.STRING && b != p.BYTES) {
                              let k = e.uint32() + e.pos;
                              for (; e.pos < k;) S.push(this.scalar(e, b, m))
                          } else S.push(this.scalar(e, b, m))
                      } else s[g] = this.scalar(e, b, m);
                      break;
                  case "message":
                      if (d) {
                          let S = s[g],
                              k = o.T().internalBinaryRead(e, e.uint32(), n);
                          S.push(k)
                      } else s[g] = o.T().internalBinaryRead(e, e.uint32(), n, s[g]);
                      break;
                  case "map":
                      let [B, D] = this.mapEntry(o, e, n);
                      s[g][B] = D;
                      break
              }
          }
      }
      mapEntry(e, t, n) {
          let i = t.uint32(),
              r = t.pos + i,
              c, a;
          for (; t.pos < r;) {
              let [o, s] = t.tag();
              switch (o) {
                  case 1:
                      e.K == p.BOOL ? c = t.bool().toString() : c = this.scalar(t, e.K, E.STRING);
                      break;
                  case 2:
                      switch (e.V.kind) {
                          case "scalar":
                              a = this.scalar(t, e.V.T, e.V.L);
                              break;
                          case "enum":
                              a = t.int32();
                              break;
                          case "message":
                              a = e.V.T().internalBinaryRead(t, t.uint32(), n);
                              break
                      }
                      break;
                  default:
                      throw new Error(`Unknown field ${o} (wire type ${s}) in map entry for ${this.info.typeName}#${e.name}`)
              }
          }
          if (c === void 0) {
              let o = ue(e.K);
              c = e.K == p.BOOL ? o.toString() : o
          }
          if (a === void 0) switch (e.V.kind) {
              case "scalar":
                  a = ue(e.V.T, e.V.L);
                  break;
              case "enum":
                  a = 0;
                  break;
              case "message":
                  a = e.V.T().create();
                  break
          }
          return [c, a]
      }
      scalar(e, t, n) {
          switch (t) {
              case p.INT32:
                  return e.int32();
              case p.STRING:
                  return e.string();
              case p.BOOL:
                  return e.bool();
              case p.DOUBLE:
                  return e.double();
              case p.FLOAT:
                  return e.float();
              case p.INT64:
                  return F(e.int64(), n);
              case p.UINT64:
                  return F(e.uint64(), n);
              case p.FIXED64:
                  return F(e.fixed64(), n);
              case p.FIXED32:
                  return e.fixed32();
              case p.BYTES:
                  return e.bytes();
              case p.UINT32:
                  return e.uint32();
              case p.SFIXED32:
                  return e.sfixed32();
              case p.SFIXED64:
                  return F(e.sfixed64(), n);
              case p.SINT32:
                  return e.sint32();
              case p.SINT64:
                  return F(e.sint64(), n)
          }
      }
  };
  var Ue = class {
      constructor(e) {
          this.info = e
      }
      prepare() {
          if (!this.fields) {
              let e = this.info.fields ? this.info.fields.concat() : [];
              this.fields = e.sort((t, n) => t.no - n.no)
          }
      }
      write(e, t, n) {
          this.prepare();
          for (let r of this.fields) {
              let c, a, o = r.repeat,
                  s = r.localName;
              if (r.oneof) {
                  let d = e[r.oneof];
                  if (d.oneofKind !== s) continue;
                  c = d[s], a = !0
              } else c = e[s], a = !1;
              switch (r.kind) {
                  case "scalar":
                  case "enum":
                      let d = r.kind == "enum" ? p.INT32 : r.T;
                      if (o)
                          if (R(Array.isArray(c)), o == de.PACKED) this.packed(t, d, r.no, c);
                          else
                              for (let g of c) this.scalar(t, d, r.no, g, !0);
                      else c === void 0 ? R(r.opt) : this.scalar(t, d, r.no, c, a || r.opt);
                      break;
                  case "message":
                      if (o) {
                          R(Array.isArray(c));
                          for (let g of c) this.message(t, n, r.T(), r.no, g)
                      } else this.message(t, n, r.T(), r.no, c);
                      break;
                  case "map":
                      R(typeof c == "object" && c !== null);
                      for (let [g, b] of Object.entries(c)) this.mapEntry(t, n, r, g, b);
                      break
              }
          }
          let i = n.writeUnknownFields;
          i !== !1 && (i === !0 ? f.onWrite : i)(this.info.typeName, e, t)
      }
      mapEntry(e, t, n, i, r) {
          e.tag(n.no, u.LengthDelimited), e.fork();
          let c = i;
          switch (n.K) {
              case p.INT32:
              case p.FIXED32:
              case p.UINT32:
              case p.SFIXED32:
              case p.SINT32:
                  c = Number.parseInt(i);
                  break;
              case p.BOOL:
                  R(i == "true" || i == "false"), c = i == "true";
                  break
          }
          switch (this.scalar(e, n.K, 1, c, !0), n.V.kind) {
              case "scalar":
                  this.scalar(e, n.V.T, 2, r, !0);
                  break;
              case "enum":
                  this.scalar(e, p.INT32, 2, r, !0);
                  break;
              case "message":
                  this.message(e, t, n.V.T(), 2, r);
                  break
          }
          e.join()
      }
      message(e, t, n, i, r) {
          r !== void 0 && (n.internalBinaryWrite(r, e.tag(i, u.LengthDelimited).fork(), t), e.join())
      }
      scalar(e, t, n, i, r) {
          let [c, a, o] = this.scalarInfo(t, i);
          (!o || r) && (e.tag(n, c), e[a](i))
      }
      packed(e, t, n, i) {
          if (!i.length) return;
          R(t !== p.BYTES && t !== p.STRING), e.tag(n, u.LengthDelimited), e.fork();
          let [, r] = this.scalarInfo(t);
          for (let c = 0; c < i.length; c++) e[r](i[c]);
          e.join()
      }
      scalarInfo(e, t) {
          let n = u.Varint,
              i, r = t === void 0,
              c = t === 0;
          switch (e) {
              case p.INT32:
                  i = "int32";
                  break;
              case p.STRING:
                  c = r || !t.length, n = u.LengthDelimited, i = "string";
                  break;
              case p.BOOL:
                  c = t === !1, i = "bool";
                  break;
              case p.UINT32:
                  i = "uint32";
                  break;
              case p.DOUBLE:
                  n = u.Bit64, i = "double";
                  break;
              case p.FLOAT:
                  n = u.Bit32, i = "float";
                  break;
              case p.INT64:
                  c = r || I.from(t).isZero(), i = "int64";
                  break;
              case p.UINT64:
                  c = r || O.from(t).isZero(), i = "uint64";
                  break;
              case p.FIXED64:
                  c = r || O.from(t).isZero(), n = u.Bit64, i = "fixed64";
                  break;
              case p.BYTES:
                  c = r || !t.byteLength, n = u.LengthDelimited, i = "bytes";
                  break;
              case p.FIXED32:
                  n = u.Bit32, i = "fixed32";
                  break;
              case p.SFIXED32:
                  n = u.Bit32, i = "sfixed32";
                  break;
              case p.SFIXED64:
                  c = r || I.from(t).isZero(), n = u.Bit64, i = "sfixed64";
                  break;
              case p.SINT32:
                  i = "sint32";
                  break;
              case p.SINT64:
                  c = r || I.from(t).isZero(), i = "sint64";
                  break
          }
          return [n, i, r || c]
      }
  };

  function Nr(l) {
      let e = l.messagePrototype ? Object.create(l.messagePrototype) : Object.defineProperty({}, Se, {
          value: l
      });
      for (let t of l.fields) {
          let n = t.localName;
          if (!t.opt)
              if (t.oneof) e[t.oneof] = {
                  oneofKind: void 0
              };
              else if (t.repeat) e[n] = [];
          else switch (t.kind) {
              case "scalar":
                  e[n] = ue(t.T, t.L);
                  break;
              case "enum":
                  e[n] = 0;
                  break;
              case "map":
                  e[n] = {};
                  break
          }
      }
      return e
  }

  function h(l, e, t) {
      let n, i = t,
          r;
      for (let c of l.fields) {
          let a = c.localName;
          if (c.oneof) {
              let o = i[c.oneof];
              if (o?.oneofKind == null) continue;
              if (n = o[a], r = e[c.oneof], r.oneofKind = o.oneofKind, n == null) {
                  delete r[a];
                  continue
              }
          } else if (n = i[a], r = e, n == null) continue;
          switch (c.repeat && (r[a].length = n.length), c.kind) {
              case "scalar":
              case "enum":
                  if (c.repeat)
                      for (let s = 0; s < n.length; s++) r[a][s] = n[s];
                  else r[a] = n;
                  break;
              case "message":
                  let o = c.T();
                  if (c.repeat)
                      for (let s = 0; s < n.length; s++) r[a][s] = o.create(n[s]);
                  else r[a] === void 0 ? r[a] = o.create(n) : o.mergePartial(r[a], n);
                  break;
              case "map":
                  switch (c.V.kind) {
                      case "scalar":
                      case "enum":
                          Object.assign(r[a], n);
                          break;
                      case "message":
                          let s = c.V.T();
                          for (let d of Object.keys(n)) r[a][d] = s.create(n[d]);
                          break
                  }
                  break
          }
      }
  }

  function xr(l, e, t) {
      if (e === t) return !0;
      if (!e || !t) return !1;
      for (let n of l.fields) {
          let i = n.localName,
              r = n.oneof ? e[n.oneof][i] : e[i],
              c = n.oneof ? t[n.oneof][i] : t[i];
          switch (n.kind) {
              case "enum":
              case "scalar":
                  let a = n.kind == "enum" ? p.INT32 : n.T;
                  if (!(n.repeat ? Wr(a, r, c) : Or(a, r, c))) return !1;
                  break;
              case "map":
                  if (!(n.V.kind == "message" ? Sr(n.V.T(), Ee(r), Ee(c)) : Wr(n.V.kind == "enum" ? p.INT32 : n.V.T, Ee(r), Ee(c)))) return !1;
                  break;
              case "message":
                  let o = n.T();
                  if (!(n.repeat ? Sr(o, r, c) : o.equals(r, c))) return !1;
                  break
          }
      }
      return !0
  }
  var Ee = Object.values;

  function Or(l, e, t) {
      if (e === t) return !0;
      if (l !== p.BYTES) return !1;
      let n = e,
          i = t;
      if (n.length !== i.length) return !1;
      for (let r = 0; r < n.length; r++)
          if (n[r] != i[r]) return !1;
      return !0
  }

  function Wr(l, e, t) {
      if (e.length !== t.length) return !1;
      for (let n = 0; n < e.length; n++)
          if (!Or(l, e[n], t[n])) return !1;
      return !0
  }

  function Sr(l, e, t) {
      if (e.length !== t.length) return !1;
      for (let n = 0; n < e.length; n++)
          if (!l.equals(e[n], t[n])) return !1;
      return !0
  }
  var _r = Object.getOwnPropertyDescriptors(Object.getPrototypeOf({})),
      y = class {
          constructor(e, t, n) {
              this.defaultCheckDepth = 16, this.typeName = e, this.fields = t.map(Ir), this.options = n ?? {}, this.messagePrototype = Object.create(null, Object.assign(Object.assign({}, _r), {
                  [Se]: {
                      value: this
                  }
              })), this.refTypeCheck = new xe(this), this.refJsonReader = new Oe(this), this.refJsonWriter = new Pe(this), this.refBinReader = new Ce(this), this.refBinWriter = new Ue(this)
          }
          create(e) {
              let t = Nr(this);
              return e !== void 0 && h(this, t, e), t
          }
          clone(e) {
              let t = this.create();
              return h(this, t, e), t
          }
          equals(e, t) {
              return xr(this, e, t)
          }
          is(e, t = this.defaultCheckDepth) {
              return this.refTypeCheck.is(e, t, !1)
          }
          isAssignable(e, t = this.defaultCheckDepth) {
              return this.refTypeCheck.is(e, t, !0)
          }
          mergePartial(e, t) {
              h(this, e, t)
          }
          fromBinary(e, t) {
              let n = mr(t);
              return this.internalBinaryRead(n.readerFactory(e), e.byteLength, n)
          }
          fromJson(e, t) {
              return this.internalJsonRead(e, wr(t))
          }
          fromJsonString(e, t) {
              let n = JSON.parse(e);
              return this.fromJson(n, t)
          }
          toJson(e, t) {
              return this.internalJsonWrite(e, Br(t))
          }
          toJsonString(e, t) {
              var n;
              let i = this.toJson(e, t);
              return JSON.stringify(i, null, (n = t?.prettySpaces) !== null && n !== void 0 ? n : 0)
          }
          toBinary(e, t) {
              let n = br(t);
              return this.internalBinaryWrite(e, n.writerFactory(), n).finish()
          }
          internalJsonRead(e, t, n) {
              if (e !== null && typeof e == "object" && !Array.isArray(e)) {
                  let i = n ?? this.create();
                  return this.refJsonReader.read(e, i, t), i
              }
              throw new Error(`Unable to parse message ${this.typeName} from JSON ${ke(e)}.`)
          }
          internalJsonWrite(e, t) {
              return this.refJsonWriter.write(e, t)
          }
          internalBinaryWrite(e, t, n) {
              return this.refBinWriter.write(e, t, n), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create();
              return this.refBinReader.read(e, r, n, t), r
          }
      };
  var Xe = class extends y {
          constructor() {
              super("youtube.component.Label", [{
                  no: 1,
                  name: "runs",
                  kind: "message",
                  repeat: 1,
                  T: () => Y
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.runs = [], e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.runs.push(Y.internalBinaryRead(e, e.uint32(), n));
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              for (let r = 0; r < e.runs.length; r++) Y.internalBinaryWrite(e.runs[r], t.tag(1, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      W = new Xe,
      Ye = class extends y {
          constructor() {
              super("youtube.component.Run", [{
                  no: 1,
                  name: "text",
                  kind: "scalar",
                  T: 9
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.text = "", e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.text = e.string();
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.text !== "" && t.tag(1, u.LengthDelimited).string(e.text);
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Y = new Ye;
  var ze = class extends y {
          constructor() {
              super("youtube.component.ResponseContext", [{
                  no: 6,
                  name: "serviceTrackingParams",
                  kind: "message",
                  repeat: 1,
                  T: () => qe
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.serviceTrackingParams = [], e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 6:
                          r.serviceTrackingParams.push(qe.internalBinaryRead(e, e.uint32(), n));
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              for (let r = 0; r < e.serviceTrackingParams.length; r++) qe.internalBinaryWrite(e.serviceTrackingParams[r], t.tag(6, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Le = new ze,
      He = class extends y {
          constructor() {
              super("youtube.component.ServiceTrackingParam", [{
                  no: 1,
                  name: "service",
                  kind: "scalar",
                  T: 5
              }, {
                  no: 2,
                  name: "params",
                  kind: "message",
                  repeat: 1,
                  T: () => Ze
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.service = 0, t.params = [], e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.service = e.int32();
                          break;
                      case 2:
                          r.params.push(Ze.internalBinaryRead(e, e.uint32(), n));
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.service !== 0 && t.tag(1, u.Varint).int32(e.service);
              for (let r = 0; r < e.params.length; r++) Ze.internalBinaryWrite(e.params[r], t.tag(2, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      qe = new He,
      Qe = class extends y {
          constructor() {
              super("youtube.component.Param", [{
                  no: 1,
                  name: "key",
                  kind: "scalar",
                  T: 9
              }, {
                  no: 2,
                  name: "value",
                  kind: "scalar",
                  T: 9
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.key = "", t.value = "", e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.key = e.string();
                          break;
                      case 2:
                          r.value = e.string();
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.key !== "" && t.tag(1, u.LengthDelimited).string(e.key), e.value !== "" && t.tag(2, u.LengthDelimited).string(e.value);
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Ze = new Qe;
  var mt = class extends y {
          constructor() {
              super("youtube.response.browse.Browse", [{
                  no: 1,
                  name: "responseContext",
                  kind: "message",
                  T: () => Le
              }, {
                  no: 9,
                  name: "content",
                  kind: "message",
                  T: () => U
              }, {
                  no: 10,
                  name: "onResponseReceivedAction",
                  kind: "message",
                  T: () => U
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.responseContext = Le.internalBinaryRead(e, e.uint32(), n, r.responseContext);
                          break;
                      case 9:
                          r.content = U.internalBinaryRead(e, e.uint32(), n, r.content);
                          break;
                      case 10:
                          r.onResponseReceivedAction = U.internalBinaryRead(e, e.uint32(), n, r.onResponseReceivedAction);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.responseContext && Le.internalBinaryWrite(e.responseContext, t.tag(1, u.LengthDelimited).fork(), n).join(), e.content && U.internalBinaryWrite(e.content, t.tag(9, u.LengthDelimited).fork(), n).join(), e.onResponseReceivedAction && U.internalBinaryWrite(e.onResponseReceivedAction, t.tag(10, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Pr = new mt,
      gt = class extends y {
          constructor() {
              super("youtube.response.browse.Content", [{
                  no: 58173949,
                  name: "singleColumnResultsRenderer",
                  kind: "message",
                  T: () => et
              }, {
                  no: 153515154,
                  name: "elementRenderer",
                  kind: "message",
                  T: () => Q
              }, {
                  no: 49399797,
                  name: "sectionListRenderer",
                  kind: "message",
                  T: () => q
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 58173949:
                          r.singleColumnResultsRenderer = et.internalBinaryRead(e, e.uint32(), n, r.singleColumnResultsRenderer);
                          break;
                      case 153515154:
                          r.elementRenderer = Q.internalBinaryRead(e, e.uint32(), n, r.elementRenderer);
                          break;
                      case 49399797:
                          r.sectionListRenderer = q.internalBinaryRead(e, e.uint32(), n, r.sectionListRenderer);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.singleColumnResultsRenderer && et.internalBinaryWrite(e.singleColumnResultsRenderer, t.tag(58173949, u.LengthDelimited).fork(), n).join(), e.elementRenderer && Q.internalBinaryWrite(e.elementRenderer, t.tag(153515154, u.LengthDelimited).fork(), n).join(), e.sectionListRenderer && q.internalBinaryWrite(e.sectionListRenderer, t.tag(49399797, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      U = new gt,
      bt = class extends y {
          constructor() {
              super("youtube.response.browse.SingleColumnResultsRenderer", [{
                  no: 1,
                  name: "tabs",
                  kind: "message",
                  repeat: 1,
                  T: () => tt
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.tabs = [], e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.tabs.push(tt.internalBinaryRead(e, e.uint32(), n));
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              for (let r = 0; r < e.tabs.length; r++) tt.internalBinaryWrite(e.tabs[r], t.tag(1, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      et = new bt,
      kt = class extends y {
          constructor() {
              super("youtube.response.browse.BrowseTabSupportedRenderer", [{
                  no: 58174010,
                  name: "tabRenderer",
                  kind: "message",
                  T: () => nt
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 58174010:
                          r.tabRenderer = nt.internalBinaryRead(e, e.uint32(), n, r.tabRenderer);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.tabRenderer && nt.internalBinaryWrite(e.tabRenderer, t.tag(58174010, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      tt = new kt,
      Rt = class extends y {
          constructor() {
              super("youtube.response.browse.TabRenderer", [{
                  no: 4,
                  name: "content",
                  kind: "message",
                  T: () => U
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 4:
                          r.content = U.internalBinaryRead(e, e.uint32(), n, r.content);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.content && U.internalBinaryWrite(e.content, t.tag(4, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      nt = new Rt,
      wt = class extends y {
          constructor() {
              super("youtube.response.browse.SectionListRenderer", [{
                  no: 1,
                  name: "sectionListSupportedRenderers",
                  kind: "message",
                  repeat: 1,
                  T: () => rt
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.sectionListSupportedRenderers = [], e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.sectionListSupportedRenderers.push(rt.internalBinaryRead(e, e.uint32(), n));
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              for (let r = 0; r < e.sectionListSupportedRenderers.length; r++) rt.internalBinaryWrite(e.sectionListSupportedRenderers[r], t.tag(1, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      q = new wt,
      Bt = class extends y {
          constructor() {
              super("youtube.response.browse.SectionListSupportedRenderer", [{
                  no: 50195462,
                  name: "itemSectionRenderer",
                  kind: "message",
                  T: () => Z
              }, {
                  no: 51845067,
                  name: "shelfRenderer",
                  kind: "message",
                  T: () => ft
              }, {
                  no: 221496734,
                  name: "musicDescriptionShelfRenderer",
                  kind: "message",
                  T: () => yt
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 50195462:
                          r.itemSectionRenderer = Z.internalBinaryRead(e, e.uint32(), n, r.itemSectionRenderer);
                          break;
                      case 51845067:
                          r.shelfRenderer = ft.internalBinaryRead(e, e.uint32(), n, r.shelfRenderer);
                          break;
                      case 221496734:
                          r.musicDescriptionShelfRenderer = yt.internalBinaryRead(e, e.uint32(), n, r.musicDescriptionShelfRenderer);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.itemSectionRenderer && Z.internalBinaryWrite(e.itemSectionRenderer, t.tag(50195462, u.LengthDelimited).fork(), n).join(), e.shelfRenderer && ft.internalBinaryWrite(e.shelfRenderer, t.tag(51845067, u.LengthDelimited).fork(), n).join(), e.musicDescriptionShelfRenderer && yt.internalBinaryWrite(e.musicDescriptionShelfRenderer, t.tag(221496734, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      rt = new Bt,
      It = class extends y {
          constructor() {
              super("youtube.response.browse.ItemSectionRenderer", [{
                  no: 1,
                  name: "richItemContents",
                  kind: "message",
                  repeat: 1,
                  T: () => H
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.richItemContents = [], e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.richItemContents.push(H.internalBinaryRead(e, e.uint32(), n));
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              for (let r = 0; r < e.richItemContents.length; r++) H.internalBinaryWrite(e.richItemContents[r], t.tag(1, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Z = new It,
      Tt = class extends y {
          constructor() {
              super("youtube.response.browse.RichItemContent", [{
                  no: 153515154,
                  name: "videoWithContextRenderer",
                  kind: "message",
                  T: () => Q
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 153515154:
                          r.videoWithContextRenderer = Q.internalBinaryRead(e, e.uint32(), n, r.videoWithContextRenderer);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.videoWithContextRenderer && Q.internalBinaryWrite(e.videoWithContextRenderer, t.tag(153515154, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      H = new Tt,
      Nt = class extends y {
          constructor() {
              super("youtube.response.browse.ElementRenderer", [{
                  no: 172660663,
                  name: "videoRendererContent",
                  kind: "message",
                  T: () => it
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 172660663:
                          r.videoRendererContent = it.internalBinaryRead(e, e.uint32(), n, r.videoRendererContent);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.videoRendererContent && it.internalBinaryWrite(e.videoRendererContent, t.tag(172660663, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Q = new Nt,
      Wt = class extends y {
          constructor() {
              super("youtube.response.browse.VideoRendererContent", [{
                  no: 1,
                  name: "videoInfo",
                  kind: "message",
                  T: () => at
              }, {
                  no: 2,
                  name: "renderInfo",
                  kind: "message",
                  T: () => dt
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.videoInfo = at.internalBinaryRead(e, e.uint32(), n, r.videoInfo);
                          break;
                      case 2:
                          r.renderInfo = dt.internalBinaryRead(e, e.uint32(), n, r.renderInfo);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.videoInfo && at.internalBinaryWrite(e.videoInfo, t.tag(1, u.LengthDelimited).fork(), n).join(), e.renderInfo && dt.internalBinaryWrite(e.renderInfo, t.tag(2, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      it = new Wt,
      St = class extends y {
          constructor() {
              super("youtube.response.browse.VideoInfo", [{
                  no: 168777401,
                  name: "videoContext",
                  kind: "message",
                  T: () => st
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 168777401:
                          r.videoContext = st.internalBinaryRead(e, e.uint32(), n, r.videoContext);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.videoContext && st.internalBinaryWrite(e.videoContext, t.tag(168777401, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      at = new St,
      xt = class extends y {
          constructor() {
              super("youtube.response.browse.VideoContext", [{
                  no: 5,
                  name: "videoContent",
                  kind: "message",
                  T: () => ot
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 5:
                          r.videoContent = ot.internalBinaryRead(e, e.uint32(), n, r.videoContent);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.videoContent && ot.internalBinaryWrite(e.videoContent, t.tag(5, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      st = new xt,
      Ot = class extends y {
          constructor() {
              super("youtube.response.browse.VideoContent", [{
                  no: 465160965,
                  name: "timedLyricsRender",
                  kind: "message",
                  T: () => lt
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 465160965:
                          r.timedLyricsRender = lt.internalBinaryRead(e, e.uint32(), n, r.timedLyricsRender);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.timedLyricsRender && lt.internalBinaryWrite(e.timedLyricsRender, t.tag(465160965, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      ot = new Ot,
      Pt = class extends y {
          constructor() {
              super("youtube.response.browse.TimedLyricsRender", [{
                  no: 4,
                  name: "timedLyricsContent",
                  kind: "message",
                  T: () => ct
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 4:
                          r.timedLyricsContent = ct.internalBinaryRead(e, e.uint32(), n, r.timedLyricsContent);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.timedLyricsContent && ct.internalBinaryWrite(e.timedLyricsContent, t.tag(4, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      lt = new Pt,
      Ct = class extends y {
          constructor() {
              super("youtube.response.browse.TimedLyricsContent", [{
                  no: 1,
                  name: "runs",
                  kind: "message",
                  repeat: 1,
                  T: () => Y
              }, {
                  no: 2,
                  name: "footerLabel",
                  kind: "scalar",
                  T: 9
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.runs = [], t.footerLabel = "", e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.runs.push(Y.internalBinaryRead(e, e.uint32(), n));
                          break;
                      case 2:
                          r.footerLabel = e.string();
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              for (let r = 0; r < e.runs.length; r++) Y.internalBinaryWrite(e.runs[r], t.tag(1, u.LengthDelimited).fork(), n).join();
              e.footerLabel !== "" && t.tag(2, u.LengthDelimited).string(e.footerLabel);
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      ct = new Ct,
      Ut = class extends y {
          constructor() {
              super("youtube.response.browse.RenderInfo", [{
                  no: 183314536,
                  name: "layoutRender",
                  kind: "message",
                  T: () => ut
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 183314536:
                          r.layoutRender = ut.internalBinaryRead(e, e.uint32(), n, r.layoutRender);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.layoutRender && ut.internalBinaryWrite(e.layoutRender, t.tag(183314536, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      dt = new Ut,
      Et = class extends y {
          constructor() {
              super("youtube.response.browse.LayoutRender", [{
                  no: 1,
                  name: "eml",
                  kind: "scalar",
                  T: 9
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.eml = "", e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.eml = e.string();
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.eml !== "" && t.tag(1, u.LengthDelimited).string(e.eml);
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      ut = new Et,
      Lt = class extends y {
          constructor() {
              super("youtube.response.browse.ShelfRenderer", [{
                  no: 5,
                  name: "richSectionContent",
                  kind: "message",
                  T: () => pt
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 5:
                          r.richSectionContent = pt.internalBinaryRead(e, e.uint32(), n, r.richSectionContent);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.richSectionContent && pt.internalBinaryWrite(e.richSectionContent, t.tag(5, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      ft = new Lt,
      Ft = class extends y {
          constructor() {
              super("youtube.response.browse.RichSectionContent", [{
                  no: 51431404,
                  name: "reelShelfRenderer",
                  kind: "message",
                  T: () => ht
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 51431404:
                          r.reelShelfRenderer = ht.internalBinaryRead(e, e.uint32(), n, r.reelShelfRenderer);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.reelShelfRenderer && ht.internalBinaryWrite(e.reelShelfRenderer, t.tag(51431404, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      pt = new Ft,
      Dt = class extends y {
          constructor() {
              super("youtube.response.browse.ReelShelfRenderer", [{
                  no: 1,
                  name: "richItemContents",
                  kind: "message",
                  repeat: 1,
                  T: () => H
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.richItemContents = [], e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.richItemContents.push(H.internalBinaryRead(e, e.uint32(), n));
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              for (let r = 0; r < e.richItemContents.length; r++) H.internalBinaryWrite(e.richItemContents[r], t.tag(1, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      ht = new Dt,
      $t = class extends y {
          constructor() {
              super("youtube.response.browse.MusicDescriptionShelfRenderer", [{
                  no: 3,
                  name: "description",
                  kind: "message",
                  T: () => W
              }, {
                  no: 10,
                  name: "footer",
                  kind: "message",
                  T: () => W
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 3:
                          r.description = W.internalBinaryRead(e, e.uint32(), n, r.description);
                          break;
                      case 10:
                          r.footer = W.internalBinaryRead(e, e.uint32(), n, r.footer);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.description && W.internalBinaryWrite(e.description, t.tag(3, u.LengthDelimited).fork(), n).join(), e.footer && W.internalBinaryWrite(e.footer, t.tag(10, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      yt = new $t;
  var Mt = class extends y {
          constructor() {
              super("youtube.response.next.Next", [{
                  no: 7,
                  name: "content",
                  kind: "message",
                  T: () => At
              }, {
                  no: 8,
                  name: "onResponseReceivedAction",
                  kind: "message",
                  T: () => U
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 7:
                          r.content = At.internalBinaryRead(e, e.uint32(), n, r.content);
                          break;
                      case 8:
                          r.onResponseReceivedAction = U.internalBinaryRead(e, e.uint32(), n, r.onResponseReceivedAction);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.content && At.internalBinaryWrite(e.content, t.tag(7, u.LengthDelimited).fork(), n).join(), e.onResponseReceivedAction && U.internalBinaryWrite(e.onResponseReceivedAction, t.tag(8, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      ee = new Mt,
      Vt = class extends y {
          constructor() {
              super("youtube.response.next.Content", [{
                  no: 51779735,
                  name: "nextResult",
                  kind: "message",
                  T: () => jt
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 51779735:
                          r.nextResult = jt.internalBinaryRead(e, e.uint32(), n, r.nextResult);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.nextResult && jt.internalBinaryWrite(e.nextResult, t.tag(51779735, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      At = new Vt,
      vt = class extends y {
          constructor() {
              super("youtube.response.next.NextResult", [{
                  no: 1,
                  name: "content",
                  kind: "message",
                  T: () => U
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.content = U.internalBinaryRead(e, e.uint32(), n, r.content);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.content && U.internalBinaryWrite(e.content, t.tag(1, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      jt = new vt;
  var Kt = class extends y {
          constructor() {
              super("youtube.response.search.Search", [{
                  no: 4,
                  name: "content",
                  kind: "message",
                  T: () => U
              }, {
                  no: 7,
                  name: "onResponseReceivedCommand",
                  kind: "message",
                  T: () => Gt
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 4:
                          r.content = U.internalBinaryRead(e, e.uint32(), n, r.content);
                          break;
                      case 7:
                          r.onResponseReceivedCommand = Gt.internalBinaryRead(e, e.uint32(), n, r.onResponseReceivedCommand);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.content && U.internalBinaryWrite(e.content, t.tag(4, u.LengthDelimited).fork(), n).join(), e.onResponseReceivedCommand && Gt.internalBinaryWrite(e.onResponseReceivedCommand, t.tag(7, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Cr = new Kt,
      Jt = class extends y {
          constructor() {
              super("youtube.response.search.OnResponseReceivedCommand", [{
                  no: 50195462,
                  name: "itemSectionRenderer",
                  kind: "message",
                  T: () => Z
              }, {
                  no: 49399797,
                  name: "appendContinuationItemsAction",
                  kind: "message",
                  T: () => q
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 50195462:
                          r.itemSectionRenderer = Z.internalBinaryRead(e, e.uint32(), n, r.itemSectionRenderer);
                          break;
                      case 49399797:
                          r.appendContinuationItemsAction = q.internalBinaryRead(e, e.uint32(), n, r.appendContinuationItemsAction);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.itemSectionRenderer && Z.internalBinaryWrite(e.itemSectionRenderer, t.tag(50195462, u.LengthDelimited).fork(), n).join(), e.appendContinuationItemsAction && q.internalBinaryWrite(e.appendContinuationItemsAction, t.tag(49399797, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Gt = new Jt;
  var zt = class extends y {
          constructor() {
              super("youtube.response.shorts.Shorts", [{
                  no: 2,
                  name: "entries",
                  kind: "message",
                  repeat: 1,
                  T: () => _t
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.entries = [], e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 2:
                          r.entries.push(_t.internalBinaryRead(e, e.uint32(), n));
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              for (let r = 0; r < e.entries.length; r++) _t.internalBinaryWrite(e.entries[r], t.tag(2, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Ur = new zt,
      Ht = class extends y {
          constructor() {
              super("youtube.response.shorts.Entry", [{
                  no: 1,
                  name: "command",
                  kind: "message",
                  T: () => Xt
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.command = Xt.internalBinaryRead(e, e.uint32(), n, r.command);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.command && Xt.internalBinaryWrite(e.command, t.tag(1, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      _t = new Ht,
      Qt = class extends y {
          constructor() {
              super("youtube.response.shorts.Command", [{
                  no: 139608561,
                  name: "reelWatchEndpoint",
                  kind: "message",
                  T: () => Yt
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 139608561:
                          r.reelWatchEndpoint = Yt.internalBinaryRead(e, e.uint32(), n, r.reelWatchEndpoint);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.reelWatchEndpoint && Yt.internalBinaryWrite(e.reelWatchEndpoint, t.tag(139608561, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Xt = new Qt,
      en = class extends y {
          constructor() {
              super("youtube.response.shorts.ReelWatchEndpoint", [{
                  no: 8,
                  name: "overlay",
                  kind: "message",
                  T: () => qt
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 8:
                          r.overlay = qt.internalBinaryRead(e, e.uint32(), n, r.overlay);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.overlay && qt.internalBinaryWrite(e.overlay, t.tag(8, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Yt = new en,
      tn = class extends y {
          constructor() {
              super("youtube.response.shorts.Overlay", [{
                  no: 139970731,
                  name: "reelPlayerOverlayRenderer",
                  kind: "message",
                  T: () => Zt
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 139970731:
                          r.reelPlayerOverlayRenderer = Zt.internalBinaryRead(e, e.uint32(), n, r.reelPlayerOverlayRenderer);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.reelPlayerOverlayRenderer && Zt.internalBinaryWrite(e.reelPlayerOverlayRenderer, t.tag(139970731, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      qt = new tn,
      nn = class extends y {
          constructor() {
              super("youtube.response.shorts.ReelPlayerOverlayRenderer", [{
                  no: 12,
                  name: "style",
                  kind: "scalar",
                  T: 5
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.style = 0, e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 12:
                          r.style = e.int32();
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.style !== 0 && t.tag(12, u.Varint).int32(e.style);
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Zt = new nn;
  var sn = class extends y {
          constructor() {
              super("youtube.response.guide.Guide", [{
                  no: 4,
                  name: "labelItems",
                  kind: "message",
                  repeat: 1,
                  T: () => te
              }, {
                  no: 6,
                  name: "iconItems",
                  kind: "message",
                  repeat: 1,
                  T: () => te
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.labelItems = [], t.iconItems = [], e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 4:
                          r.labelItems.push(te.internalBinaryRead(e, e.uint32(), n));
                          break;
                      case 6:
                          r.iconItems.push(te.internalBinaryRead(e, e.uint32(), n));
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              for (let r = 0; r < e.labelItems.length; r++) te.internalBinaryWrite(e.labelItems[r], t.tag(4, u.LengthDelimited).fork(), n).join();
              for (let r = 0; r < e.iconItems.length; r++) te.internalBinaryWrite(e.iconItems[r], t.tag(6, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Er = new sn,
      on = class extends y {
          constructor() {
              super("youtube.response.guide.Item", [{
                  no: 117866661,
                  name: "guideSectionRenderer",
                  kind: "message",
                  T: () => rn
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 117866661:
                          r.guideSectionRenderer = rn.internalBinaryRead(e, e.uint32(), n, r.guideSectionRenderer);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.guideSectionRenderer && rn.internalBinaryWrite(e.guideSectionRenderer, t.tag(117866661, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      te = new on,
      ln = class extends y {
          constructor() {
              super("youtube.response.guide.GuideSectionRenderer", [{
                  no: 1,
                  name: "rendererItems",
                  kind: "message",
                  repeat: 1,
                  T: () => an
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.rendererItems = [], e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.rendererItems.push(an.internalBinaryRead(e, e.uint32(), n));
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              for (let r = 0; r < e.rendererItems.length; r++) an.internalBinaryWrite(e.rendererItems[r], t.tag(1, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      rn = new ln,
      cn = class extends y {
          constructor() {
              super("youtube.response.guide.RendererItem", [{
                  no: 318370163,
                  name: "iconRender",
                  kind: "message",
                  T: () => ne
              }, {
                  no: 117501096,
                  name: "labelRender",
                  kind: "message",
                  T: () => ne
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 318370163:
                          r.iconRender = ne.internalBinaryRead(e, e.uint32(), n, r.iconRender);
                          break;
                      case 117501096:
                          r.labelRender = ne.internalBinaryRead(e, e.uint32(), n, r.labelRender);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.iconRender && ne.internalBinaryWrite(e.iconRender, t.tag(318370163, u.LengthDelimited).fork(), n).join(), e.labelRender && ne.internalBinaryWrite(e.labelRender, t.tag(117501096, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      an = new cn,
      dn = class extends y {
          constructor() {
              super("youtube.response.guide.guideEntryRenderer", [{
                  no: 1,
                  name: "browseId",
                  kind: "scalar",
                  T: 9
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.browseId = "", e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.browseId = e.string();
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.browseId !== "" && t.tag(1, u.LengthDelimited).string(e.browseId);
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      ne = new dn;
  var In = class extends y {
          constructor() {
              super("youtube.response.player.Player", [{
                  no: 7,
                  name: "adPlacements",
                  kind: "message",
                  repeat: 1,
                  T: () => un
              }, {
                  no: 2,
                  name: "playabilityStatus",
                  kind: "message",
                  T: () => pn
              }, {
                  no: 9,
                  name: "playbackTracking",
                  kind: "message",
                  T: () => gn
              }, {
                  no: 10,
                  name: "captions",
                  kind: "message",
                  T: () => bn
              }, {
                  no: 68,
                  name: "adSlots",
                  kind: "message",
                  repeat: 1,
                  T: () => wn
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.adPlacements = [], t.adSlots = [], e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 7:
                          r.adPlacements.push(un.internalBinaryRead(e, e.uint32(), n));
                          break;
                      case 2:
                          r.playabilityStatus = pn.internalBinaryRead(e, e.uint32(), n, r.playabilityStatus);
                          break;
                      case 9:
                          r.playbackTracking = gn.internalBinaryRead(e, e.uint32(), n, r.playbackTracking);
                          break;
                      case 10:
                          r.captions = bn.internalBinaryRead(e, e.uint32(), n, r.captions);
                          break;
                      case 68:
                          r.adSlots.push(wn.internalBinaryRead(e, e.uint32(), n));
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              for (let r = 0; r < e.adPlacements.length; r++) un.internalBinaryWrite(e.adPlacements[r], t.tag(7, u.LengthDelimited).fork(), n).join();
              e.playabilityStatus && pn.internalBinaryWrite(e.playabilityStatus, t.tag(2, u.LengthDelimited).fork(), n).join(), e.playbackTracking && gn.internalBinaryWrite(e.playbackTracking, t.tag(9, u.LengthDelimited).fork(), n).join(), e.captions && bn.internalBinaryWrite(e.captions, t.tag(10, u.LengthDelimited).fork(), n).join();
              for (let r = 0; r < e.adSlots.length; r++) wn.internalBinaryWrite(e.adSlots[r], t.tag(68, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      re = new In,
      Tn = class extends y {
          constructor() {
              super("youtube.response.player.AdPlacement", [{
                  no: 84813246,
                  name: "adPlacementRenderer",
                  kind: "message",
                  T: () => fn
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 84813246:
                          r.adPlacementRenderer = fn.internalBinaryRead(e, e.uint32(), n, r.adPlacementRenderer);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.adPlacementRenderer && fn.internalBinaryWrite(e.adPlacementRenderer, t.tag(84813246, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      un = new Tn,
      Nn = class extends y {
          constructor() {
              super("youtube.response.player.AdPlacementRenderer", [{
                  no: 4,
                  name: "params",
                  kind: "scalar",
                  T: 9
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.params = "", e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 4:
                          r.params = e.string();
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.params !== "" && t.tag(4, u.LengthDelimited).string(e.params);
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      fn = new Nn,
      Wn = class extends y {
          constructor() {
              super("youtube.response.player.PlayabilityStatus", [{
                  no: 21,
                  name: "miniPlayer",
                  kind: "message",
                  T: () => hn
              }, {
                  no: 11,
                  name: "backgroundPlayer",
                  kind: "message",
                  T: () => fe
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 21:
                          r.miniPlayer = hn.internalBinaryRead(e, e.uint32(), n, r.miniPlayer);
                          break;
                      case 11:
                          r.backgroundPlayer = fe.internalBinaryRead(e, e.uint32(), n, r.backgroundPlayer);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.miniPlayer && hn.internalBinaryWrite(e.miniPlayer, t.tag(21, u.LengthDelimited).fork(), n).join(), e.backgroundPlayer && fe.internalBinaryWrite(e.backgroundPlayer, t.tag(11, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      pn = new Wn,
      Sn = class extends y {
          constructor() {
              super("youtube.response.player.MiniPlayer", [{
                  no: 151635310,
                  name: "miniPlayerRender",
                  kind: "message",
                  T: () => yn
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 151635310:
                          r.miniPlayerRender = yn.internalBinaryRead(e, e.uint32(), n, r.miniPlayerRender);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.miniPlayerRender && yn.internalBinaryWrite(e.miniPlayerRender, t.tag(151635310, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      hn = new Sn,
      xn = class extends y {
          constructor() {
              super("youtube.response.player.BackgroundPlayer", [{
                  no: 64657230,
                  name: "backgroundPlayerRender",
                  kind: "message",
                  T: () => mn
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 64657230:
                          r.backgroundPlayerRender = mn.internalBinaryRead(e, e.uint32(), n, r.backgroundPlayerRender);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.backgroundPlayerRender && mn.internalBinaryWrite(e.backgroundPlayerRender, t.tag(64657230, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      fe = new xn,
      On = class extends y {
          constructor() {
              super("youtube.response.player.MiniPlayerRender", [{
                  no: 1,
                  name: "active",
                  kind: "scalar",
                  T: 8
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.active = !1, e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.active = e.bool();
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.active !== !1 && t.tag(1, u.Varint).bool(e.active);
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      yn = new On,
      Pn = class extends y {
          constructor() {
              super("youtube.response.player.BackgroundPlayerRender", [{
                  no: 1,
                  name: "active",
                  kind: "scalar",
                  T: 8
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.active = !1, e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.active = e.bool();
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.active !== !1 && t.tag(1, u.Varint).bool(e.active);
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      mn = new Pn,
      Cn = class extends y {
          constructor() {
              super("youtube.response.player.PlaybackTracking", [{
                  no: 1,
                  name: "videostatsPlaybackUrl",
                  kind: "message",
                  T: () => P
              }, {
                  no: 2,
                  name: "videostatsDelayplayUrl",
                  kind: "message",
                  T: () => P
              }, {
                  no: 3,
                  name: "videostatsWatchtimeUrl",
                  kind: "message",
                  T: () => P
              }, {
                  no: 4,
                  name: "ptrackingUrl",
                  kind: "message",
                  T: () => P
              }, {
                  no: 5,
                  name: "qoeUrl",
                  kind: "message",
                  T: () => P
              }, {
                  no: 13,
                  name: "atrUrl",
                  kind: "message",
                  T: () => P
              }, {
                  no: 15,
                  name: "videostatsEngageUrl",
                  kind: "message",
                  T: () => P
              }, {
                  no: 18,
                  name: "pageadViewthroughconversion",
                  kind: "message",
                  T: () => P
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.videostatsPlaybackUrl = P.internalBinaryRead(e, e.uint32(), n, r.videostatsPlaybackUrl);
                          break;
                      case 2:
                          r.videostatsDelayplayUrl = P.internalBinaryRead(e, e.uint32(), n, r.videostatsDelayplayUrl);
                          break;
                      case 3:
                          r.videostatsWatchtimeUrl = P.internalBinaryRead(e, e.uint32(), n, r.videostatsWatchtimeUrl);
                          break;
                      case 4:
                          r.ptrackingUrl = P.internalBinaryRead(e, e.uint32(), n, r.ptrackingUrl);
                          break;
                      case 5:
                          r.qoeUrl = P.internalBinaryRead(e, e.uint32(), n, r.qoeUrl);
                          break;
                      case 13:
                          r.atrUrl = P.internalBinaryRead(e, e.uint32(), n, r.atrUrl);
                          break;
                      case 15:
                          r.videostatsEngageUrl = P.internalBinaryRead(e, e.uint32(), n, r.videostatsEngageUrl);
                          break;
                      case 18:
                          r.pageadViewthroughconversion = P.internalBinaryRead(e, e.uint32(), n, r.pageadViewthroughconversion);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.videostatsPlaybackUrl && P.internalBinaryWrite(e.videostatsPlaybackUrl, t.tag(1, u.LengthDelimited).fork(), n).join(), e.videostatsDelayplayUrl && P.internalBinaryWrite(e.videostatsDelayplayUrl, t.tag(2, u.LengthDelimited).fork(), n).join(), e.videostatsWatchtimeUrl && P.internalBinaryWrite(e.videostatsWatchtimeUrl, t.tag(3, u.LengthDelimited).fork(), n).join(), e.ptrackingUrl && P.internalBinaryWrite(e.ptrackingUrl, t.tag(4, u.LengthDelimited).fork(), n).join(), e.qoeUrl && P.internalBinaryWrite(e.qoeUrl, t.tag(5, u.LengthDelimited).fork(), n).join(), e.atrUrl && P.internalBinaryWrite(e.atrUrl, t.tag(13, u.LengthDelimited).fork(), n).join(), e.videostatsEngageUrl && P.internalBinaryWrite(e.videostatsEngageUrl, t.tag(15, u.LengthDelimited).fork(), n).join(), e.pageadViewthroughconversion && P.internalBinaryWrite(e.pageadViewthroughconversion, t.tag(18, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      gn = new Cn,
      Un = class extends y {
          constructor() {
              super("youtube.response.player.Tracking", [{
                  no: 1,
                  name: "baseUrl",
                  kind: "scalar",
                  T: 9
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.baseUrl = "", e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.baseUrl = e.string();
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.baseUrl !== "" && t.tag(1, u.LengthDelimited).string(e.baseUrl);
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      P = new Un,
      En = class extends y {
          constructor() {
              super("youtube.response.player.Captions", [{
                  no: 51621377,
                  name: "playerCaptionsTrackListRenderer",
                  kind: "message",
                  jsonName: "playerCaptionsTracklistRenderer",
                  T: () => kn
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 51621377:
                          r.playerCaptionsTrackListRenderer = kn.internalBinaryRead(e, e.uint32(), n, r.playerCaptionsTrackListRenderer);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.playerCaptionsTrackListRenderer && kn.internalBinaryWrite(e.playerCaptionsTrackListRenderer, t.tag(51621377, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      bn = new En,
      Ln = class extends y {
          constructor() {
              super("youtube.response.player.PlayerCaptionsTrackListRenderer", [{
                  no: 1,
                  name: "captionTracks",
                  kind: "message",
                  repeat: 1,
                  T: () => pe
              }, {
                  no: 2,
                  name: "audioTracks",
                  kind: "message",
                  repeat: 1,
                  T: () => Rn
              }, {
                  no: 3,
                  name: "translationLanguages",
                  kind: "message",
                  repeat: 1,
                  T: () => he
              }, {
                  no: 4,
                  name: "defaultAudioTrackIndex",
                  kind: "scalar",
                  opt: !0,
                  T: 5
              }, {
                  no: 6,
                  name: "defaultCaptionTrackIndex",
                  kind: "scalar",
                  opt: !0,
                  T: 5
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.captionTracks = [], t.audioTracks = [], t.translationLanguages = [], e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.captionTracks.push(pe.internalBinaryRead(e, e.uint32(), n));
                          break;
                      case 2:
                          r.audioTracks.push(Rn.internalBinaryRead(e, e.uint32(), n));
                          break;
                      case 3:
                          r.translationLanguages.push(he.internalBinaryRead(e, e.uint32(), n));
                          break;
                      case 4:
                          r.defaultAudioTrackIndex = e.int32();
                          break;
                      case 6:
                          r.defaultCaptionTrackIndex = e.int32();
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              for (let r = 0; r < e.captionTracks.length; r++) pe.internalBinaryWrite(e.captionTracks[r], t.tag(1, u.LengthDelimited).fork(), n).join();
              for (let r = 0; r < e.audioTracks.length; r++) Rn.internalBinaryWrite(e.audioTracks[r], t.tag(2, u.LengthDelimited).fork(), n).join();
              for (let r = 0; r < e.translationLanguages.length; r++) he.internalBinaryWrite(e.translationLanguages[r], t.tag(3, u.LengthDelimited).fork(), n).join();
              e.defaultAudioTrackIndex !== void 0 && t.tag(4, u.Varint).int32(e.defaultAudioTrackIndex), e.defaultCaptionTrackIndex !== void 0 && t.tag(6, u.Varint).int32(e.defaultCaptionTrackIndex);
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      kn = new Ln,
      Fn = class extends y {
          constructor() {
              super("youtube.response.player.CaptionTrack", [{
                  no: 1,
                  name: "baseUrl",
                  kind: "scalar",
                  T: 9
              }, {
                  no: 2,
                  name: "name",
                  kind: "message",
                  T: () => W
              }, {
                  no: 3,
                  name: "vssId",
                  kind: "scalar",
                  T: 9
              }, {
                  no: 4,
                  name: "languageCode",
                  kind: "scalar",
                  T: 9
              }, {
                  no: 5,
                  name: "kind",
                  kind: "scalar",
                  opt: !0,
                  T: 9
              }, {
                  no: 6,
                  name: "rtl",
                  kind: "scalar",
                  opt: !0,
                  T: 8
              }, {
                  no: 7,
                  name: "isTranslatable",
                  kind: "scalar",
                  T: 8
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.baseUrl = "", t.vssId = "", t.languageCode = "", t.isTranslatable = !1, e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.baseUrl = e.string();
                          break;
                      case 2:
                          r.name = W.internalBinaryRead(e, e.uint32(), n, r.name);
                          break;
                      case 3:
                          r.vssId = e.string();
                          break;
                      case 4:
                          r.languageCode = e.string();
                          break;
                      case 5:
                          r.kind = e.string();
                          break;
                      case 6:
                          r.rtl = e.bool();
                          break;
                      case 7:
                          r.isTranslatable = e.bool();
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.baseUrl !== "" && t.tag(1, u.LengthDelimited).string(e.baseUrl), e.name && W.internalBinaryWrite(e.name, t.tag(2, u.LengthDelimited).fork(), n).join(), e.vssId !== "" && t.tag(3, u.LengthDelimited).string(e.vssId), e.languageCode !== "" && t.tag(4, u.LengthDelimited).string(e.languageCode), e.kind !== void 0 && t.tag(5, u.LengthDelimited).string(e.kind), e.rtl !== void 0 && t.tag(6, u.Varint).bool(e.rtl), e.isTranslatable !== !1 && t.tag(7, u.Varint).bool(e.isTranslatable);
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      pe = new Fn,
      Dn = class extends y {
          constructor() {
              super("youtube.response.player.AudioTrack", [{
                  no: 2,
                  name: "captionTrackIndices",
                  kind: "scalar",
                  repeat: 2,
                  T: 5
              }, {
                  no: 3,
                  name: "defaultCaptionTrackIndex",
                  kind: "scalar",
                  opt: !0,
                  T: 5
              }, {
                  no: 4,
                  name: "forcedCaptionTrackIndex",
                  kind: "scalar",
                  opt: !0,
                  T: 5
              }, {
                  no: 5,
                  name: "visibility",
                  kind: "scalar",
                  opt: !0,
                  T: 5
              }, {
                  no: 6,
                  name: "hasDefaultTrack",
                  kind: "scalar",
                  opt: !0,
                  T: 8
              }, {
                  no: 7,
                  name: "hasForcedTrack",
                  kind: "scalar",
                  opt: !0,
                  T: 8
              }, {
                  no: 8,
                  name: "audioTrackId",
                  kind: "scalar",
                  opt: !0,
                  T: 9
              }, {
                  no: 11,
                  name: "captionsInitialState",
                  kind: "scalar",
                  opt: !0,
                  T: 5
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.captionTrackIndices = [], e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 2:
                          if (o === u.LengthDelimited)
                              for (let g = e.int32() + e.pos; e.pos < g;) r.captionTrackIndices.push(e.int32());
                          else r.captionTrackIndices.push(e.int32());
                          break;
                      case 3:
                          r.defaultCaptionTrackIndex = e.int32();
                          break;
                      case 4:
                          r.forcedCaptionTrackIndex = e.int32();
                          break;
                      case 5:
                          r.visibility = e.int32();
                          break;
                      case 6:
                          r.hasDefaultTrack = e.bool();
                          break;
                      case 7:
                          r.hasForcedTrack = e.bool();
                          break;
                      case 8:
                          r.audioTrackId = e.string();
                          break;
                      case 11:
                          r.captionsInitialState = e.int32();
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              for (let r = 0; r < e.captionTrackIndices.length; r++) t.tag(2, u.Varint).int32(e.captionTrackIndices[r]);
              e.defaultCaptionTrackIndex !== void 0 && t.tag(3, u.Varint).int32(e.defaultCaptionTrackIndex), e.forcedCaptionTrackIndex !== void 0 && t.tag(4, u.Varint).int32(e.forcedCaptionTrackIndex), e.visibility !== void 0 && t.tag(5, u.Varint).int32(e.visibility), e.hasDefaultTrack !== void 0 && t.tag(6, u.Varint).bool(e.hasDefaultTrack), e.hasForcedTrack !== void 0 && t.tag(7, u.Varint).bool(e.hasForcedTrack), e.audioTrackId !== void 0 && t.tag(8, u.LengthDelimited).string(e.audioTrackId), e.captionsInitialState !== void 0 && t.tag(11, u.Varint).int32(e.captionsInitialState);
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Rn = new Dn,
      $n = class extends y {
          constructor() {
              super("youtube.response.player.TranslationLanguage", [{
                  no: 1,
                  name: "languageCode",
                  kind: "scalar",
                  T: 9
              }, {
                  no: 2,
                  name: "languageName",
                  kind: "message",
                  T: () => W
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.languageCode = "", e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.languageCode = e.string();
                          break;
                      case 2:
                          r.languageName = W.internalBinaryRead(e, e.uint32(), n, r.languageName);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.languageCode !== "" && t.tag(1, u.LengthDelimited).string(e.languageCode), e.languageName && W.internalBinaryWrite(e.languageName, t.tag(2, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      he = new $n,
      An = class extends y {
          constructor() {
              super("youtube.response.player.AdSlot", [{
                  no: 424701016,
                  name: "render",
                  kind: "message",
                  T: () => Bn
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 424701016:
                          r.render = Bn.internalBinaryRead(e, e.uint32(), n, r.render);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.render && Bn.internalBinaryWrite(e.render, t.tag(424701016, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      wn = new An,
      jn = class extends y {
          constructor() {
              super("youtube.response.player.AdSlot.Render", [])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              return i ?? this.create()
          }
          internalBinaryWrite(e, t, n) {
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Bn = new jn;
  var _n = class extends y {
          constructor() {
              super("youtube.response.setting.Setting", [{
                  no: 6,
                  name: "settingItems",
                  kind: "message",
                  repeat: 1,
                  T: () => J
              }, {
                  no: 7,
                  name: "CollectionItems",
                  kind: "message",
                  jsonName: "CollectionItems",
                  repeat: 1,
                  T: () => J
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.settingItems = [], t.collectionItems = [], e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 6:
                          r.settingItems.push(J.internalBinaryRead(e, e.uint32(), n));
                          break;
                      case 7:
                          r.collectionItems.push(J.internalBinaryRead(e, e.uint32(), n));
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              for (let r = 0; r < e.settingItems.length; r++) J.internalBinaryWrite(e.settingItems[r], t.tag(6, u.LengthDelimited).fork(), n).join();
              for (let r = 0; r < e.collectionItems.length; r++) J.internalBinaryWrite(e.collectionItems[r], t.tag(7, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Lr = new _n,
      Xn = class extends y {
          constructor() {
              super("youtube.response.setting.SettingItem", [{
                  no: 88478200,
                  name: "backgroundPlayBackSettingRenderer",
                  kind: "message",
                  T: () => Mn
              }, {
                  no: 66930374,
                  name: "settingCategoryCollectionRenderer",
                  kind: "message",
                  T: () => Vn
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 88478200:
                          r.backgroundPlayBackSettingRenderer = Mn.internalBinaryRead(e, e.uint32(), n, r.backgroundPlayBackSettingRenderer);
                          break;
                      case 66930374:
                          r.settingCategoryCollectionRenderer = Vn.internalBinaryRead(e, e.uint32(), n, r.settingCategoryCollectionRenderer);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.backgroundPlayBackSettingRenderer && Mn.internalBinaryWrite(e.backgroundPlayBackSettingRenderer, t.tag(88478200, u.LengthDelimited).fork(), n).join(), e.settingCategoryCollectionRenderer && Vn.internalBinaryWrite(e.settingCategoryCollectionRenderer, t.tag(66930374, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      J = new Xn,
      Yn = class extends y {
          constructor() {
              super("youtube.response.setting.BackgroundPlayBackSettingRenderer", [{
                  no: 1,
                  name: "name",
                  kind: "message",
                  T: () => W
              }, {
                  no: 2,
                  name: "backgroundPlayback",
                  kind: "scalar",
                  T: 8
              }, {
                  no: 3,
                  name: "download",
                  kind: "scalar",
                  T: 8
              }, {
                  no: 5,
                  name: "trackingParams",
                  kind: "scalar",
                  T: 12
              }, {
                  no: 9,
                  name: "downloadQualitySelection",
                  kind: "scalar",
                  T: 8
              }, {
                  no: 10,
                  name: "smartDownload",
                  kind: "scalar",
                  T: 8
              }, {
                  no: 14,
                  name: "icon",
                  kind: "message",
                  T: () => ae
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.backgroundPlayback = !1, t.download = !1, t.trackingParams = new Uint8Array(0), t.downloadQualitySelection = !1, t.smartDownload = !1, e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.name = W.internalBinaryRead(e, e.uint32(), n, r.name);
                          break;
                      case 2:
                          r.backgroundPlayback = e.bool();
                          break;
                      case 3:
                          r.download = e.bool();
                          break;
                      case 5:
                          r.trackingParams = e.bytes();
                          break;
                      case 9:
                          r.downloadQualitySelection = e.bool();
                          break;
                      case 10:
                          r.smartDownload = e.bool();
                          break;
                      case 14:
                          r.icon = ae.internalBinaryRead(e, e.uint32(), n, r.icon);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.name && W.internalBinaryWrite(e.name, t.tag(1, u.LengthDelimited).fork(), n).join(), e.backgroundPlayback !== !1 && t.tag(2, u.Varint).bool(e.backgroundPlayback), e.download !== !1 && t.tag(3, u.Varint).bool(e.download), e.trackingParams.length && t.tag(5, u.LengthDelimited).bytes(e.trackingParams), e.downloadQualitySelection !== !1 && t.tag(9, u.Varint).bool(e.downloadQualitySelection), e.smartDownload !== !1 && t.tag(10, u.Varint).bool(e.smartDownload), e.icon && ae.internalBinaryWrite(e.icon, t.tag(14, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Mn = new Yn,
      qn = class extends y {
          constructor() {
              super("youtube.response.setting.SettingCategoryCollectionRenderer", [{
                  no: 2,
                  name: "name",
                  kind: "message",
                  T: () => W
              }, {
                  no: 3,
                  name: "subSettings",
                  kind: "message",
                  repeat: 1,
                  T: () => ye
              }, {
                  no: 4,
                  name: "categoryId",
                  kind: "scalar",
                  T: 5
              }, {
                  no: 5,
                  name: "icon",
                  kind: "message",
                  T: () => ae
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.subSettings = [], t.categoryId = 0, e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 2:
                          r.name = W.internalBinaryRead(e, e.uint32(), n, r.name);
                          break;
                      case 3:
                          r.subSettings.push(ye.internalBinaryRead(e, e.uint32(), n));
                          break;
                      case 4:
                          r.categoryId = e.int32();
                          break;
                      case 5:
                          r.icon = ae.internalBinaryRead(e, e.uint32(), n, r.icon);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.name && W.internalBinaryWrite(e.name, t.tag(2, u.LengthDelimited).fork(), n).join();
              for (let r = 0; r < e.subSettings.length; r++) ye.internalBinaryWrite(e.subSettings[r], t.tag(3, u.LengthDelimited).fork(), n).join();
              e.categoryId !== 0 && t.tag(4, u.Varint).int32(e.categoryId), e.icon && ae.internalBinaryWrite(e.icon, t.tag(5, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Vn = new qn,
      Zn = class extends y {
          constructor() {
              super("youtube.response.setting.Icon", [{
                  no: 1,
                  name: "iconType",
                  kind: "scalar",
                  T: 5
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.iconType = 0, e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.iconType = e.int32();
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.iconType !== 0 && t.tag(1, u.Varint).int32(e.iconType);
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      ae = new Zn,
      zn = class extends y {
          constructor() {
              super("youtube.response.setting.SubSetting", [{
                  no: 61331416,
                  name: "settingBooleanRenderer",
                  kind: "message",
                  T: () => vn
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 61331416:
                          r.settingBooleanRenderer = vn.internalBinaryRead(e, e.uint32(), n, r.settingBooleanRenderer);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.settingBooleanRenderer && vn.internalBinaryWrite(e.settingBooleanRenderer, t.tag(61331416, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      ye = new zn,
      Hn = class extends y {
          constructor() {
              super("youtube.response.setting.SettingBooleanRenderer", [{
                  no: 2,
                  name: "title",
                  kind: "message",
                  T: () => W
              }, {
                  no: 3,
                  name: "description",
                  kind: "message",
                  T: () => W
              }, {
                  no: 5,
                  name: "enableServiceEndpoint",
                  kind: "message",
                  T: () => ie
              }, {
                  no: 6,
                  name: "disableServiceEndpoint",
                  kind: "message",
                  T: () => ie
              }, {
                  no: 15,
                  name: "itemId",
                  kind: "scalar",
                  T: 5
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.itemId = 0, e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 2:
                          r.title = W.internalBinaryRead(e, e.uint32(), n, r.title);
                          break;
                      case 3:
                          r.description = W.internalBinaryRead(e, e.uint32(), n, r.description);
                          break;
                      case 5:
                          r.enableServiceEndpoint = ie.internalBinaryRead(e, e.uint32(), n, r.enableServiceEndpoint);
                          break;
                      case 6:
                          r.disableServiceEndpoint = ie.internalBinaryRead(e, e.uint32(), n, r.disableServiceEndpoint);
                          break;
                      case 15:
                          r.itemId = e.int32();
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.title && W.internalBinaryWrite(e.title, t.tag(2, u.LengthDelimited).fork(), n).join(), e.description && W.internalBinaryWrite(e.description, t.tag(3, u.LengthDelimited).fork(), n).join(), e.enableServiceEndpoint && ie.internalBinaryWrite(e.enableServiceEndpoint, t.tag(5, u.LengthDelimited).fork(), n).join(), e.disableServiceEndpoint && ie.internalBinaryWrite(e.disableServiceEndpoint, t.tag(6, u.LengthDelimited).fork(), n).join(), e.itemId !== 0 && t.tag(15, u.Varint).int32(e.itemId);
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      vn = new Hn,
      Qn = class extends y {
          constructor() {
              super("youtube.response.setting.ServiceEndpoint", [{
                  no: 81212182,
                  name: "setClientSettingEndpoint",
                  kind: "message",
                  T: () => Gn
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 81212182:
                          r.setClientSettingEndpoint = Gn.internalBinaryRead(e, e.uint32(), n, r.setClientSettingEndpoint);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.setClientSettingEndpoint && Gn.internalBinaryWrite(e.setClientSettingEndpoint, t.tag(81212182, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      ie = new Qn,
      er = class extends y {
          constructor() {
              super("youtube.response.setting.SetClientSettingEndpoint", [{
                  no: 1,
                  name: "settingData",
                  kind: "message",
                  T: () => Kn
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.settingData = Kn.internalBinaryRead(e, e.uint32(), n, r.settingData);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.settingData && Kn.internalBinaryWrite(e.settingData, t.tag(1, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Gn = new er,
      tr = class extends y {
          constructor() {
              super("youtube.response.setting.SettingData", [{
                  no: 1,
                  name: "clientSettingEnum",
                  kind: "message",
                  T: () => Jn
              }, {
                  no: 3,
                  name: "boolValue",
                  kind: "scalar",
                  T: 8
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.boolValue = !1, e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.clientSettingEnum = Jn.internalBinaryRead(e, e.uint32(), n, r.clientSettingEnum);
                          break;
                      case 3:
                          r.boolValue = e.bool();
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.clientSettingEnum && Jn.internalBinaryWrite(e.clientSettingEnum, t.tag(1, u.LengthDelimited).fork(), n).join(), e.boolValue !== !1 && t.tag(3, u.Varint).bool(e.boolValue);
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Kn = new tr,
      nr = class extends y {
          constructor() {
              super("youtube.response.setting.ClientSettingEnum", [{
                  no: 1,
                  name: "item",
                  kind: "scalar",
                  T: 5
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.item = 0, e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.item = e.int32();
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.item !== 0 && t.tag(1, u.Varint).int32(e.item);
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Jn = new nr;
  var ir = class extends y {
          constructor() {
              super("youtube.response.watch.Watch", [{
                  no: 1,
                  name: "contents",
                  kind: "message",
                  repeat: 1,
                  T: () => rr
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return t.contents = [], e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 1:
                          r.contents.push(rr.internalBinaryRead(e, e.uint32(), n));
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              for (let r = 0; r < e.contents.length; r++) rr.internalBinaryWrite(e.contents[r], t.tag(1, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      Fr = new ir,
      ar = class extends y {
          constructor() {
              super("youtube.response.watch.Content", [{
                  no: 2,
                  name: "player",
                  kind: "message",
                  T: () => re
              }, {
                  no: 3,
                  name: "next",
                  kind: "message",
                  T: () => ee
              }])
          }
          create(e) {
              let t = globalThis.Object.create(this.messagePrototype);
              return e !== void 0 && h(this, t, e), t
          }
          internalBinaryRead(e, t, n, i) {
              let r = i ?? this.create(),
                  c = e.pos + t;
              for (; e.pos < c;) {
                  let [a, o] = e.tag();
                  switch (a) {
                      case 2:
                          r.player = re.internalBinaryRead(e, e.uint32(), n, r.player);
                          break;
                      case 3:
                          r.next = ee.internalBinaryRead(e, e.uint32(), n, r.next);
                          break;
                      default:
                          let s = n.readUnknownField;
                          if (s === "throw") throw new globalThis.Error(`Unknown field ${a} (wire type ${o}) for ${this.typeName}`);
                          let d = e.skip(o);
                          s !== !1 && (s === !0 ? f.onRead : s)(this.typeName, r, a, o, d)
                  }
              }
              return r
          }
          internalBinaryWrite(e, t, n) {
              e.player && re.internalBinaryWrite(e.player, t.tag(2, u.LengthDelimited).fork(), n).join(), e.next && ee.internalBinaryWrite(e.next, t.tag(3, u.LengthDelimited).fork(), n).join();
              let i = n.writeUnknownFields;
              return i !== !1 && (i == !0 ? f.onWrite : i)(this.typeName, e, t), t
          }
      },
      rr = new ar;
  var se = class {
          _times = new Map;
          name;
          isDebug;
          className;
          request;
          response;
          constructor(e, t, n) {
              this.name = e ?? "", this.isDebug = n?.debug ?? !1, e && this.debug(`${e} Start`), this.className = t ?? "", this.init()
          }
          static getInstance(e, t) {
              let n = "Surge";
              return typeof $loon < "u" ? n = "Loon" : typeof $task < "u" && (n = "QuanX"), se.instances[n] || (se.instances[n] = se.classNames[n](e, n, t)), se.instances[n]
          }
          createProxy(e) {
              return new Proxy(e, {
                  get: this.getFn,
                  set: this.setFn
              })
          }
          getFn(e, t, n) {
              return e[t]
          }
          setFn(e, t, n, i) {
              return e[t] = n, !0
          }
          getJSON(e, t = {}) {
              let n = this.getVal(e);
              return n ? JSON.parse(n) : t
          }
          setJSON(e, t) {
              this.setVal(JSON.stringify(e), t)
          }
          msg(e = this.name, t = "", n = "", i) {}
          debug(e) {
              this.isDebug && (typeof e == "object" && (e = JSON.stringify(e)), console.log(e))
          }
          log(e) {
              typeof e == "object" && (e = JSON.stringify(e)), console.log(e)
          }
          timeStart(e) {
              this._times.set(e, Date.now())
          }
          timeEnd(e) {
              if (this._times.has(e)) {
                  let t = this._times.get(e) ?? 0,
                      n = Date.now() - t;
                  this.debug(`${e}: ${n}ms`), this._times.delete(e)
              } else this.debug(`Timer with label ${e} does not exist.`)
          }
          exit() {
              $done({})
          }
          reject() {
              $done()
          }
          decodeParams(e) {
              return e
          }
      },
      v = se;
  ce(v, "instances", {}), ce(v, "classNames", {
      QuanX: (e, t, n) => new Fe(e, t, n),
      Surge: (e, t, n) => new me(e, t, n),
      Loon: (e, t, n) => new sr(e, t, n)
  });
  var De = class extends v {
          getFn(e, t, n) {
              let i = De.clientAdapter[t] || t;
              return super.getFn(e, i, n)
          }
          setFn(e, t, n, i) {
              let r = De.clientAdapter[t] || t;
              return super.setFn(e, r, n, i)
          }
          init() {
              try {
                  this.request = this.createProxy($request), this.response = this.createProxy($response)
              } catch (e) {
                  this.debug(e.toString())
              }
          }
          getVal(e) {
              return $persistentStore.read(e)
          }
          setVal(e, t) {
              $persistentStore.write(e, t)
          }
          msg(e = this.name, t = "", n = "", i) {
              let r = {};
              i && (r = {
                  action: {
                      "open-url": i
                  }
              }), $notification.post(e, t, n, r)
          }
          async fetch(e) {
              return await new Promise((t, n) => {
                  let {
                      method: i,
                      body: r,
                      bodyBytes: c,
                      ...a
                  } = e, o = c ?? r, s = o instanceof Uint8Array;
                  $httpClient[i.toLowerCase()]({
                      ...a,
                      body: o,
                      "binary-mode": s
                  }, (d, g, b) => {
                      d && n(d);
                      let m = s ? "bodyBytes" : "body";
                      t({
                          status: g.status ?? g.statusCode,
                          headers: g.headers,
                          [m]: b
                      })
                  })
              })
          }
          done(e) {
              let t = e.response ?? e;
              t.bodyBytes && (t.body = t.bodyBytes, delete t.bodyBytes), $done(t)
          }
          decodeParams(e) {
              return typeof $argument == "string" && !$argument.includes("{{{") && Object.assign(e, JSON.parse($argument)), e
          }
      },
      me = De;
  ce(me, "clientAdapter", {
      bodyBytes: "body"
  });
  var V = class extends v {
          static transferBodyBytes(e, t) {
              return e instanceof ArrayBuffer ? t === "Uint8Array" ? new Uint8Array(e) : e : e instanceof Uint8Array && t === "ArrayBuffer" ? e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset) : e
          }
          init() {
              try {
                  this.request = this.createProxy($request), this.response = this.createProxy($response)
              } catch (e) {
                  this.debug(e.toString())
              }
          }
          getFn(e, t, n) {
              let i = V.clientAdapter[t] || t,
                  r = super.getFn(e, i, n);
              return t === "bodyBytes" && (r = V.transferBodyBytes(r, "Uint8Array")), r
          }
          setFn(e, t, n, i) {
              let r = V.clientAdapter[t] || t,
                  c = n;
              return t === "bodyBytes" && (c = V.transferBodyBytes(c, "Uint8Array")), super.setFn(e, r, c, i)
          }
          getVal(e) {
              return $prefs.valueForKey(e)
          }
          setVal(e, t) {
              $prefs.setValueForKey(e, t)
          }
          msg(e = this.name, t = "", n = "", i) {
              $notify(e, t, n, {
                  "open-url": i ?? ""
              })
          }
          async fetch(e) {
              return await new Promise(t => {
                  let n = {
                      url: "",
                      method: "GET"
                  };
                  for (let [i, r] of Object.entries(e)) i === "id" ? n.sessionIndex = r : i === "bodyBytes" ? n.bodyBytes = V.transferBodyBytes(r, "ArrayBuffer") : n[i] = r;
                  e.bodyBytes && delete n.body, $task.fetch(n).then(i => {
                      let r = {
                          status: 200,
                          headers: {}
                      };
                      for (let [c, a] of Object.entries(i)) c === "sessionIndex" ? r.id = a : c === "bodyBytes" ? r.bodyBytes = V.transferBodyBytes(a, "Uint8Array") : c === "statusCode" ? r.status = a : r[c] = a;
                      t(r)
                  })
              })
          }
          done(e) {
              let t = e.response ?? e,
                  n = {};
              for (let [i, r] of Object.entries(t)) i === "status" ? n.status = `HTTP/1.1 ${r}` : i === "bodyBytes" ? n.bodyBytes = V.transferBodyBytes(r, "ArrayBuffer") : n[i] = r;
              $done(n)
          }
      },
      Fe = V;
  ce(Fe, "clientAdapter", {
      id: "sessionIndex",
      status: "statusCode"
  });
  var sr = class extends me {
      decodeParams(e) {
          if (typeof $argument < "u")
              for (let t of Object.keys(e)) {
                  let n = $argument?.[t];
                  n !== void 0 && (e[t] = n)
              }
          return e
      }
  };
  var w = v.getInstance("YouTube");
  var G = class {
      name;
      needProcess;
      needSave;
      message;
      version = "1.0";
      whiteNo = [];
      blackNo = [];
      whiteEml = [];
      blackEml = ["inline_injection_entrypoint_layout.eml"];
      msgType;
      argument;
      constructor(e, t) {
          this.name = t, this.msgType = e, this.argument = this.decodeArgument(), w.isDebug = Boolean(this.argument.debug), w.debug(this.name);
          let n = w.getJSON("YouTubeAdvertiseInfo");
          w.debug(`currentVersion:  ${this.version}`), w.debug(`storedVersion:  ${n.version}`), n?.version === this.version && Object.assign(this, n)
      }
      decodeArgument() {
          let e = {
              lyricLang: "off",
              captionLang: "off",
              blockUpload: !0,
              blockImmersive: !0,
              blockShorts: !1,
              debug: !1
          };
          return w.decodeParams(e)
      }
      fromBinary(e) {
          return e instanceof Uint8Array ? (this.message = this.msgType.fromBinary(e), w.debug(`bodyBytesSize: ${Math.floor(e.length/1024)} kb`), this) : (w.log("YouTube can not get binaryBody"), w.exit(), this)
      }
      toBinary() {
          return this.msgType.toBinary(this.message)
      }
      save() {
          if (this.needSave) {
              w.debug("Update Config");
              let e = {
                  version: this.version,
                  whiteNo: this.whiteNo,
                  blackNo: this.blackNo,
                  whiteEml: this.whiteEml,
                  blackEml: this.blackEml
              };
              w.debug(e), w.setJSON(e, "YouTubeAdvertiseInfo")
          }
      }
      done() {
          if (this.save(), this.needProcess) {
              w.timeStart("toBinary");
              let e = this.toBinary();
              w.timeEnd("toBinary"), w.debug(`modifiedBodySize: ${Math.floor(e.length/1024)} kb`), w.done({
                  bodyBytes: e
              })
          } else w.debug("use $.exit()"), w.exit()
      }
      iterate(e = {}, t, n) {
          let i = typeof e == "object" ? [e] : [];
          for (; i.length;) {
              let r = i.pop(),
                  c = Object.keys(r);
              for (let a of c) {
                  if (a === t && n(r)) return;
                  typeof r[a] == "object" && i.push(r[a])
              }
          }
      }
  };

  function Xr(l) {
      let n = ".",
          i = "+-a^+6",
          r = "+-3^+b+-f",
          c, a, o;
      for (c = [], a = 0, o = 0; o < l.length; o++) {
          let s = l.charCodeAt(o);
          128 > s ? c[a++] = s : (2048 > s ? c[a++] = s >> 6 | 192 : ((s & 64512) == 55296 && o + 1 < l.length && (l.charCodeAt(o + 1) & 64512) == 56320 ? (s = 65536 + ((s & 1023) << 10) + (l.charCodeAt(++o) & 1023), c[a++] = s >> 18 | 240, c[a++] = s >> 12 & 63 | 128) : c[a++] = s >> 12 | 224, c[a++] = s >> 6 & 63 | 128), c[a++] = s & 63 | 128)
      }
      for (l = 406644, a = 0; a < c.length; a++) l += c[a], l = Dr(l, i);
      return l = Dr(l, r), l ^= 3293161072, 0 > l && (l = (l & 2147483647) + 2147483648), l %= 1e6, l.toString() + n + (l ^ 406644)
  }

  function Dr(l, e) {
      let t = "a",
          n = "+",
          i;
      for (let r = 0; r < e.length - 2; r += 3) i = e.charAt(r + 2), i = i >= t ? i.charCodeAt(0) - 87 : Number(i), i = e.charAt(r + 1) == n ? l >>> i : l << i, l = e.charAt(r) == n ? l + i & 4294967295 : l ^ i;
      return l
  }

  function $r(l, e) {
      return `https://translate.google.com/translate_a/single?client=gtx&sl=auto&tl=${e}&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&source=bh&ssel=0&tsel=0&kc=1&tk=${Xr(l)}&q=${encodeURIComponent(l)}`
  }
  var oe = class extends G {
          constructor(e = Pr, t = "Browse") {
              super(e, t)
          }
          async pure() {
              return this.iterate(this.message, "richItemContents", e => {
                  let t = e.richItemContents;
                  if (!Array.isArray(t)) return !1;
                  for (let n = t.length - 1; n >= 0; n--) this.isAdvertise(t[n]) && (e.richItemContents.splice(n, 1), this.needProcess = !0)
              }), await this.translate(), this
          }
          listUnknownFields(e) {
              return f.list(e)
          }
          isAdvertise(e) {
              let t = this.listUnknownFields(e)[0];
              return t ? this.handleFieldNo(t) : this.handleFieldEml(e)
          }
          handleFieldNo(e) {
              let t = e.no;
              if (this.whiteNo.includes(t)) return !1;
              if (this.blackNo.includes(t)) return !0;
              let n = this.checkBufferIsAd(e);
              return n ? this.blackNo.push(t) : this.whiteNo.push(t), this.needSave = !0, n
          }
          handleFieldEml(e) {
              let t = !1,
                  n = "";
              return this.iterate(e, "renderInfo", i => {
                  if (n = i.renderInfo?.layoutRender?.eml?.split("|")?.[0] ?? "", this.whiteEml.includes(n)) t = !1;
                  else if (this.blackEml.includes(n) || /shorts(?!_pivot_item)/.test(n)) t = !0;
                  else {
                      let r = i?.videoInfo?.videoContext?.videoContent;
                      r && (t = this.checkUnknownFiled(r), t ? this.blackEml.push(n) : this.whiteEml.push(n), this.needSave = !0)
                  }
                  return !0
              }), t
          }
          checkBufferIsAd(e) {
              if (!e || e.data.length < 1e3) return !1;
              let t = e.data,
                  n = [112, 97, 103, 101, 97, 100],
                  i = t.length,
                  r = n.length,
                  c = new Int32Array(256).fill(r + 1);
              for (let o = 0; o < r; o++) c[n[o]] = r - o;
              let a = 0;
              for (; a <= i - r;) {
                  if (t[a] === n[0] && t[a + 1] === n[1] && t[a + 2] === n[2] && t[a + 3] === n[3] && t[a + 4] === n[4] && t[a + 5] === n[5]) return !0;
                  a += c[t[a + r]] || r + 1
              }
              return !1
          }
          checkUnknownFiled(e) {
              return e ? this.listUnknownFields(e)?.some(n => this.checkBufferIsAd(n)) ?? !1 : !1
          }
          getBrowseId() {
              let e = "";
              return this.iterate(this.message?.responseContext, "key", t => {
                  if (t.key === "browse_id") return e = t.value, !0
              }), e
          }
          async translate() {
              let e = this.argument.lyricLang?.trim();
              if (!(this.name === "Browse" && this.getBrowseId().startsWith("MPLYt")) || e === "off") return;
              let t = "",
                  n, i = !1;
              if (this.iterate(this.message, "timedLyricsContent", o => (n = o.timedLyricsContent, t = o.timedLyricsContent.runs.map(s => s.text).join(`
`), i = !0, !0)), i || this.iterate(this.message, "description", o => (n = o.description.runs[0], t = o.description.runs[0].text, i = !0, !0)), !i) return;
              let r = e.split("-")[0],
                  c = $r(t, e),
                  a = await w.fetch({
                      method: "GET",
                      url: c
                  });
              if (a.status === 200 && a.body) {
                  let o = JSON.parse(a.body),
                      s = " & Translated by Google",
                      d = o[2].includes(r);
                  n.text ? (n.text = o[0].map(g => d ? g[0] : g[1] + g[0] || "").join(`\r
`), this.iterate(this.message, "footer", g => (g.footer.runs[0].text += s, !0))) : n.runs.length <= o[0].length && (n.runs.forEach((g, b) => {
                      g.text = d ? o[0][b][0] : g.text + `
${o[0][b][0]}`
                  }), n.footerLabel += s), this.needProcess = !0
              }
          }
      },
      ge = class extends oe {
          constructor(e = ee, t = "Next") {
              super(e, t)
          }
      },
      be = class extends G {
          constructor(e = re, t = "Player") {
              super(e, t)
          }
          async pure() {
              return this.removeAd(), this.addPlayAbility(), this.addTranslateCaption(), this.needProcess = !0, this
          }
          removeAd() {
              this.message.adPlacements?.length && (this.message.adPlacements.length = 0), this.message.adSlots?.length && (this.message.adSlots.length = 0), delete this.message?.playbackTracking?.pageadViewthroughconversion
          }
          addPlayAbility() {
              let e = this.message?.playabilityStatus?.miniPlayer?.miniPlayerRender;
              typeof e == "object" && (e.active = !0), typeof this.message.playabilityStatus == "object" && (this.message.playabilityStatus.backgroundPlayer = fe.create({
                  backgroundPlayerRender: {
                      active: !0
                  }
              }))
          }
          addTranslateCaption() {
              let e = this.argument.captionLang;
              e !== "off" && this.iterate(this.message, "captionTracks", t => {
                  let n = t.captionTracks,
                      i = t.audioTracks;
                  if (Array.isArray(n)) {
                      let c = {
                              [e]: 2,
                              en: 1
                          },
                          a = -1,
                          o = 0;
                      for (let s = 0; s < n.length; s++) {
                          let d = n[s],
                              g = c[d.languageCode];
                          g && g > a && (a = g, o = s), d.isTranslatable = !0
                      }
                      if (a !== 2) {
                          let s = pe.create({
                              baseUrl: n[o].baseUrl + `&tlang=${e}`,
                              name: {
                                  runs: [{
                                      text: `@Enhance (${e})`
                                  }]
                              },
                              vssId: `.${e}`,
                              languageCode: e
                          });
                          n.push(s)
                      }
                      if (Array.isArray(i)) {
                          let s = a === 2 ? o : n.length - 1;
                          for (let d of i) d.captionTrackIndices?.includes(s) || d.captionTrackIndices.push(s), d.defaultCaptionTrackIndex = s, d.captionsInitialState = 3
                      }
                  }
                  let r = {
                      de: "Deutsch",
                      ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
                      fr: "Fran\xE7ais",
                      fil: "Filipino",
                      ko: "\uD55C\uAD6D\uC5B4",
                      ja: "\u65E5\u672C\u8A9E",
                      en: "English",
                      vi: "Ti\u1EBFng Vi\u1EC7t",
                      "zh-Hant": "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09",
                      "zh-Hans": "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09",
                      und: "@VirgilClyne"
                  };
                  return t.translationLanguages = Object.entries(r).map(([c, a]) => he.create({
                      languageCode: c,
                      languageName: {
                          runs: [{
                              text: a
                          }]
                      }
                  })), !0
              })
          }
      },
      $e = class extends oe {
          constructor(e = Cr, t = "Search") {
              super(e, t)
          }
      },
      Ae = class extends G {
          constructor(e = Ur, t = "Shorts") {
              super(e, t)
          }
          async pure() {
              let e = this.message.entries?.length;
              if (e)
                  for (let t = e - 1; t >= 0; t--) this.message.entries[t].command?.reelWatchEndpoint?.overlay || (this.message.entries.splice(t, 1), this.needProcess = !0);
              return this
          }
      },
      je = class extends G {
          constructor(e = Er, t = "Guide") {
              super(e, t)
          }
          async pure() {
              let e = ["SPunlimited"];
              return this.argument.blockUpload && e.push("FEuploads"), this.argument.blockImmersive && e.push("FEmusic_immersive"), this.argument.blockShorts && e.push("FEshorts"), this.iterate(this.message, "rendererItems", t => {
                  for (let n = t.rendererItems.length - 1; n >= 0; n--) {
                      let i = t.rendererItems[n]?.iconRender?.browseId ?? t.rendererItems[n]?.labelRender?.browseId;
                      i && e.includes(i) && (t.rendererItems.splice(n, 1), this.needProcess = !0)
                  }
              }), this
          }
      },
      Me = class extends G {
          constructor(e = Lr, t = "Setting") {
              super(e, t)
          }
          async pure() {
              this.iterate(this.message.settingItems, "categoryId", t => {
                  if (t.categoryId === 10135) {
                      let n = ye.create({
                          settingBooleanRenderer: {
                              itemId: 0,
                              enableServiceEndpoint: {
                                  setClientSettingEndpoint: {
                                      settingData: {
                                          clientSettingEnum: {
                                              item: 151
                                          },
                                          boolValue: !0
                                      }
                                  }
                              },
                              disableServiceEndpoint: {
                                  setClientSettingEndpoint: {
                                      settingData: {
                                          clientSettingEnum: {
                                              item: 151
                                          },
                                          boolValue: !1
                                      }
                                  }
                              }
                          }
                      });
                      t.subSettings.push(n)
                  }
              });
              let e = J.create({
                  backgroundPlayBackSettingRenderer: {
                      backgroundPlayback: !0,
                      download: !0,
                      downloadQualitySelection: !0,
                      smartDownload: !0,
                      icon: {
                          iconType: 1093
                      }
                  }
              });
              return this.message.settingItems.push(e), this.needProcess = !0, this
          }
      },
      Ve = class extends G {
          player;
          next;
          constructor(e = Fr, t = "Watch") {
              super(e, t), this.player = new be, this.next = new ge
          }
          async pure() {
              for (let e of this.message.contents) e.player && (this.player.message = e.player, await this.player.pure()), e.next && (this.next.message = e.next, await this.next.pure()), this.needProcess = !0;
              return this
          }
      };
  var Yr = new Map([
      ["browse", oe],
      ["next", ge],
      ["player", be],
      ["search", $e],
      ["reel_watch_sequence", Ae],
      ["guide", je],
      ["get_setting", Me],
      ["get_watch", Ve]
  ]);

  function or(l) {
      for (let [e, t] of Yr.entries())
          if (l.includes(e)) return new t;
      return null
  }
  async function qr() {
      let l = or(w.request.url);
      if (l) {
          let e = w.response.bodyBytes;
          w.timeStart("fromBinary"), l.fromBinary(e), w.timeEnd("fromBinary"), w.timeStart("modify"), await l.pure(), w.timeEnd("modify"), l.done()
      } else w.msg("YouTube Enhance", "\u811A\u672C\u9700\u8981\u66F4\u65B0", "\u5916\u90E8\u8D44\u6E90 -> \u5168\u90E8\u66F4\u65B0"), w.exit()
  }
  qr().catch(l => {
      console.log(l.message), w.exit()
  });
})();

function findUrl(_reg) {
    if (_reg.test($request.url)) {
        return $request.url;
    }
}
const features = [
    { id: "live_lookup", rank: 1, status: "Included", "isFree": false },
    { id: "auto_spam_block", rank: 2, status: "Included", "isFree": false },
    { id: "series_blocking", rank: 3, status: "Included", "isFree": false },
    { id: "no_ads", rank: 4, status: "Included", "isFree": false },
    { id: "extended_spam_blocking", rank: 5, status: "Included", "isFree": false },
    { id: "advanced_caller_id", rank: 6, status: "Included", "isFree": false },
    { id: "verified_badge", rank: 7, status: "Included", "isFree": false },
    { id: "spam_stats", rank: 8, status: "Included", "isFree": false },
    { id: "call_alert", rank: 9, status: "Included", "isFree": false },
    { id: "premium_feature", rank: 12, status: "Included", "isFree": false },
    { id: "identifai", rank: 15, status: "Included", "isFree": false },
    { id: "siri_search", rank: 16, status: "Included", "isFree": false },
    { id: "who_viewed_my_profile", rank: 17, status: "Included", "isFree": false },
    { id: "who_searched_for_me", rank: 18, status: "Included", "isFree": false },
    { id: "contact_request", rank: 19, status: "Included", "isFree": false },
    { id: "incognito_mode", rank: 20, status: "Included", "isFree": false },
    { id: "premium_badge", rank: 21, status: "Included", "isFree": false },
    { id: "premium_app_icon", rank: 22, status: "Included", "isFree": false },
    { id: "ghost_call", rank: 23, status: "Included", "isFree": false },
    { id: "live_chat_support", rank: 24, status: "Included", "isFree": false },
    { id: "call_recording", rank: 25, status: "Excluded", "isFree": false },
    { id: "premium_support", rank: 25, status: "Excluded", "isFree": false },
    { id: "family_sharing", rank: 26, status: "Included", "isFree": false },
    { id: "gold_caller_id", rank: 27, status: "Included", "isFree": false },
    { id: "announce_call", rank: 28, status: "Excluded", "isFree": false },
    { id: "caller_id", rank: 29, status: "Included", "isFree": true },
    { id: "spam_blocking", rank: 30, status: "Included", "isFree": true },
    { id: "whatsapp_caller_id", rank: 31, status: "Excluded", "isFree": false } 
];

var obj;
switch ($request.url) {
    case findUrl(/subscriptions\/status/):
        obj = {
            expire: "9999-01-09T01:01:01Z",
            start: "9999-09-09T02:32:04Z",
            paymentProvider: "Apple",
            isExpired: false,
            isGracePeriodExpired: false,
            subscriptionStatus: "SUBSCRIBED",
            inAppPurchaseAllowed: true,
            product: {
                id: "apple_gold_family_yearly_v0_shop-0176",
                sku: "apple_gold_family_yearly_v0",
                contentType: "subscription",
                productType: "SubsYearly",
                isFreeTrial: false
            },
            tier: { id: "goldfamily", feature: features }
        }
        break;
    case findUrl(/products\/apple/):
        obj = {
            "tier": [
                {
                    "id": "goldfamily",
                    "product": [
                        {
                            "productType": "SubsYearly",
                            "id": "apple_gold_family_yearly_v0_shop-0176",
                            "sku": "apple_gold_family_yearly_v0",
                            "contentType": "subscription",
                            "rank": 6,
                            "paymentProvider": "Apple",
                            "clientProductMetadata": {
                                "selectionRank": 5,
                                "displayOrder": 5,
                                "isEntitledPremiumScreenProduct": true
                            }
                        }
                    ],
                    "feature": features,
                    "rank": 5
                }
            ]
        }
    break;
}
$done({body: JSON.stringify(obj)});

// SoundCloud Go+ Unlock Script with ĐHT
var body = $response.body;
var obj = JSON.parse(body);

// Cập nhật thông tin gói "SoundCloud Go+"
obj.plan = {
    "vendor": "apple",
    "id": "high_tier",
    "manageable": true,
    "plan_upsells": [],
    "plan_id": "go-plus",
    "upsells": [],
    "plan_name": "SoundCloud Go+"
};

// Kích hoạt các tính năng cao cấp
obj.features = [
    {
        "name": "offline_sync",
        "enabled": true,
        "plans": ["mid_tier", "high_tier"]
    },
    {
        "name": "no_audio_ads",
        "enabled": true,
        "plans": ["mid_tier", "high_tier"]
    },
    {
        "name": "hq_audio",
        "enabled": true,
        "plans": ["high_tier"]
    },
    {
        "name": "system_playlist_in_library",
        "enabled": true,
        "plans": []
    },
    {
        "name": "ads_krux",
        "enabled": false,
        "plans": []
    },
    {
        "name": "new_home",
        "enabled": true,
        "plans": []
    },
    {
        "name": "spotlight",
        "enabled": false,
        "plans": []
    },
    {
        "name": "content_reporting",
        "enabled": false,
        "plans": []
    },
    {
        "name": "content_reporting_dsa",
        "enabled": false,
        "plans": []
    }
];

// Chuyển đổi đối tượng thành JSON và gửi phản hồi
body = JSON.stringify(obj);
$done({ body });

/*************************************

项目名称：Clica——解锁订阅
下载地址：https://is.gd/naUX2y
软件版本：1.2.3
脚本作者：彭于晏💞
更新时间：2023-9-1
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

**************************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Clica.js

[mitm] 

hostname = api.revenuecat.com

************************************/


const anni = {};
const anni1 = JSON.parse(typeof $response != "undefined" && $response.body || null);

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  anni.headers = $request.headers;
} else if (anni1 && anni1.subscriber) {
  anni1.subscriber.subscriptions = anni1.subscriber.subscriptions || {};
  anni1.subscriber.entitlements = anni1.subscriber.entitlements || {};

  const data = {
    "expires_date": "9999-09-09T12:00:00Z",
    "original_purchase_date": "9999-09-09T03:57:16Z",
    "purchase_date": "9999-09-09T12:00:00Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };

  anni1.subscriber.subscriptions["clica.vip.year"] = data;
  anni1.subscriber.entitlements["pro"] = JSON.parse(JSON.stringify(data));
  anni1.subscriber.entitlements["pro"].product_identifier = "clica.vip.year";

  anni.body = JSON.stringify(anni1);
}

$done(anni);

/******************************

脚本功能：Chic-Stylish Camera+解锁VIP
下载地址：http://mtw.so/6r6Rdt
软件版本：1.4.00
脚本作者：彭于晏💞
更新时间：2022-9-29
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api-sub\.meitu\.com\/v2\/user\/vip_info\.json url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Chic.js

[mitm] 

hostname = api-sub.meitu.com
info.json

*******************************/


var _0x1fdd=['cjBUwqE1','5puG6YOY5L2j5ZO+','5puk6YKz5Lyp5ZKV','Q3HDjcOgw6DCv8Oxw47CnA==','DcOoYVt8','w7nDnFDCrjXDql8=','DRgbAQ=='];(function(_0x560510,_0x1fdddd){var _0x396a5f=function(_0xd813c5){while(--_0xd813c5){_0x560510['push'](_0x560510['shift']());}};_0x396a5f(++_0x1fdddd);}(_0x1fdd,0x1cd));var _0x396a=function(_0x560510,_0x1fdddd){_0x560510=_0x560510-0x0;var _0x396a5f=_0x1fdd[_0x560510];if(_0x396a['QTGGLv']===undefined){(function(){var _0x2bee90=function(){var _0x588697;try{_0x588697=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x899505){_0x588697=window;}return _0x588697;};var _0x155144=_0x2bee90();var _0x49f083='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x155144['atob']||(_0x155144['atob']=function(_0x9b3fdf){var _0x2df70c=String(_0x9b3fdf)['replace'](/=+$/,'');var _0xb6986c='';for(var _0x56b2f5=0x0,_0x259b96,_0x266a67,_0x2db826=0x0;_0x266a67=_0x2df70c['charAt'](_0x2db826++);~_0x266a67&&(_0x259b96=_0x56b2f5%0x4?_0x259b96*0x40+_0x266a67:_0x266a67,_0x56b2f5++%0x4)?_0xb6986c+=String['fromCharCode'](0xff&_0x259b96>>(-0x2*_0x56b2f5&0x6)):0x0){_0x266a67=_0x49f083['indexOf'](_0x266a67);}return _0xb6986c;});}());var _0x3ffaf0=function(_0x4afae9,_0x2d889a){var _0x294543=[],_0x4abf99=0x0,_0x4de059,_0x408e89='',_0x42062f='';_0x4afae9=atob(_0x4afae9);for(var _0x416645=0x0,_0x4d4a86=_0x4afae9['length'];_0x416645<_0x4d4a86;_0x416645++){_0x42062f+='%'+('00'+_0x4afae9['charCodeAt'](_0x416645)['toString'](0x10))['slice'](-0x2);}_0x4afae9=decodeURIComponent(_0x42062f);var _0x4712b9;for(_0x4712b9=0x0;_0x4712b9<0x100;_0x4712b9++){_0x294543[_0x4712b9]=_0x4712b9;}for(_0x4712b9=0x0;_0x4712b9<0x100;_0x4712b9++){_0x4abf99=(_0x4abf99+_0x294543[_0x4712b9]+_0x2d889a['charCodeAt'](_0x4712b9%_0x2d889a['length']))%0x100;_0x4de059=_0x294543[_0x4712b9];_0x294543[_0x4712b9]=_0x294543[_0x4abf99];_0x294543[_0x4abf99]=_0x4de059;}_0x4712b9=0x0;_0x4abf99=0x0;for(var _0x53b1b8=0x0;_0x53b1b8<_0x4afae9['length'];_0x53b1b8++){_0x4712b9=(_0x4712b9+0x1)%0x100;_0x4abf99=(_0x4abf99+_0x294543[_0x4712b9])%0x100;_0x4de059=_0x294543[_0x4712b9];_0x294543[_0x4712b9]=_0x294543[_0x4abf99];_0x294543[_0x4abf99]=_0x4de059;_0x408e89+=String['fromCharCode'](_0x4afae9['charCodeAt'](_0x53b1b8)^_0x294543[(_0x294543[_0x4712b9]+_0x294543[_0x4abf99])%0x100]);}return _0x408e89;};_0x396a['XENsSB']=_0x3ffaf0;_0x396a['ViszgF']={};_0x396a['QTGGLv']=!![];}var _0xd813c5=_0x396a['ViszgF'][_0x560510];if(_0xd813c5===undefined){if(_0x396a['DjgLfL']===undefined){_0x396a['DjgLfL']=!![];}_0x396a5f=_0x396a['XENsSB'](_0x396a5f,_0x1fdddd);_0x396a['ViszgF'][_0x560510]=_0x396a5f;}else{_0x396a5f=_0xd813c5;}return _0x396a5f;};var objc=JSON[_0x396a('0x1','@2Uj')]($response[_0x396a('0x0','s*s^')]);objc={'code':0x0,'error_code':_0x396a('0x5','ccg)'),'message':_0x396a('0x6','RHvK'),'data':{'account_type':0x2,'account_id':0x8de0c691,'is_vip':!![],'valid_time':0x1d8dce0e766e,'invalid_time':0x1d8dce0e766e,'sub_type':0x2,'sub_type_name':'续期','active_product_id':0x0,'active_order_id':0x0,'active_sub_type':0x0,'active_sub_type_name':'','in_trial_period':![],'derive_type':0x1,'derive_type_name':_0x396a('0x3','RHvK'),'membership':{'id':0x2,'display_name':'Chic订阅会员','level':0x1,'level_name':_0x396a('0x2','gU[r')}},'success':!![]};$done({'body':JSON[_0x396a('0x4','X)YI')](objc)});

var banhsbao = JSON.parse($response.body);
const vipa = '/purchase/cs/query_property';
const vipb = '/queryProperty';
const tqzx = '/getPrivilegeItem';
const vip = {
    "group1_paid" : 1,
    "ms_first_pay" : 0,
    "vip_type" : "svip",
    "auto_renewal" : true,
    "in_trial" : 1,
    "members_page" : 0,
    "pc_vip" : 1,
    "renew_type" : "year",
    "renew_method" : "appstore",
    "ys_first_pay" : 0,
    "initial_tm" : "32662137600",
    "product_id" : "com.intsig.camscanner.premiums.oneyear.autorenewable.free.test1",
    "vip_level_info" : {
        "score" : 0,
        "level" : 0,
        "next_score" : 1,
        "start_score" : 0,
        "create_time" : 0
    },
    "nxt_renew_tm" : "32662137600",
    "last_payment_method" : "appstore",
    "grade" : 2,
    "svip" : 1,
    "expiry" : 32662137600,
    "pending" : 0,
    "level_info" : {
        "level" : 1,
        "end_days" : 30,
        "days" : 1
    },
    "inherited_flag" : 0,
    "group2_paid" : 0
};

if ($request.url.indexOf(vipa) != -1){
    banhsbao.data["psnl_vip_property"] = (vip);
    banhsbao.data["fax_balance"] = "99999";
    banhsbao.data["used_points"] = "99999";
    banhsbao.data["points"] = "99999";
    banhsbao.data["pdfword_balance"] = "100010";
    banhsbao.data["bookmode_balance"] = 100010;
    banhsbao.data["immt_expy_points"] = "99999";
    banhsbao.data["ocr_balance"] = 99999;
    banhsbao.data["no_login_ocr_balance"] = "99999";
    banhsbao.data["CamScanner_RoadMap"] = 100000;
}

if ($request.url.indexOf(vipb) != -1){
    banhsbao.data.ar_property["psnl_vip_property"] = (vip);
}

if ($request.url.indexOf(tqzx) != -1){
    banhsbao.data.data = {
        "document" : [
            {
                "balance" : -1,
                "item" : "CamScanner_Pic2pdf"
            },
            {
                "balance" : -1,
                "item" : "CamScanner_PdfCompress"
            },
            {
                "balance" : -1,
                "item" : "CamScanner_PdfEncrypt"
            },
            {
                "balance" : -1,
                "item" : "CamScanner_FileMerge"
            },
            {
                "balance" : -1,
                "item" : "CamScanner_PdfExtract"
            },
            {
                "balance" : -1,
                "item" : "CamScanner_PdfWatermark"
            },
            {
                "balance" : -1,
                "item" : "CamScanner_PdfSign"
            },
            {
                "balance" : 99999,
                "item" : "CamScanner_Intellect_Erase"
            }
        ],
        "transfer" : [
            {
                "balance" : -1,
                "item" : "CamScanner_ExcelRecoginze"
            },
            {
                "balance" : -1,
                "item" : "CamScanner_RoadMap"
            },
            {
                "balance" : -1,
                "item" : "CamScanner_Pdf2ppt"
            },
            {
                "balance" : 99999,
                "item" : "CamScanner_CloudOCR"
            }
        ],
        "other" : [
            {
                "balance" : 99999,
                "item" : "CamScanner_Translation"
            },
            {
                "balance" : -1,
                "item" : "CamScanner_DirNum"
            },
            {
                "balance" : -1,
                "item" : "CamScanner_IP_REMOVEAD"
            },
            {
                "balance" : -1,
                "item" : "CamScanner_PingTu"
            },
            {
                "balance" : 99999,
                "item" : "CamScanner_Points"
            },
            {
                "balance" : 99999,
                "item" : "CamScanner_Fax_Balance"
            }
        ],
        "scaner" : [
            {
                "balance" : 99999,
                "item" : "CamScanner_ImageRestore"
            },
            {
                "balance" : -1,
                "item" : "CamScanner_Patting"
            },
            {
                "balance" : 99999,
                "item" : "CamScanner_Profile_Card_Format"
            },
            {
                "balance" : -1,
                "item" : "CamScanner_BookMode"
            },
            {
                "balance" : -1,
                "item" : "CamScanner_CertMode"
            },
            {
                "balance" : -1,
                "item" : "CamScanner_HDScan"
            },
            {
                "balance" : 99999,
                "item" : "CamScanner_CloudOCR"
            }
        ],
        "pure" : [
            {
                "balance" : -1,
                "item" : "CamScanner_IP_REMOVEAD"
            }
        ]
    };
}

$done({body : JSON.stringify(banhsbao)});

/***********************************

> ScriptName        𝐑𝐞𝐯𝐞𝐧𝐮𝐞𝐂𝐚𝐭
> Author            @duyvinh09
> TgChannel         https://t.me/tienich
> ScriptURL         https://raw.githubusercontent.com/duyvinh09/Module_IOS/refs/heads/main/js/revenuecat.js


[rewrite_local]

# ～ RevenueCat@duyvinh09
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/duyvinh09/Module_IOS/refs/heads/main/js/revenuecat.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers) url script-request-header https://raw.githubusercontent.com/duyvinh09/Module_IOS/refs/heads/main/js/deleteHeader.js

[mitm]

hostname=api.revenuecat.com

***********************************/

// ========= ID ========= //
const mapping = {
  'Subtracky': ['premium','premium_subtracky_lifetime'],
  'Accountit/': ['spenditPlus','DesignTech.SIA.Spendit.Plus.Lifetime'],
  'Haushaltsbuch': ['full_access','com.fabian.hasse.haushaltsbuch.upgrade.combined'],
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'FinancialNote': ['category'],
  'QingLong': ['Premium'],
  'CircleTime/': ['Premium'],
  'ScreenRecordCase/': ['Premium'],
  'Chronicling/': ['Premium'],
  'Yosum/': ['Premium'],
  'Currency-Converter/': ['pro'],
  'Precious/': ['Pro'],
  'GBA/': ['xGBA.pro'],
  'mark_cup/': ['premiun'],
  'Wake%20Music': ['premium','com.OfflineMusic.www.lifetime198'],
  'Photomator': ['pixelmator_photo_pro_access'],
  'StepUp/': ['premiun'],
  'SleepMaster/': ['premium','sm_14999_lifetime'],
  'Notedrafts': ['pro_entitlement'],
  'Photon/': ['photon.paid','photon.bundle.yearly'],
  'MusicBox/': ['Premium','musicbox_2999_lifetime'],
  'Rats%20Project': ['PandaTracker_Premiumv2','monthly_subscription_discount_idv3'],
  'Grain/': ['gold','lifetimeMembership'],
  'AudioPlayer': ['Pro'],
  'FoJiCam/': ['ProVersionLifeTime'],
  'pdfai_app/': ['premium'],
  'LUTCamera': ['ProVersion', 'com.uzero.funforcam.monthlysub'],
  'totowallet': ['all', 'com.ziheng.totowallet.yearly'],
  'Today%20App/': ['Premium', 'TodayApp_Lifetime'],
  'Aphrodite': ['all'],
  'timetrack.io': ['atimelogger-premium-plus'],
  'LiveWallpaper': ['Pro access'],
  'SharkSMS': ['VIP','com.lixkit.diary.permanent_68'],
  '%E7%BE%8E%E5%A6%86%E6%97%A5%E5%8E%86': ['Pro access'],
  'Aula/': ['Pro access'],
  'Project%20Delta/': ['rc_entitlement_obscura_ultra'],
  'apollo': ['all'],
  'Unfold': ['REDUCED_PRO_YEARLY','UNFOLD_PRO_YEARLY'],
  'LockFlow/': ['unlimited_access'],
  'iplayTV/': ['com.ll.btplayer.12'],
  'widget_art': ['all'],
  'OneBox': ['all'],
  'Taskbit/': ['Pro'],
  'Spark': ['premium'],
  'Medication%20List/': ['Premium'],
  'Pillow': ['premium'],
  'DecibelMeter/': ['Premium'],
  '1Blocker': ['premium'],
  'VSCO': ['membership'],
  'UTC': ['Entitlement.Pro'],
  '%E8%AC%8E%E5%BA%95%E9%BB%91%E8%86%A0': ['Entitlement.Pro'],
  '%E8%AC%8E%E5%BA%95%E6%99%82%E9%90%98': ['Entitlement.Pro'],
  'OffScreen': ['Entitlement.Pro'],
  'ScannerPro': ['plus'],
  'Duplete/': ['Pro'],
  'Ooga/': ['Ooga'],
  'WhiteCloud': ['allaccess','wc_pro_1y'],
  'HTTPBot': ['pro'],
  'audiomack': ['Premium1'],
  'server_bee': ['Pro'],
  'simple-': ['patron'],
  'streaks': ['patron'],
  'andyworks-calculator': ['patron'],
  'vibes': ['patron'],
  'CountDuck': ['premium', 'Lifetime'],
  'IPTVUltra': ['premium'],
  'Happy%3ADays': ['pro', 'happy_999_lifetime'],
  'PDF_convertor/': ['VIP', 'com.pdf.convertor.forever'],
  'ChatGPTApp': ['Advanced'],
  'APTV': ['pro'],
  'TouchRetouchBasic': ['premium'],
  'My%20Jump%20Lab': ['lifetime'],
  '%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE': ['pro'],
  'Paku': ['pro'],
  'Awesome%20Habits': ['premium'],
  'Gear': ['pro', 'com.gear.app.yearly'],
  'MoneyThings': ['Premium'],
  'Anybox': ['pro'],
  'Fileball': ['filebox_pro'],
  'Noto': ['pro'],
  'Grow': ['grow.pro', 'grow_lifetime'],
  'WidgetSmith': ['Premium'],
  'Reflix': ['com.magicgroot.reflix.entitlements','com.magicgroot.reflix.subs.lifetime'],
  'Percento': ['premium'],
  'Planny': ['premium'],
  'CPUMonitor': ['Pro'],
  'Locket': ['Gold'],
  'My%20Tim': ['Pro'],
  'Photom': ['premium', 'pixelmator_photo_pro_subscription_v1_pro_offer'],
  'mizframa': ['premium', 'mf_20_lifetime2'],
  'YzyFit/': ['pro', 'yzyfit_lft_v2'],
  'ImageX': ['imagex.pro.ios', 'imagex.pro.ios.lifetime'],
  'Fin': ['premium', 'com.circles.fin.premium.yearly'],
  'Ledger': ['Pro', 'com.lifetime.pro'],
  'One4Wall': ['lifetime', 'lifetime_key'],
  'PhotoMark/': ['Pro', 'com.photo.mark.forever'],
  'SimpleScan/': ['premium', 'com.atlantia.SimpleScan.Purchases.Lifetime'],
  'OneWidget': ['allaccess'],
  'CardPhoto': ['premium'],
  'ProCamera': ['private_lightbox_entitlement&san_fran_entitlement&pro_camera_up_entitlement&procamera_full_entitlement','com.cocologics.ProCamera.Up.Yearly'],
  'Journal_iOS/': ['PRO'],
  'LemonKeepAccounts/': ['VIP','lm_1_1month'],
  'PDF%20Viewer': ['sub.pro'],
  'PhotoRoom': ['business'],
  'Decision': ['com.nixwang.decision.entitlements.pro'],
  'Tangerine': ['Premium'],
  'PastePal': ['premium'],
  'Fiery': ['premium'],
  'Airmail': ['Airmail Premium'],
  'Stress': ['StressWatch Pro'],
  'PinPaper': ['allaccess'],
  'Echo': ['PLUS'],
  'MyThings': ['pro','xyz.jiaolong.MyThings.pro.infinity'],
  'Overdue': ['Pro'],
  'BlackBox': ['plus','app.filmnoir.appstore.purchases.lifetime'],
  'Spektr': ['premium'],
  'MusicMate': ['premium','mm_lifetime_68_premium'],
  '%E4%BA%8B%E7%BA%BF': ['pro','xyz.jiaolong.eventline.pro.lifetime'],
  'Tasks': ['Pro'],
  'Currency': ['plus'],
  'money_manager': ['premium'],
  'fastdiet': ['premium'],
  'Blurer': ['paid_access'],
  'Everlog': ['premium'],
  'reader': ['vip2','com.valo.reader.vip2.year'],
  'GetFace': ['Pro access'],
  'intervalFlow': ['All Access','wodtimer_lf_free'],
  'Period%20Calendar': ['Premium','com.lbrc.PeriodCalendar.premium.yearly'],
  'Cookie': ['allaccess','app.ft.Bookkeeping.lifetime'],
  'ScientificCalculator': ['premium','com.simpleinnovation.calculator.ai.premium.yearly.base'],
  'MOZE': ['premium'],
  '1LemonKeepAccounts/': ['vip'],
  'To%20Me/': ['Premium'],
  '%E8%A8%80%E5%A4%96%E7%AD%86%E8%A8%98/': ['Premium'],
  'alcohol.tracker': ['pro','drinklog_lifetime'],
  'DayPoem': ['Pro Lifetime'],
  'Budget%20Flow': ['full_access','com.fabian.hasse.haushaltsbuch.upgrade.combined'],
  'G%20E%20I%20S%20T': ['memorado_premium'],
  'multitimer_app': ['premium','timus_lt'],
  'Darkroom': ['co.bergen.Darkroom.entitlement.allToolsAndFilters'],
  'tiimo': ['full_access'],
  'FaceMa/': ['Pro access'],
  'Record2Text/': ['Pro access'],
  'jinduoduo_calculator': ['jinduoduoapp','mobile_vip'],
  'Focused%20Work': ['Pro'],
  'GoToSleep': ['Pro'],
  'kegel': ['kegel_pro'],
  'Ochi': ['Pro'],
  'Pomodoro': ['Plus','com.MINE.PomodoroTimer.plus.yearly'],
  'universal/': ['Premium','remotetv.yearly.07'],
  'ShellBean/': ['pro','com.ningle.shellbean.subscription.year'],
  'AI%20Art%20Generator/': ['Unlimited Access'],
  'Email%20Me': ['premium'],
  'GoodThing/': ['pro','goodhappens_basic_year'],
  'Reels%20Editor': ['Unlimited Access'],
  'com.dison.diary': ['vip'],
  'iRead': ['vip'],
  'jizhi': ['jizhi_vip'],
  'card/': ['vip'],
  'EraseIt/': ['ProVersionLifeTime'],
  'Alpenglow': ['newPro'],
  'MindBreathYoga/': ['lifetimeusa'],
  'MetadataEditor': ['unlimited_access'],
  '%E6%9F%A5%E5%A6%86%E5%A6%86': ['Pro access'],
  '%E5%85%83%E6%B0%94%E8%AE%A1%E6%97%B6': ['plus'],
  'WidgetCat': ['MiaoWidgetPro'],
  'Emphasis/': ['premium'],
  'FormScanner/': ['Pro','formscanner_lifetime'],
  'streamer/': ['Premium'],
  'NeatNook/': ['com.neatnook.pro','com.neatnook.pro.forever'],
  'Blackout/': ['premium','blackout_299_lt'],
  'Budgetify/': ['premium','budgetify_3999_lt'],
  'Dedupe/': ['Pro','com.curiouscreatorsco.Dedupe.pro.lifetime.notrial.39_99'],
  'Wozi': ['wozi_pro_2023']
};

// =========    Phần cố định  ========= //
// =========  @duyvinh09 ========= //
var _0xodF = "jsjiami.com.v7";
function _0x52ea(_0x3ea8b3, _0x5559a4) {
  var _0x3b9dd1 = _0x3b9d();
  _0x52ea = function (_0x52eaee, _0x3ab28b) {
    _0x52eaee = _0x52eaee - 359;
    var _0xa7cab = _0x3b9dd1[_0x52eaee];
    if (_0x52ea.ggTMmB === undefined) {
      function _0x950288(_0x37bf5b) {
        var _0x78e8dd = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        var _0x192f0b = "";
        var _0x31676d = "";
        for (var _0x400f1d = 0, _0x110761, _0x902d8a, _0x2991a3 = 0; _0x902d8a = _0x37bf5b.charAt(_0x2991a3++); ~_0x902d8a && (_0x110761 = _0x400f1d % 4 ? _0x110761 * 64 + _0x902d8a : _0x902d8a, _0x400f1d++ % 4) ? _0x192f0b += String.fromCharCode(_0x110761 >> (_0x400f1d * -2 & 6) & 255) : 0) {
          _0x902d8a = _0x78e8dd.indexOf(_0x902d8a);
        }
        for (var _0x15ba08 = 0, _0x32e6ee = _0x192f0b.length; _0x15ba08 < _0x32e6ee; _0x15ba08++) {
          _0x31676d += "%" + ("00" + _0x192f0b.charCodeAt(_0x15ba08).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0x31676d);
      }
      function _0x2a013a(_0x5333c4, _0x5070d0) {
        var _0x56aa5a = [];
        var _0x65ca10 = 0;
        var _0x87bf3;
        var _0x1bcb39 = "";
        _0x5333c4 = _0x950288(_0x5333c4);
        var _0xbd10e0;
        for (_0xbd10e0 = 0; _0xbd10e0 < 256; _0xbd10e0++) {
          _0x56aa5a[_0xbd10e0] = _0xbd10e0;
        }
        for (_0xbd10e0 = 0; _0xbd10e0 < 256; _0xbd10e0++) {
          _0x65ca10 = (_0x65ca10 + _0x56aa5a[_0xbd10e0] + _0x5070d0.charCodeAt(_0xbd10e0 % _0x5070d0.length)) % 256;
          _0x87bf3 = _0x56aa5a[_0xbd10e0];
          _0x56aa5a[_0xbd10e0] = _0x56aa5a[_0x65ca10];
          _0x56aa5a[_0x65ca10] = _0x87bf3;
        }
        _0xbd10e0 = 0;
        _0x65ca10 = 0;
        for (var _0x3e48a9 = 0; _0x3e48a9 < _0x5333c4.length; _0x3e48a9++) {
          _0xbd10e0 = (_0xbd10e0 + 1) % 256;
          _0x65ca10 = (_0x65ca10 + _0x56aa5a[_0xbd10e0]) % 256;
          _0x87bf3 = _0x56aa5a[_0xbd10e0];
          _0x56aa5a[_0xbd10e0] = _0x56aa5a[_0x65ca10];
          _0x56aa5a[_0x65ca10] = _0x87bf3;
          _0x1bcb39 += String.fromCharCode(_0x5333c4.charCodeAt(_0x3e48a9) ^ _0x56aa5a[(_0x56aa5a[_0xbd10e0] + _0x56aa5a[_0x65ca10]) % 256]);
        }
        return _0x1bcb39;
      }
      _0x52ea.jOOxrV = _0x2a013a;
      _0x3ea8b3 = arguments;
      _0x52ea.ggTMmB = true;
    }
    var _0x46d478 = _0x3b9dd1[0];
    var _0x4a3bdb = _0x52eaee + _0x46d478;
    var _0x26d14e = _0x3ea8b3[_0x4a3bdb];
    if (!_0x26d14e) {
      if (_0x52ea.kXBdra === undefined) {
        _0x52ea.kXBdra = true;
      }
      _0xa7cab = _0x52ea.jOOxrV(_0xa7cab, _0x3ab28b);
      _0x3ea8b3[_0x4a3bdb] = _0xa7cab;
    } else {
      _0xa7cab = _0x26d14e;
    }
    return _0xa7cab;
  };
  return _0x52ea(_0x3ea8b3, _0x5559a4);
}
function _0x3b9d() {
  var _0x1a81c9 = function () {
    return [_0xodF, "HWHjxsIjCinpaNOmQyig.ncFoem.bvI7unpGuXlY==", "W7rUxZtcImo3pmkL", "W5XtWOe1bdBcJ8kCWRCGiCoZW48fW4JdHSoCW5VcG8oz", "WQu1zv3cPColnSkeWRivW5aAW4HeqCkcySoJW7RdRmkfWOtdHr8YWOtcLHLj", "bSozWP7dQvupW4DCAG", "ECoMW6WTy8k/BmkhWRFcO0OUWQG", "W4WJfhOLhKlcNIBcQmkBca", "WQnuWP3dHSkWyazXmCkyWO7dQ8kU", "WQ0Zra", "WQn7DCoqrIzkr8ozvCkTjmokW68", "W7ajW5JcMmo8o1DuoSkXWPhdLa", "sSkxvM/cG8oymx7dVbBdP8oytZDqWQtcPGdcR8kVCtS5oCo/W4vuWO1Z", "WQ4JWPNdVCkzWPeFWQbuWQNdHmke", "5OcY5zw05l625OMD5yQa5ysr5PEs5O6C772755sp5AgF6Bkh5yMr5lIL77+e6k+85yMx5zE75y+U5OUZ5yIb5lI65lMg5lQ677+C", "W57dM8oXWPHEBbDPWPBdSa", "xmk6vsiTESo/WPr8W4dcP04"].concat(function () {
      return ["hCkPq1ZcJmoVW51QWPiSowHMWRFdM8kxW5RcJ8oryq", "WRyOzXFcTmomjCkWWQGxWODeWO0EcCkBDCo0", "WQiZtSkoD2xcK8oHntRdJCo6BmonW51sW6v4W4NcTtNdQ8kAW7ZcOSoPD3xcSG", "e0yuhJrYWR8QWP4yqG", "wmk6vseQFCozWPzNW5VcOeu", "AKm2WQyFpW0", "WQG1EH7cOmod", "W53dJCkMW4tdLSoXi1W", "W6GuxNDKWRDho3JcRG", "W43dMCkfBa8gWPvdW5KJrSkiWRa", "WQODWRhcTSkynCoAW43dTSkE", "f05EwNnjWOKZ", "WPVcNCkMW5SnkXTCWQddSCosnG", "WPZcNSkNW6ddOW", "5PoR5lYJ5OI95yQY8j+oJVgdV7lXJy+waLO2WO3cLCkqWQbljrCw44cr6isu55we5z2HW4/dQNVdL8ksnSkmWQ9SlSojoSk1c2CAW6FdK1eMW7ZcPSklW6Ld", "W6PzuN58W77cSIetW6T/xCowqdNdICocWRDLrG", "WRiSt8ojzW"].concat(function () {
        return ["W6pdOLNdOMOBW4VdKCoEet10tMe", "WP9XnKe3CNZcQSoDW5u", "W4xcTG1GzmoVhq3dLCoY", "WQLsctCWW7DTdfxcTbBcGa", "gG0IWRLCW6uwWPnH", "W6WMWP7cTSk/bCog", "WOlcH8kzcWxcH8oSzga", "WOlcGSoe", "WRFcVmk/itNcQSoAtehdOGFcTG", "iCofuSoiAxpdMqtcVYCGW7C", "WRL3mub5qxlcRCowW5m", "WQKKWOdcIqrgWOtcUrHJrW", "lqBcR8koEmo6WOC", "Ee7cOuLnWQlcSwG", "bmkmWQxdPCoGqWZdNCkhjG", "WQa1EJBcOmomoq"];
      }());
    }());
  }();
  _0x3b9d = function () {
    return _0x1a81c9;
  };
  return _0x3b9d();
}
;
var _0x31b760 = _0x52ea;
(function (_0x743d38, _0x1bf72e, _0x279e3b, _0x9f43dc, _0xe2a57e, _0x2b8876, _0x3d39f0) {
  _0x743d38 = _0x743d38 >> 8;
  _0x2b8876 = "hs";
  _0x3d39f0 = "hs";
  return function (_0x65a64c, _0x1f16db, _0x210d0c, _0x3978be, _0x357e70) {
    var _0x5b590d = _0x52ea;
    _0x3978be = "tfi";
    _0x2b8876 = _0x3978be + _0x2b8876;
    _0x357e70 = "up";
    _0x3d39f0 += _0x357e70;
    _0x2b8876 = _0x210d0c(_0x2b8876);
    _0x3d39f0 = _0x210d0c(_0x3d39f0);
    _0x210d0c = 0;
    var _0xc23658 = _0x65a64c();
    while (true && --_0x9f43dc + _0x1f16db) {
      try {
        _0x3978be = -parseInt(_0x5b590d(380, "DplK")) / 1 + parseInt(_0x5b590d(361, "CQUZ")) / 2 * (-parseInt(_0x5b590d(392, "LaW^")) / 3) + parseInt(_0x5b590d(401, "7yWD")) / 4 + parseInt(_0x5b590d(376, "!FyN")) / 5 * (parseInt(_0x5b590d(405, "VEJ(")) / 6) + -parseInt(_0x5b590d(406, "7yWD")) / 7 * (-parseInt(_0x5b590d(387, "XJf3")) / 8) + -parseInt(_0x5b590d(393, "I8D4")) / 9 + parseInt(_0x5b590d(395, "aWAg")) / 10 * (parseInt(_0x5b590d(365, "VEJ(")) / 11);
      } catch (_0x4d5ec9) {
        _0x3978be = _0x210d0c;
      } finally {
        _0x357e70 = _0xc23658[_0x2b8876]();
        if (_0x743d38 <= _0x9f43dc) {
          if (_0x210d0c) {
            if (_0xe2a57e) {
              _0x3978be = _0x357e70;
            } else {
              _0xe2a57e = _0x357e70;
            }
          } else {
            _0x210d0c = _0x357e70;
          }
        } else if (_0x210d0c == _0xe2a57e.replace(/[XgnNbFyYlCuIOpxeQGWH=]/g, "")) {
          if (_0x3978be === _0x1f16db) {
            _0xc23658["un" + _0x2b8876](_0x357e70);
            break;
          }
          _0xc23658[_0x3d39f0](_0x357e70);
        }
      }
    }
  }(_0x279e3b, _0x1bf72e, function (_0x224e4d, _0x54cf0f, _0x3dc40b, _0x3427ec, _0x4f99ea, _0x1742b5, _0xfbe07a) {
    _0x54cf0f = "split";
    _0x224e4d = arguments[0];
    _0x224e4d = _0x224e4d[_0x54cf0f]("");
    _0x3dc40b = "reverse";
    _0x224e4d = _0x224e4d[_0x3dc40b]("v");
    _0x3427ec = "join";
    1646725;
    return _0x224e4d[_0x3427ec]("");
  });
})(51456, 371803, _0x3b9d, 203);
if (_0x3b9d) {
  _0xodF = 2869;
}
var ua = $request.headers[_0x31b760(381, "HT[1")] || $request[_0x31b760(383, "3PCZ")]["user-agent"];
var obj = JSON[_0x31b760(367, "CQUZ")]($response.body);
obj[_0x31b760(375, "fyu&")] = _0x31b760(399, "L*8u");
var duyvinh09 = {
  is_sandbox: false,
  ownership_type: _0x31b760(377, "JPYr"),
  billing_issues_detected_at: null,
  period_type: _0x31b760(360, "XJf3"),
  expires_date: _0x31b760(388, "xFMr"),
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2005-01-09T01:04:17Z",
  purchase_date: "2005-01-09T01:04:17Z",
  store: "app_store"
};
var duyvinh = {
  grace_period_expires_date: null,
  purchase_date: "2005-01-09T01:04:17Z",
  product_identifier: _0x31b760(404, "!sYB"),
  expires_date: "2099-01-09T01:04:17Z"
};
const match = Object.keys(mapping).find(_0x2d4787 => ua.includes(_0x2d4787));
if (match) {
  const [key, product_id] = mapping[match];
  if (product_id) {
    duyvinh[_0x31b760(403, "XJf3")] = product_id;
    obj[_0x31b760(373, "^J8$")].subscriptions[product_id] = duyvinh09;
  } else {
    obj[_0x31b760(362, "JYeS")].subscriptions[_0x31b760(389, "XJf3")] = duyvinh09;
  }
  obj[_0x31b760(372, "HT[1")][_0x31b760(396, "I8D4")] = {};
  if (key[_0x31b760(384, "q3!$")]("&")) {
    let parts = key[_0x31b760(370, "!sYB")]("&");
    parts[_0x31b760(386, "XJf3")](_0x563180 => {
      var _0x2d48ba = _0x31b760;
      obj[_0x2d48ba(364, "!FyN")].entitlements[_0x563180] = duyvinh;
    });
  } else {
    obj[_0x31b760(400, "Zger")][_0x31b760(379, "JPYr")][key] = duyvinh;
  }
} else {
  obj[_0x31b760(385, "vGhG")][_0x31b760(363, "Z#v]")][_0x31b760(397, "mXiu")] = duyvinh09;
  obj.subscriber[_0x31b760(398, "JqZu")][_0x31b760(378, "ZpT*")] = duyvinh;
}
console[_0x31b760(394, "!sYB")](_0x31b760(368, "VEJ("));
$done({
  body: JSON[_0x31b760(390, "nS%t")](obj)
});
var version_ = "jsjiami.com.v7";

// ========= ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
// =========   Phần cố định  ========= // 
// =========  @duyvinh09 ========= // 
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"],
  obj = JSON.parse($response.body);
obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
var duyvinh09 = {
      auto_resume_date: null,
      display_name: "locket_1600_1y",
      is_sandbox: true,
      ownership_type: "PURCHASED",
      billing_issues_detected_at: null,
      management_url: "https://apps.apple.com/account/subscriptions",
      period_type: "normal",
      price: {
          "amount": 399000.0,
          "currency": "VND"
      },
      expires_date: "9999-01-09T10:10:14Z",
      grace_period_expires_date: null,
      refunded_at: null,
      unsubscribe_detected_at: null,
      original_purchase_date: "9999-09-09T10:10:15Z",
      purchase_date: "9999-09-09T10:10:14Z",
      store: "app_store",
      store_transaction_id: "2000001108724193",
  },
  locketGold = {
      grace_period_expires_date: null,
      purchase_date: "9999-09-09T10:10:14Z",
      product_identifier: "locket_1600_1y",
      expires_date: "9999-01-09T10:10:14Z"
  };
const match = Object.keys(mapping).find(e => ua.includes(e));
if (match) {
  let [e, s] = mapping[match];
  s ? (locketGold.product_identifier = s, obj.subscriber.subscriptions[s] = duyvinh09) : obj.subscriber.subscriptions["locket_1600_1y"] = duyvinh09, obj.subscriber.entitlements[e] = locketGold
} else obj.subscriber.subscriptions["locket_1600_1y"] = duyvinh09, obj.subscriber.entitlements.pro = locketGold;
$done({
  body: JSON.stringify(obj)
});

var obj = JSON.parse($response.body);

obj= {
    "is_valid_device" : true,
    "has_valid_subscription" : true,
    "expiration_date_ms" : 4071600000000,
    "is_table_resettable" : true,
    "subscription_product_id" : "com.kinemaster.sub.annual.ia2",
    "state_code" : 0
};

$done({body: JSON.stringify(obj)});

/*************************************

Tên dự án: Bộ sưu tập mở khóa phim bộ iTunes
Ngày cập nhật: 14/06/2026
Tác giả kịch bản: @duyvinh09
Kênh Telegram: https://t.me/tienich
Lưu ý: ⚠️Chỉ để tham khảo, 🈲nghiêm cấm sao chép và bán!
Hướng dẫn sử dụng: Nếu kịch bản không hoạt động, vui lòng kiểm tra xung đột kịch bản trước.
Lưu ý đặc biệt: Kịch bản này có thể gây ra lỗi đăng nhập App Store.
Giải pháp: Chọn một trong các phương pháp sau: [MITM][Script][Công cụ Proxy]

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/duyvinh09/Module_IOS/refs/heads/main/js/iTunes.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/


(function () {
let body = $response.body;
let ddm = null, data = null, anchor = false;
function tryParse(raw) {
  try {
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}
ddm = tryParse(body);
if (!ddm) {
  let start = body.indexOf("{");
  let end = body.lastIndexOf("}");
  if (start !== -1 && end !== -1) {
    ddm = tryParse(body.substring(start, end + 1));
    if (ddm) console.log("✅ Đã phân tích cú pháp JSON bị cắt ngắn thành công.");
  }
}
if (!ddm) {
  let match = body.match(/\{[\s\S]*\}/);
  if (match) {
    ddm = tryParse(match[0]);
    if (ddm) console.log("✅ Đã phân tích cú pháp JSON bằng biểu thức chính quy thành công.");
  }
}
if (!ddm) {
  console.log("❌ Phân tích JSON thất bại hoàn toàn, bỏ qua kịch bản");
  $done({});
  return;
}
const ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
const bundle_id = ddm.receipt["bundle_id"] || ddm.receipt["Bundle_Id"];

// ===== App列表 =====
const list = {
  'bazaart': { tp: 'timea', hx: 'hxpda', id: "Bazaart_Super_Three_Months_v4" }, //Bazaart百色特
  'SHScan': { tp: 'timea', hx: 'hxpda', id: "com.ws.SHScanFree.Year" }, //扫描王
  'EnglishTalent': { tp: 'timea', hx: 'hxpda', id: "com.mango.newYearVip", strict: "auto" }, //英语演讲
  'art.yueyin.ebook-convert': { tp: 'timea', hx: 'hxpda', id: "art.yueyin.ebook.year" }, //电子书格式转换
  'MaiqiSun': { tp: 'timeb', hx: 'hxpda', id: "life_cn_68" }, //iSunning
  'PulseWatch': { tp: 'timeb', hx: 'hxpda', id: "relaxlife_ebp" }, //RelaxWatch:AI智能压力监测
  'PicCompress': { tp: 'timea', hx: 'hxpda', id: "pc_vip_new_1y" }, //图片压缩
  'XiangCePhoto': { tp: 'timeb', hx: 'hxpda', id: "ql128" }, //相册清理-删除重复照片
  'FileMaster': { tp: 'timeb', hx: 'hxpda', id: "FileMaster_ProVersion" },  //文件大师
  'Tuesday': { tp: 'timeb', hx: 'hxpda', id: "PIGLET_VIP_Forever" },  //Tuesday-纪念日
  'IPTV%20Flixana': { tp: 'timeb', hx: 'hxpda', id: "iptv_flixana_lifetime_sub" },  //IPTV Flixana
  'AdBlocker': { tp: 'timeb', hx: 'hxpda', id: "com.va.adBlocker.lifeTimefree" },  //AdBlocker
  'ECGPlus': { tp: 'timeb', hx: 'hxpda', id: "com.wms.hrv.pro" },  //ECG+心电房颤分析
  'WatchWallpaper': { tp: 'timea', hx: 'hxpda', id: "indie.davidwang.WatchWallpaper.yearsubscriptegold" },  //表盘专辑
  'com.beauty.MeiTui': { tp: 'timea', hx: 'hxpda', id: "vip_member_v3_365day" },  //AI美腿
  'ChmReader': { tp: 'timeb', hx: 'hxpda', id: "EpubReader_ProVersion" },  //Epub阅读器
  'MediaConvert': { tp: 'timeb', hx: 'hxpda', id: "MediaConverter_ProVersion" },  //格式转换
  'Period': { tp: 'timeb', hx: 'hxpda', id: "com.hanchongzan.time.pro" },  //时光提醒
  'com.sixiaobo.MusCut': { tp: 'timeb', hx: 'hxpdb', id: "com.purecollage.pro" },  //无损拼图
  'com.hanchongzan.loverlist': { tp: 'timeb', hx: 'hxpda', id: "com.hanchongzan.loverlist.01" },  //恋人清单
  'FlashTransportMaster': { tp: 'timea', hx: 'hxpda', id: "com.flashtransport.fightenegery.yearly.base" },  //时光罐罐
  'com.ideack.ASR': { tp: 'timeb', hx: 'hxpda', id: "ASR_Permanent_Plan" },  //录音转文字
  'Presets': { tp: 'timea', hx: 'hxpda', id: "com.chromatech.chroma.yearlyAutoRenewable" },  //Presets:照片处理、图像编辑器
  'GoodTask': { tp: 'timeb', hx: 'hxpda', id: "com.hahainteractive.goodtask3.pro" },  //代办事项清单-GoodTask
  'com.hanchongzan.period': { tp: 'timeb', hx: 'hxpda', id: "com.hanchongzan.period.girl" },  //姨妈来咯
  'com.hanchongzan.book': { tp: 'timeb', hx: 'hxpda', id: "com.hanchongzan.book.vip" }, //闪电记账
  'SoundLab': { tp: 'timeb', hx: 'hxpda', id: "8001" },  //合声-音乐制作
  'ECGANALYZER': { tp: 'timea', hx: 'hxpda', id: "com.wms.hrv.yearlyfamilysharing" }, //ECG+
  'com.RuoG.Pixiu': { tp: 'timea', hx: 'hxpda', id: "com.RuoG.Pixiu.VIPYear" }, //貔貅记账
  'com.ideack.BusinessCard': { tp: 'timeb', hx: 'hxpda', id: "BusinessCardVipPerpetual" }, //名片夹
  'com.ideack.MagicAudio': { tp: 'timeb', hx: 'hxpdb', id: "MagicAudioPermanent" }, //音乐剪辑
  'DuChuangZhe': { tp: 'timea', hx: 'hxpda', id: "org.zrey.du.main" }, //独创者
  'PhotoWhite': { tp: 'timeb', hx: 'hxpda', id: "org.zrey.photowhite.flash_lifetime" },  //印白相册
  'Pure%20Tuber%20Pro': { tp: 'timeb', hx: 'hxpda', id: "lifetime" },  //PureTuberPro
  'FETreeVideoChange': { tp: 'timeb', hx: 'hxpda', id: "com.dj.videototext.forever" },  //视频转文字
  '%E5%B0%8F%E5%B0%8F%E7%9B%B8%E6%9C%BA%E5%A4%A7%E5%B8%88': { tp: 'timeb', hx: 'hxpda', id: "com.ai.merge.forever.vip" },  //乐颜
  'FoodIdentificationTool': { tp: 'timeb', hx: 'hxpda', id: "20002" },  //剂查查
  'com.qingcheng.seal.Seal': { tp: 'timeb', hx: 'hxpda', id: "com.qingcheng.seal.Seal.premium.forever" },  //印章制作
  'com.geekapp.VoiceTranslation': { tp: 'timeb', hx: 'hxpda', id: "VoiceTranslatorPerpetual" },  //出国翻译官
  'com.idealityapp.VideoEditing': { tp: 'timeb', hx: 'hxpda', id: "MagicVideo_Vip_Permanent" },  //魔影-视频剪辑
  'YinzhangMaster': { tp: 'timeb', hx: 'hxpda', id: "com.xiaoqi.seal.forever" },  //印章大师
  'com.cuilingshi.flipclock': { tp: 'timeb', hx: 'hxpda', id: "FlipClockProVersion" },  //翻页时钟
  'com.maine.aifill': { tp: 'timeb', hx: 'hxpda', id: "com.maine.aifill.unlimited" },  //AI FILL-智能填充.换衣/换背景
  'Graphionica': { tp: 'timea', hx: 'hxpda', id: "premium_year" },  //Graphionica
  'AIAssistant': { tp: 'timea', hx: 'hxpda', id: "AIchat_1w_7.99_trial" },  //AIAssistant
  'MonitorPlus': { tp: 'timeb', hx: 'hxpda', id: "com.unhonin.MonitorPlus.proversion" },  //Monitor+
  'MessageHold': { tp: 'timea', hx: 'hxpda', id: "com.messagehold.forever" },  //拦截盾
  'Guitar%20Gravitas': { tp: 'timea', hx: 'hxpda', id: "GuitarGravitasChordsScalesArpeggiosLessons" },  //GuitarGravitas
  'com.casttv.remotetv': { tp: 'timeb', hx: 'hxpda', id: "liftetime2" }, //TVRemote电视遥控器
  'WallpaperWidget': { tp: 'timea', hx: 'hxpda', id: "com.widget.theme.yearly.3dayfree" }, //壁纸主题(需试用)
  'ProREC': { tp: 'timea', hx: 'hxpda', id: "ProAudioCamera_Annual" }, //ProREC-相机
  'TypeOn%20Keyboard': { tp: 'timeb', hx: 'hxpda', id: "com.hanchongzan.book.vip" }, //TypeOn
  'PhotoCollagePro': { tp: 'timeb', hx: 'hxpda', id: "PHOTABLE_PREMIUM" }, //Photable-腹肌P图神器
  'com.alphamobiletech.bodyApp': { tp: 'timeb', hx: 'hxpda', id: "Bodyapp_Forever" }, //Bodyapp-身材修图软件
  'com.alphamobiletech.facey': { tp: 'timeb', hx: 'hxpda', id: "Facey_Forever" }, //Facey-专业彩妆P图神器
  'Packet': { tp: 'timeb', hx: 'hxpda', id: "com.aaaalab.nepacket.iap.full" }, //HTTPS抓包
  'AllMyBatteries': { tp: 'timeb', hx: 'hxpda', id: "AllMyBatteries_Ultimate" }, //AllMyBatteries-电池管家
  'VDIT': { tp: 'timeb', hx: 'hxpda', id: "me.imgbase.videoday.profeaturesLifetime" }, //VDIT-视频转换
  'CodeSnippet': { tp: 'timea', hx: 'hxpda', id: "it.beatcode.codesnippetpro.annualSubscription" }, //CodeSnippet
  'darkWeb': { tp: 'timea', hx: 'hxpda', id: "dforce_unlock_all_functions" }, //DForce-Safari扩展
  'BookReader': { tp: 'timea', hx: 'hxpda', id: "com.reader.1year" }, //阅读器-小说阅读器
  'BeatStation': { tp: 'timea', hx: 'hxpda', id: "BS_Pro_Yearly" }, //BeatStation-节奏工作站
  'FastPlayer': { tp: 'timea', hx: 'hxpda', id: "VideoPlayer_ProVersion" }, //万能播放器
  'SimpleNotation': { tp: 'timeb', hx: 'hxpda', id: "com.xinlin.notation.once" }, //简谱大师
  'ChordMaster': { tp: 'timeb', hx: 'hxpda', id: "com.chordMaster.once" }, //MusicTotor-识谱大师
  'Xfuse': { tp: 'timeb', hx: 'hxpda', id: "com.xfuse.ProVision" }, //磁力宅播放器
  'com.BertonYc.ScannerOCR': { tp: 'timeb', hx: 'hxpda', id: "Scanner_Subscibe_Permanent" }, //万能扫描王
  'HRV': { hx: 'hxpdc', id: "com.stress.test.record.yearly" },  //解压小橘子(需试用)
  'iVCam': { tp: 'timeb', hx: 'hxpda', id: "ivcam.full" },//iVCam-电脑摄像头
  'RBrowser': { tp: 'timea', hx: 'hxpda', id: "com.mm.RBroswer.product11" }, //R浏览器(需试用)
  'Filterra': { tp: 'timeb', hx: 'hxpda', id: "com.filterra.wtonetimepurchase" },//Filterra-照片编辑器
  'MOLDIV': { tp: 'timeb', hx: 'hxpda', id: "com.jellybus.Moldiv.IAP.PRO7999" },//MOLDIV-视频/照片编辑
  'PICSPLAY': { tp: 'timea', hx: 'hxpda', id: "com.jellybus.PicsPlay2.IAP.PRO5999" },//PICSPLAY-照片编辑
  'Rookie': { tp: 'timea', hx: 'hxpda', id: "com.jellybus.Rookie.IAP.PRO5999" },//RKCAM-照片编辑
  'MoneyWiz': { tp: 'timea', hx: 'hxpda', id: "com.moneywiz.personalfinance.1year" }, //MoneyWiz-个人财务
  'qxzs': { tp: 'timeb', hx: 'hxpda', id: "yongjiu" },//心率广播
  'Overdrop': { tp: 'timeb', hx: 'hxpda', id: "com.weather.overdrop.forever" }, //Overdrop-天气预报
  'Boom': { tp: 'timeb', hx: 'hxpda', id: "com.globaldelight.iBoom.LifetimeDiscountPack" }, //Boom-感受音乐
  'PDFReaderPro%20Free': { tp: 'timeb', hx: 'hxpda', id: "com.pdfreaderpro.free.member.all_access_pack_permanent_license.001" }, //PDFReaderProFree
  'VideoHelper': { tp: 'timeb', hx: 'hxpda', id: "vip_service" }, //媒关系
  'Digital%20Planner': { tp: 'timea', hx: 'hxpda', id: "com.softwings.DigitalPlanner.1year" }, //电子手帐
  'SuperMandarin': { tp: 'timea', hx: 'hxpda', id: "pth_vip_year" }, //普通话水平测试
  'SuperQuestion': { tp: 'timea', hx: 'hxpda', id: "qtzs_vip_year" }, //真题全刷
  'SuperElves': { tp: 'timeb', hx: 'hxpda', id: "com.SuperElves.Answer.Forever" }, //答案精灵
  'SuperDriving': { tp: 'timeb', hx: 'hxpda', id: "jiakao_vip_forever" }, //驾考学典
  'Pollykann': { tp: 'timeb', hx: 'hxpda', id: "vip.forever.pollykann" }, //小鹦看看
  'JCCalendar': { tp: 'timeb', hx: 'hxpda', id: "com.sjc.calendar.vip.lifelong" }, //简约日历
  'com.yanxia.ChsMedical': { tp: 'timeb', hx: 'hxpda', id: "VIPUser" }, //中医精华
  'SuperPointer': { tp: 'timeb', hx: 'hxpda', id: "com.SuperPointer.Location.Forever" }, //海拔指南针
  'SnakeReader': { tp: 'timea', hx: 'hxpda', id: "com.lyran.snakescanner.premium18" }, //开卷阅读
  'FourthPPT': { tp: 'timeb', hx: 'hxpda', id: "com.FourthPPT.Mobile.Forever" }, //PPT制作软件
  'OneExtractor': { tp: 'timeb', hx: 'hxpda', id: "com.OneExtractor.Video.Forever" }, //视频提取器
  'com.Colin.Colors': { tp: 'timea', hx: 'hxpda', id: "com.colin.colors.annualVIP" }, //搜图
  'PhotosSorter': { tp: 'timeb', hx: 'hxpda', id: "sorter.pro.ipa" }, //Sorter-相册整理
  'intolive': { tp: 'timea', hx: 'hxpda', id: "me.imgbase.intolive.proSubYearly" }, //intolive-实况壁纸制作器
  'MyAlbum': { tp: 'timeb', hx: 'hxpda', id: "com.colin.myalbum.isUpgradeVip" }, //Cleaner-照片管理
  'VideoEditor': { tp: 'timeb', hx: 'hxpda', id: "com.god.videohand.alwaysowner" }, //VideoShot
  'ShotOn': { tp: 'timeb', hx: 'hxpda', id: "com.colin.shoton.forevervip" }, //ShotOn
  'TimeCut': { tp: 'timea', hx: 'hxpda', id: "com.floatcamellia.hfrslowmotion.forevervip" },  //TimeCut
  'com.floatcamellia.motiok': { tp: 'timea', hx: 'hxpda', id: "com.floatcamellia.motiok.vipforever" },  //Hype_Text-AE特效片制作
  'GreetingScanner': { tp: 'timea', hx: 'hxpda', id: "com.alphaplus.greetingscaner.w.b" },  //扫描识别王
  'FancyCamPlus': { tp: 'timea', hx: 'hxpda', id: "com.alphaplus.fancycam.year.198" },  //悦颜相机
  'Again': { tp: 'timeb', hx: 'hxpda', id: "com.owen.again.profession" },  //Again-稍后阅读器
  'com.damon.dubbing': { tp: 'timea', hx: 'hxpda', id: "com.damon.dubbing.vip12" },  //有声英语绘本
  'ZHUBEN': { tp: 'timea', hx: 'hxpda', id: "com.xiaoyu.yue" },  //有声英语绘本
  'XIAOTangHomeParadise': { tp: 'timea', hx: 'hxpda', id: "com.yuee.mo2" },  //鸿海幼儿启蒙
  'film': { tp: 'timea', hx: 'hxpda', id: "pro_auto_subscribe_year_ovs" },  //胶卷相机
  'Muza': { tp: 'timea', hx: 'hxpda', id: "com.appmuza.premium_year" },  //Muza-修图APP
  'StandbyWidget': { tp: 'timed', hx: 'hxpda', id: "com.standby.idream.year.68", ids: "standbyus.nonconsume.missingyou" },  //StandBy_Us-情侣定位
  'Mango6Minute': { tp: 'timea', hx: 'hxpda', id: "576170870" },  //6分钟英语
  'Photo%20Cutout': { tp: 'timea', hx: 'hxpda', id: "com.icepine.allyear" },  //轻松扣图
  'WasteCat': { tp: 'timeb', hx: 'hxpda', id: "dev.sanjin.WasteCat.PermanentVip" },  //垃圾贪吃猫
  'MeowTalk': { tp: 'timea', hx: 'hxpda', id: "meowtalk.month.basic.autorenewable.subscription" },  //喵说
  'habitdot': { tp: 'timeb', hx: 'hxpda', id: "habitdots_pro_forever" },  //习惯点点
  'stretchworkout': { tp: 'timea', hx: 'hxpda', id: "com.abishkking.premiumYearStretch" },  //拉伸运动
  'com.uzstudio.avenuecast.ios': { tp: 'timeb', hx: 'hxpda', id: "1001" },  //凡视知音
  'CongZhenBaZi': { tp: 'timeb', hx: 'hxpda', id: "vip_forever_78" },  //八字排盘-从真版
  'CongZhenQiMen': { tp: 'timea', hx: 'hxpda', id: "cn.congzhen.CongZhenQiMen.yearlyplan" },  //奇门遁甲
  'ProFit': { tp: 'timea', hx: 'hxpda', id: "com.maxty.gofitness.yearlyplan" },  //ProFit锻炼计划
  'GPSMaker': { tp: 'timea', hx: 'hxpda', id: "theodolite_vip_year" },  //指南针定位
  'Smoke': { tp: 'timea', hx: 'hxpda', id: "smoke19870727" },  //今日香烟
  'AppAlarmIOS': { tp: 'timea', hx: 'hxpda', id: "alarm.me.vip.year.tier1" },  //Me+
  'Tinglee': { tp: 'timea', hx: 'hxpdb', id: "vip.forever.tinglee" },  //英语听听
  'NoteKeys': { tp: 'timea', hx: 'hxpda', id: "notekeys_access_weekly" },  //五线谱
  'SheetMusicPro': { tp: 'timea', hx: 'hxpda', id: "sheetmusicpro.yearwithtrial" },  //乐谱吧
  'ProtractorEdge': { tp: 'timea', hx: 'hxpda', id: "ProtracatorEdge.PremiumAccess" },  //量角器
  'Piano%20Plus': { tp: 'timea', hx: 'hxpda', id: "kn_access_weekly" },  //Piano Plus
  'Notation%20Pad': { tp: 'timea', hx: 'hxpda', id: "np_access_weekly" },  //Notation Pad
  'Guitar%20Notation': { tp: 'timea', hx: 'hxpda', id: "gn_access_weekly" },  //Guitar Notation
  'Piano%20Fantasy': { tp: 'timea', hx: 'hxpda', id: "com.lotuz.PianoFantasy.weekwithtrail" },  //钢琴幻想
  'Piano%20Rush': { tp: 'timea', hx: 'hxpda', id: "com.lotuz.PianoPro.weekwithtrail" },  //钢琴大师
  'com.richads.saucyart': { tp: 'timea', hx: 'hxpda', id: "com.richads.saucyart.sub.quarterly_29.99" },  //Perky
  'SurveyorPro': { tp: 'timea', hx: 'hxpda', id: "com.celiangyuan.SurveyorPro.OneYear" },  //测量员Pro
  'com.ydatong.dingdone': { tp: 'timeb', hx: 'hxpda', id: "com.ydatong.dingdone.vip.forever" },  //叮当代办
  'Dial': { tp: 'timea', hx: 'hxpda', id: "2104" },  //T9拨号
  'qxwp%20copy': { tp: 'timed', hx: 'hxpda', id: "com.chowjoe.wp2free.year.pro", ids: "com.chowjoe.wp2free.coin.70" },  //壁纸
  'LingLongShouZ': { tp: 'timea', hx: 'hxpda', id: "zhenwushouzhangQuarterlyPlus" },  //Cute手帐软件
  'MediaEditor': { tp: 'timeb', hx: 'hxpda', id: "alwaysowner" },  //剪影(需试用)
  'com.gostraight.smallAccountBook': { tp: 'timeb', hx: 'hxpda', id: "ForeverVIPPayment" },  //iCost记账(需要购买)
  'ZJTBiaoGe': { tp: 'timea', hx: 'hxpda', id: "zhangjt.biaoge.monthvip" },  //表格手机版
  'MiniMouse': { tp: 'timea', hx: 'hxpda', id: "minimouse_vip_1year" },  //MiniMouse
  'Paste%20Keyboard': { tp: 'timea', hx: 'hxpda', id: "com.keyboard.1yetr" },  //复制和粘贴键盘
  'EWA': { tp: 'timea', hx: 'hxpda', id: "com.ewa.renewable.subscription.year8" },  //EWA-学习外语
  'BuBuSZ': { tp: 'timea', hx: 'hxpda', id: "quaVersion" },  //BuBu手帐
  'com.icandiapps.nightsky': { tp: 'timea', hx: 'hxpda', id: "com.icandiapps.ns4.annual" },  //星空
  'Wallpapers': { tp: 'timea', hx: 'hxpda', id: "wallpaperworld.subscription.yearly.12.notrial" },  //Wallpaper Tree壁纸
  'com.yumiteam.Kuki.ID': { tp: 'timea', hx: 'hxpda', id: "com.yumiteam.Kuki.ID.2" },  //PicsLeap-美飞
  'com.quangtm193.picpro': { tp: 'timea', hx: 'hxpda', id: "com.quangtm193.picpro1year" },  //PicPro-人工智能照片编辑器
  'Storybeat': { tp: 'timea', hx: 'hxpda', id: "yearly_1" },  //Storybeat
  'SmartGym': { tp: 'timea', hx: 'hxpda', id: "com.smartgymapp.smartgym.premiumuserworkoutsyearly" },  //SmartGym
  'Prookie': { tp: 'timea', hx: 'hxpda', id: "prookie.month.withtrial.0615" },  //AI灵绘
  'BodyTune': { tp: 'timea', hx: 'hxpda', id: "Bodypro1" },  //BodyTune-瘦身相机
  'killer.sudoku.free.brain.puzzle': { tp: 'timea', hx: 'hxpda', id: "ks.i.iap.premium" },  //杀手数独
  'sudoku.puzzle.free.game.brain': { tp: 'timea', hx: 'hxpda', id: "sudoku.i.sub.vvip.p1y" },  //数独
  'One%20Markdown': { tp: 'timeb', hx: 'hxpda', id: "10012" },  //One Markdown
  'MWeb%20iOS': { tp: 'timeb', hx: 'hxpda', id: "10001" },  //MWeb-编辑器/笔记/发布
  'NYMF': { tp: 'timea', hx: 'hxpda', id: "com.nymf.app.premium_year" },  //Nymf艺术照片
  'com.lockwidt.cn': { tp: 'timea', hx: 'hxpda', id: "com.lockwidt.cn.member" },  //壁纸16
  'Utsuki': { tp: 'timea', hx: 'hxpda', id: "KameePro" },  //梦见账本
  'one%20sec': { tp: 'timea', hx: 'hxpda', id: "wtf.riedel.one_sec.pro.annual.individual" },  //one sec-番茄钟
  'com.instagridpost.rsigp': { tp: 'timea', hx: 'hxpda', id: "com.GridPost.oneyearplus" },  //九宫格切图
  'com.skysoft.removalfree': { tp: 'timea', hx: 'hxpda', id: "com.skysoft.removalfree.discount.unlimitedaccess" },  //神奇消除笔-图片消除
  'MGhostLens': { tp: 'timea', hx: 'hxpda', id: "com.ghostlens.premium1month" },  //魔鬼相机
  'Luminous': { tp: 'timea', hx: 'hxpda', id: "com.spacemushrooms.weekly" },  //光影修图
  'PerfectImage': { tp: 'timea', hx: 'hxpda', id: "Perfect_Image_VIP_Yearly" },  //完美影像(需试用)
  'moment': { tp: 'timea', hx: 'hxpda', id: "PYJMoment2" },  //片羽集(需试用)
  'HiddenBox': { tp: 'timec', hx: 'hxpdb', version: "1" },//我的书橱
  'Synthesizer': { tp: 'timea', hx: 'hxpda', id: "com.qingxiu.synthesizer.mon" },  //语音合成
  'ContractMaster': { tp: 'timea', hx: 'hxpda', id: "com.qingxiu.contracts.monthly" },  //印象全能王
  'MyDiary': { tp: 'timea', hx: 'hxpda', id: "diary.yearly.vip.1029" },  //我的日记
  'Translator': { tp: 'timea', hx: 'hxpda', id: "trans_sub_week" },  //翻译家
  'Idea': { tp: 'timea', hx: 'hxpda', id: "top.ideaapp.ideaiOS.membership.oneyear" },  //灵感(需试用)
  'ZeroTuImg': { tp: 'timea', hx: 'hxpda', id: "ZeroTuImgPlus" },  //Zero壁纸
  'com.traveltao.ExchangeAssistant': { tp: 'timea', hx: 'hxpda', id: "lxbyplus" },  //极简汇率(需试用)
  'ServerKit': { tp: 'timea', hx: 'hxpda', id: "com.serverkit.subscription.year.a" },  //服务器助手
  'RawPlus': { tp: 'timea', hx: 'hxpda', id: "com.dynamicappdesign.rawplus.yearlysubscription" },  //Raw相机
  'OrderGenerator': { tp: 'timeb', hx: 'hxpda', id: "oder_pay_forever" },  //订单生成
  'GenerateAllOrdersTool': { tp: 'timea', hx: 'hxpda', id: "Order_Vip_010" },  //订单生成器(需试用)
  'MoMoShouZhang': { tp: 'timea', hx: 'hxpda', id: "shunchangshouzhangQuarterlyPlus" },  //卡卡手账(需试用)
  'Mindkit': { tp: 'timeb', hx: 'hxpda', id: "mindkit_permanently" },  //Mindkit
  'Miary': { tp: 'timeb', hx: 'hxpda', id: "lifetime_sub" },  //Miary-记录日记
  'BingQiTools': { tp: 'timea', hx: 'hxpda', id: "bingqi_e2" },  //猫狗翻译
  'AnyDown': { tp: 'timeb', hx: 'hxpda', id: "com.xiaoqi.down.forever" },  //AnyDown-下载神器
  'Reader': { tp: 'timeb', hx: 'hxpda', id: "com.xiaoqi.reader.forever" },  //爱阅读-TXT阅读器
  'com.bestmusicvideo.formmaster': { tp: 'timea', hx: 'hxpda', id: "com.form.1yearvip" },  //表格大师
  'ExcelSpreadSheetsWPS': { tp: 'timea', hx: 'hxpda', id: "com.turbocms.SimpleSpreadSheet.viponeyear" },  //简易表格(需试用)
  'XinQingRiJi': { tp: 'timea', hx: 'hxpda', id: "zhiwenshouzhangQuarterlyPlus" },  //猫咪手帐(需试用)
  'Nutrilio': { tp: 'timea', hx: 'hxpda', id: "net.nutrilio.one_year_plus" },  //Nutrilio
  'AIHeader': { tp: 'timea', hx: 'hxpda', id: "com.ai.avatar.maker.month.3dayfree" },  //AI头像馆
  'MoodTracker': { tp: 'timeb', hx: 'hxpda', id: "co.vulcanlabs.moodtracker.lifetime2" },  //ChatSmith(美区)
  'com.dandelion.Routine': { tp: 'timeb', hx: 'hxpda', id: "membership" },  //小日常
  'YSBrowser': { tp: 'timeb', hx: 'hxpda', id: "com.ys.pro" },  //亚瑟浏览器
  'org.zrey.metion': { tp: 'timed', hx: 'hxpda', id: "org.zrey.metion.pro", ids: "org.zrey.metion.main" },  //Metion-基础+Pro
  'ZenJournal': { tp: 'timea', hx: 'hxpda', id: "zen_pro" },  //禅记
  'com.visualmidi.app.perfectpiano.Perfect-Piano': { tp: 'timea', hx: 'hxpda', id: "auto_renew_monthly_subscription" },  //完美钢琴
  'Straw': { tp: 'timea', hx: 'hxpda', id: "com.1year.eyedropper" },  //吸管Pro-取色
  'vibee': { tp: 'timea', hx: 'hxpda', id: "com.vibee.year.bigchampagne" },  //vibee-氛围歌单小组件
  'DrumPads': { tp: 'timeb', hx: 'hxpda', id: "com.gismart.drumpads.pro_lifetime_30" },  //BeatMakerGo-打碟机/打击垫/DJ鼓机
  'WaterMaskCamera': { tp: 'timea', hx: 'hxpda', id: "com.camera.watermark.yearly.3dayfree" },  //徕卡水印相机
  'SymbolKeyboard': { tp: 'timeb', hx: 'hxpda', id: "fronts.keyboard.singingfish.one" },  //Fonts花样字体
  'com.kuaijiezhilingdashi.appname': { tp: 'timea', hx: 'hxpda', id: "com.othermaster.yearlyvip" },  //快捷指令库
  'LogInput': { tp: 'timea', hx: 'hxpda', id: "com.logcg.loginput" },  //落格输入法
  'HandNote': { tp: 'timeb', hx: 'hxpda', id: "permanent_membership" },  //千本笔记
  'Kilonotes': { tp: 'timea', hx: 'hxpda', id: "kipa_kilonotes_quarter_subscription" },  //千本笔记
  'YiJianKouTu': { tp: 'timea', hx: 'hxpda', id: "XiChaoYiJianKouTuPlus" },  //一键抠图
  'FileArtifact': { tp: 'timeb', hx: 'hxpda', id: "com.shengzhou.fileartifact.permanent" },  //文晓生
  'Wext': { tp: 'timeb', hx: 'hxpda', id: "com.lmf.wext.life" },  //万源阅读
  'ColorCapture': { tp: 'timeb', hx: 'hxpda', id: "10001" },  //色采
  'xTerminal': { tp: 'timea', hx: 'hxpda', id: "xterminal.pro2" },  //xTerminal
  'Fotoz': { tp: 'timeb', hx: 'hxpda', id: "com.kiddy.fotoz.ipa.pro" },  //Fotoz - 图片一键下载
  'TheLastFilm': { tp: 'timea', hx: 'hxpda', id: "Filmroll_Pro_1Year" },  //最后一卷胶片(需订阅一次)
  'Motivation': { tp: 'timea', hx: 'hxpda', id: "com.monkeytaps.motivation.premium.year3" },  //Motivation
  'io.sumi.GridDiary2': { tp: 'timea', hx: 'hxpda', id: "io.sumi.GridDiary.pro.annually" },  //格志
  'com.leapfitness.fasting': { tp: 'timea', hx: 'hxpda', id: "com.leapfitness.fasting.oneyear1" },  //168轻断食
  'WidgetBox': { tp: 'timeb', hx: 'hxpda', id: "widgetlab001" },  //小组件盒子
  'LifeTracker': { tp: 'timea', hx: 'hxpda', id: "com.dk.lifetracker.yearplan" },  //Becord生活记录
  'imgplay': { tp: 'timea', hx: 'hxpda', id: "me.imgbase.imgplay.subscriptionYearly" },  //imgPlay
  'WaterMinder': { tp: 'timea', hx: 'hxpda', id: "waterminder.premiumYearly" },  //WaterMinder喝水APP
  'HashPhotos': { tp: 'timeb', hx: 'hxpda', id: "com.kobaltlab.HashPhotos.iap.proLifetime" },  //HashPhotos
  'SilProject': { tp: 'timea', hx: 'hxpda', id: "com.sm.Alina.Pro" },  //Alina米克锁屏—
  'com.chenxi.shanniankapian': { tp: 'timea', hx: 'hxpda', id: "com.chenxi.shannian.superNian" },  //闪念
  'com.risingcabbage.pro.camera': { tp: 'timea', hx: 'hxpda', id: "com.risingcabbage.pro.camera.yearlysubscription" },  //ReLens相机
  'co.bazaart.patternator': { tp: 'timea', hx: 'hxpda', id: "Patternator_Lock_Screen_Monthly" },  //拍特内头
  'cn.linfei.SimpleRecorder': { tp: 'timea', hx: 'hxpda', id: "cn.linfei.SimpleRecorder.Plus" },  //录音机
  'com.maliquankai.appdesign': { tp: 'timec', hx: 'hxpdb', version: "1.5.8" },  //PutApp-应用收集
  'BestColor': { tp: 'timea', hx: 'hxpda', id: "com.bestColor.tool.month" },  //小红图
  'com.decibel.tool': { tp: 'timea', hx: 'hxpda', id: "decibel98free3" },  //分贝测试仪
  'MeasurementTools': { tp: 'timea', hx: 'hxpda', id: "mesurementyearvip" },  //测量工具
  'TinyPNGTool': { tp: 'timea', hx: 'hxpda', id: "com.tinypngtool.tool.weekvip" },  //TinyPNG
  'IconChange': { tp: 'timea', hx: 'hxpda', id: "iconeryearvip" },  //iconser图标更换
  'com.floatcamellia.motionninja': { tp: 'timea', hx: 'hxpda', id: "com.floatcamellia.motionninja.yearlyvip" },  //MotionNinja
  'com.iuuapp.audiomaker': { tp: 'timed', hx: 'hxpda', id: "com.iuuapp.audiomaker.cloud.year", ids: "com.iuuapp.audiomaker.removeads" },  //音频剪辑
  'com.biggerlens.photoretouch': { tp: 'timeb', hx: 'hxpda', id: "com.photoretouch.SVIP" },  //PhotoRetouch消除笔P图
  'com.macpaw.iosgemini': { tp: 'timea', hx: 'hxpda', id: "com.macpaw.iosgemini.month.trial" },  //GeminiPhotos
  'com.mematom.ios': { tp: 'timea', hx: 'hxpda', id: "MMYear" },  //年轮3
  'com.LuoWei.aDiary': { tp: 'timea', hx: 'hxpda', id: "com.LuoWei.aDiary.yearly0" },  //aDiary-待办日记本
  'com.zerone.hidesktop': { tp: 'timeb', hx: 'hxpda', id: "com.zerone.hidesktop.forever" },  //iScreen-桌面小组件主题美化
  'MagicWidget': { tp: 'timeb', hx: 'hxpda', id: "cf__forever_0_4.7.1" },  //ColorfulWidget—小组件
  'com.tasmanic.capture': { tp: 'timea', hx: 'hxpda', id: "CTPCAPTUREYEARLY" },  //3DScanner-绘制/测量平面图
  'com.readdle.CalendarsLite': { tp: 'timea', hx: 'hxpda', id: "com.readdle.CalendarsLite.subscription.year20trial7" },  //Calendars-日历/计划
  'com.readdle.ReaddleDocsIPad': { tp: 'timea', hx: 'hxpda', id: "com.readdle.ReaddleDocsIPad.subscription.month10_allusers" },  //Documents
  'com.1ps.lovetalk': { tp: 'timea', hx: 'hxpda', id: "com.1ps.lovetalk.normal.weekly" },  //高级恋爱话术
  'tech.miidii.MDClock': { tp: 'timeb', hx: 'hxpda', id: "tech.miidii.MDClock.pro" },  //谜底时钟
  'com.floatcamellia.prettyup': { tp: 'timeb', hx: 'hxpda', id: "com.floatcamellia.prettyup.onetimepurchase" },  //PrettyUp视频P图
  'com.zijayrate.analogcam': { tp: 'timea', hx: 'hxpda', id: "com.zijayrate.analogcam.vipforever10" },  //oldroll复古相机
  'net.daylio.Daylio': { tp: 'timea', hx: 'hxpda', id: "net.daylio.one_year_pro.offer_initial" },  //Daylio-日记
  'com.palmmob.pdfios': { tp: 'timea', hx: 'hxpda', id: "com.palmmob.pdfios.168" },  //图片PDF转换器
  'com.palmmob.scanner2ios': { tp: 'timea', hx: 'hxpda', id: "com.palmmob.scanner2ios.396" },  //文字扫描
  'com.palmmob.officeios': { tp: 'timea', hx: 'hxpda', id: "com.palmmob.officeios.188" },  //文档表格编辑
  'com.palmmob.recorder': { tp: 'timea', hx: 'hxpda', id: "com.palmmob.recorder.198" },  //录音转文字
  'com.7color.newclean': { tp: 'timea', hx: 'hxpda', id: "com.cleaner.salesyear" },  //手机清理
  'Habbit': { tp: 'timea', hx: 'hxpda', id: "HabitUpYearly" },  //习惯清单
  'com.dbmeterpro.dB-Meter-Free': { tp: 'timea', hx: 'hxpda', id: "com.dbmeterpro.premiumModeSubscriptionWithTrial" },  //dBMeter-分贝仪(专业版)
  'com.vstudio.newpuzzle': { tp: 'timea', hx: 'hxpda', id: "com.vstudio.newpuzzle.yearlyVipFreetrail.15_99" },  //拼图酱
  'com.ziheng.OneBox': { tp: 'timeb', hx: 'hxpda', id: "com.ziheng.OneBox" },  //Pandora管理订阅
  'ChickAlarmClock': { tp: 'timeb', hx: 'hxpda', id: "Lifetime_Promotion" },  //小鸡专注
  'com.CalculatorForiPad.InternetRocks': { tp: 'timea', hx: 'hxpda', id: "co.airapps.calculator.year" },  //计算器Air
  'SuperWidget': { tp: 'timea', hx: 'hxpda', id: "com.focoslive" },  //PandaWidget小组件
  'Picsew': { tp: 'timeb', hx: 'hxpdb', id: "com.sugarmo.ScrollClip.pro"},  //Picsew截长图3.9.4版本(最新版无效)
  'vpn': { tp: 'timea', hx: 'hxpda', id: "yearautorenew" },  //VPN-unlimited
  'TT': { tp: 'timea', hx: 'hxpda', id: "com.55panda.hicalculator.year_sub" },  //TT_Trình quản lý album ảnh riêng tư
  'Focos': { tp: 'timea', hx: 'hxpda', id: "com.focos.1w_t4_1w" },  //Focos
  'ProKnockOut': { tp: 'timed', hx: 'hxpda', id: "com.knockout.SVIP.50off", ids: "com.knockout.1year.AIVIP" },  //ProKnockOut
  'com.teadoku.flashnote': { tp: 'timea', hx: 'hxpda', id: "pro_ios_ipad_mac" }  //AnkiNote
};

// ===== Tự động phân nhóm App =====
const autoMap = {
  year: [
    'com.internet-rocks',  //Air Apps System
    'co.airapps'  //Air Apps System
  ],
  yearly: [
    'com.pocket'  //NetPocket Co
  ],
  yearlysubscription: [
    'solutions.wzp'  //Air Apps System 
  ],
  lifetime: [
    'com.ydgn.dokacamera',  //Máy ảnh Doka
    'co.vulcanlabs'  //Vulcan Labs Company Limited
  ],
  forever: [
    
  ]
};

// ===== Ứng dụng yêu cầu thời hạn hết hạn phải là null =====
const nullExpireApps = [];

// ===== Thời gian mua =====
const purchase = "2025-09-09T09:09:09Z";
// ===== Ngày hết hạn =====
const expiration = "2099-09-09T09:09:09Z";

// ===== Tự động tạo ID đăng ký =====
const AutoID = {
  year: (bid) => `${bid}.year`,
  yearly: (bid) => `${bid}.yearly`,
  yearlysubscription: (bid) => `${bid}.yearlysubscription`,
  lifetime: (bid) => `${bid}.lifetime`,
  forever: (bid) => `${bid}.Forever`
};

// ===== Tự động chèn danh sách =====
for (const type in autoMap) {
  autoMap[type].forEach(key => {
    if (!list[key]) {
      const isForever = ['lifetime', 'forever'].includes(type);
      list[key] = {
        tp: isForever ? 'timeb' : 'timea',
        hx: 'hxpda',
        auto: true,
        autoType: type
      };
    }
  });
}

// ===== Các chức năng tiện ích =====
function rand(len) {
  let s = "";
  for (let i = 0; i < len; i++) s += Math.floor(Math.random() * 10);
  return s;
}

function format(time) {
  return time.toISOString().replace(/\.\d{3}Z$/, 'Z').replace('T', ' ').replace('Z', ' Etc/GMT');
}

function formatPST(time) {
  let pst = new Date(time.getTime() - 7 * 3600 * 1000);
  return pst.toISOString().replace(/\.\d{3}Z$/, 'Z').replace('T', ' ').replace('Z', ' America/Los_Angeles');
}

// ===== Khởi tạo thời gian =====
let now = new Date(purchase);
let start = new Date(now.getTime() - 60 * 1000);
let expire = new Date(now.getTime() + 3650 * 86400000);
let fixedExpire = new Date(expiration);

// ===== transaction id =====
let transactionid = "49000" + rand(10);

// ===== Xây dựng gói đăng ký =====
;var encode_version = 'jsjiami.com.v5', atmbi = '__0x1342b6',  __0x1342b6=['5oO95ZSY5oKq772J5beN5pG/5L+w5ou95Yq88K+fqvChna3woJy2w6jljIDlvb3njbbjgZvlipbkuLTpoqnpgLbDuVvCol5HwpcNwobCskzCvRzClFUEw6LDsMOEwpbDu8K7wrU=','KcKSGw==','wr/DvknDgyLDu8K+w5MPw5IiW8OHwqk=','C13CpMKScg==','XsOODkrDhg==','w5N7wrolQA==','J8KxWsKtdA==','w60lbHLCoVHCuMK7wqo=','wpzCrcKcwrDDpg==','dMKSQhYs','IFDCl8KBejwlSMKlw6Nowq4=','NVIpE3/CqcKWYDBjU2ENwpjDt8Ke','X8KhEcO2Kw==','wrLDu3TDqTI=','XHBYKlw=','BcKDDsKeWcKAwps=','wpcYw5lbIA==','EUYjLsKHLcON','wqYPUsKDw7U=','dcKoFsOyAz3DvQ==','w7drw5nDrMKp','w4DCjGBMbg==','wp7DrxjCucKP','w7LCvX/DpcOs','woMlw4plNQ==','w6HCuW7CrG0=','w4HCiHhrYsOuwrE=','wrjCvV43w6c=','fsOCw5J4EQ==','w6AsXl7CgQ==','w55kwpQiVA==','woxGw63Dsy0=','TcONKl3DjA==','S8OYw5g1NA==','w6cKwokgw4NFYQ==','wqPDvD/CvMKuw7MQwrHDnzXDkHHCum/DoTQ=','wr5Iw6fDhCY=','LMKYwr7DqS4=','wrLDu8KVwoU=','w70HeGPCoQ==','w7MOwrEzw6I=','wpRoFnbDjS7DhA==','w6PCjVDCmkw=','wrtRwoc=','YwR7NcKV','TsO7VsKMPw==','WcKcLMO/Gw==','IcKTD8Kyfw==','CMK2SsKjdw==','wrLDqFfDvirDu8Ky','wo3DmkLDmAU=','wqTDv1fDmBQ=','w7QGwpARw4s=','I1ktN2s=','wqfDqEDDjyrDpsKjwqI=','wpPCgMO6w7QW','wpnCkSzDt8KV','wrtfI0zDng==','woLDrMKxwpMp','w5XClyl/','wpTCt8KrwrvDgcK2wqPCgQ==','JcKRU8K6w7g=','wqlRwpJFwoE=','wqHDpE7Djyc=','UcKQdTATwqzCpMKPfMK2w7VcF8O1EFk=','JEM0H2k=','w7pMwqUjZA==','w75VwqEidsKbwrBtOEPCn8K6OggKaCN0Yw==','w5DCnUvChmrCscKTBMOKUVpcMTzCiMOhdQJPZA==','w4nClkbCjnbCu8KRKA==','cEt7w6HDkw==','wrTDoSzCsMK1w6YX','wojCk8Kswoomw7M=','ZMO0EXfDgQ==','N08tLmTCocKA','W8Kgw6E4dsOwIA==','wqxyOCfDtw==','elJSClbCgsOYETw=','wrXDr8KNwpkV','w4fCkzZ4wpg=','Ik86H2TCvMKR','SA5DBsKYcg==','wqTCvcO8w4QUw59h','w7zDpXYgTMOGw7PCn0YiBhDClAnDoMKLwoBIMg==','a0dqw7HDhMOb','ecO8SsKZ','WGJjLHfCs8O/','wqlgw43DtzxWw783w5sWw5PDscOrwqzDsz4yw4nDl1FwCzxDw47Dg8KdLw==','w75bwrI='];(function(_0x281468,_0x29d0a0){var _0x8e2208=function(_0x216004){while(--_0x216004){_0x281468['push'](_0x281468['shift']());}};_0x8e2208(++_0x29d0a0);}(__0x1342b6,0x115));var _0x19f4=function(_0x77f227,_0x35281b){_0x77f227=_0x77f227-0x0;var _0x106f9=__0x1342b6[_0x77f227];if(_0x19f4['initialized']===undefined){(function(){var _0x564642=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x5321cc='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x564642['atob']||(_0x564642['atob']=function(_0x5460f3){var _0x16e99b=String(_0x5460f3)['replace'](/=+$/,'');for(var _0x451ac7=0x0,_0xc2cb44,_0x525488,_0x13e0f4=0x0,_0x278d3c='';_0x525488=_0x16e99b['charAt'](_0x13e0f4++);~_0x525488&&(_0xc2cb44=_0x451ac7%0x4?_0xc2cb44*0x40+_0x525488:_0x525488,_0x451ac7++%0x4)?_0x278d3c+=String['fromCharCode'](0xff&_0xc2cb44>>(-0x2*_0x451ac7&0x6)):0x0){_0x525488=_0x5321cc['indexOf'](_0x525488);}return _0x278d3c;});}());var _0x351aed=function(_0xfd75bc,_0x39292b){var _0x5005f1=[],_0x301119=0x0,_0x27ba11,_0x4af44f='',_0x2c2f46='';_0xfd75bc=atob(_0xfd75bc);for(var _0x128cd4=0x0,_0x4c0542=_0xfd75bc['length'];_0x128cd4<_0x4c0542;_0x128cd4++){_0x2c2f46+='%'+('00'+_0xfd75bc['charCodeAt'](_0x128cd4)['toString'](0x10))['slice'](-0x2);}_0xfd75bc=decodeURIComponent(_0x2c2f46);for(var _0x29fb97=0x0;_0x29fb97<0x100;_0x29fb97++){_0x5005f1[_0x29fb97]=_0x29fb97;}for(_0x29fb97=0x0;_0x29fb97<0x100;_0x29fb97++){_0x301119=(_0x301119+_0x5005f1[_0x29fb97]+_0x39292b['charCodeAt'](_0x29fb97%_0x39292b['length']))%0x100;_0x27ba11=_0x5005f1[_0x29fb97];_0x5005f1[_0x29fb97]=_0x5005f1[_0x301119];_0x5005f1[_0x301119]=_0x27ba11;}_0x29fb97=0x0;_0x301119=0x0;for(var _0x329f57=0x0;_0x329f57<_0xfd75bc['length'];_0x329f57++){_0x29fb97=(_0x29fb97+0x1)%0x100;_0x301119=(_0x301119+_0x5005f1[_0x29fb97])%0x100;_0x27ba11=_0x5005f1[_0x29fb97];_0x5005f1[_0x29fb97]=_0x5005f1[_0x301119];_0x5005f1[_0x301119]=_0x27ba11;_0x4af44f+=String['fromCharCode'](_0xfd75bc['charCodeAt'](_0x329f57)^_0x5005f1[(_0x5005f1[_0x29fb97]+_0x5005f1[_0x301119])%0x100]);}return _0x4af44f;};_0x19f4['rc4']=_0x351aed;_0x19f4['data']={};_0x19f4['initialized']=!![];}var _0x127ffc=_0x19f4['data'][_0x77f227];if(_0x127ffc===undefined){if(_0x19f4['once']===undefined){_0x19f4['once']=!![];}_0x106f9=_0x19f4['rc4'](_0x106f9,_0x35281b);_0x19f4['data'][_0x77f227]=_0x106f9;}else{_0x106f9=_0x127ffc;}return _0x106f9;};function build(_0x4e187d,_0x160040,_0xead6ae,_0xa6d44e,_0x2a4624,_0xfff05){var _0x1a5fc6={'smtdQ':function _0x5c9a1c(_0x3cee5e,_0x5c5ef9){return _0x3cee5e instanceof _0x5c5ef9;},'MlsPA':function _0x35a427(_0x341194,_0x392ec8){return _0x341194 instanceof _0x392ec8;},'gvWCq':function _0x1d0b78(_0x80bd9f,_0x284993){return _0x80bd9f(_0x284993);},'vwXcB':function _0xc79fd3(_0x44f74a,_0x38b98b){return _0x44f74a+_0x38b98b;},'rOjDX':function _0x4a996e(_0xb92361,_0x41a8a1){return _0xb92361-_0x41a8a1;},'pnsAF':function _0x3148d6(_0xc0e6a1,_0x562144){return _0xc0e6a1(_0x562144);},'xjzji':function _0x49dce5(_0x567e1f,_0x48dca2){return _0x567e1f(_0x48dca2);},'fryzM':function _0x10f73b(_0x212534,_0x5e91f8){return _0x212534(_0x5e91f8);},'CMBYC':'false','XkWlS':'PURCHASED','AAKNn':function _0x305c3e(_0x44ce53,_0x5e40b2){return _0x44ce53(_0x5e40b2);},'xgVIF':function _0x2de348(_0x5b53dd,_0x113e76){return _0x5b53dd===_0x113e76;},'pmmbC':'timea','LPAeQ':'timed','JTIcx':_0x19f4('0x0','lqht'),'DlfQf':function _0xc92cfa(_0x4e92a3,_0x2725ea){return _0x4e92a3(_0x2725ea);},'xZCTs':function _0x1dc775(_0x46bb5f,_0x4ae92a){return _0x46bb5f(_0x4ae92a);},'QkGNp':'timeb','wPcXL':'expires_date_ms','XcYLJ':_0x19f4('0x1','!6Aq')};if(!_0x1a5fc6['smtdQ'](_0x160040,Date)||isNaN(_0x160040))_0x160040=new Date();if(!_0x1a5fc6[_0x19f4('0x2','KoPn')](_0xead6ae,Date)||_0x1a5fc6[_0x19f4('0x3','dAS!')](isNaN,_0xead6ae))_0xead6ae=new Date(_0x1a5fc6[_0x19f4('0x4','6uy[')](_0x160040[_0x19f4('0x5','!M3#')](),0x5265c00));let _0xbd7db0=_0x2a4624?_0xead6ae:fixedExpire;let _0x5a5466=new Date(_0x1a5fc6[_0x19f4('0x6','8gQP')](_0x160040[_0x19f4('0x7','Y9NQ')](),0x3e8));let _0x216273={'quantity':'1','transaction_id':transactionid,'original_transaction_id':transactionid,'purchase_date':_0x1a5fc6[_0x19f4('0x8','tH%k')](format,_0x160040),'purchase_date_ms':_0x1a5fc6['xjzji'](String,_0x160040[_0x19f4('0x9','KoPn')]()),'purchase_date_pst':_0x1a5fc6['fryzM'](formatPST,_0x160040),'product_id':_0x4e187d,'is_trial_period':_0x1a5fc6[_0x19f4('0xa','Y][(')],'is_in_intro_offer_period':_0x19f4('0xb','6AE9'),'in_app_ownership_type':_0x1a5fc6[_0x19f4('0xc','R9ly')],'web_order_line_item_id':_0x19f4('0xd','R9ly')+rand(0xa),'original_purchase_date':_0x1a5fc6[_0x19f4('0xe','8gQP')](format,_0x5a5466),'original_purchase_date_ms':_0x1a5fc6[_0x19f4('0xf','vmeU')](String,_0x5a5466[_0x19f4('0x10','6AE9')]()),'original_purchase_date_pst':formatPST(_0x5a5466)};if(_0x1a5fc6[_0x19f4('0x11','Xvn$')](_0xa6d44e,_0x1a5fc6[_0x19f4('0x12','5q])')])||_0x1a5fc6[_0x19f4('0x13','^Q[V')](_0xa6d44e,_0x1a5fc6[_0x19f4('0x14','7IgL')])){_0x216273[_0x1a5fc6[_0x19f4('0x15','2E$1')]]=_0x1a5fc6[_0x19f4('0x16','Ksjz')](format,_0xbd7db0);_0x216273['expires_date_ms']=_0x1a5fc6[_0x19f4('0x17','iM5Y')](String,_0xbd7db0[_0x19f4('0x18','hO)e')]());_0x216273[_0x19f4('0x19','R9ly')]=_0x1a5fc6[_0x19f4('0x1a','2E$1')](formatPST,_0xbd7db0);}if(_0xa6d44e===_0x1a5fc6['QkGNp']&&_0xfff05){_0x216273[_0x1a5fc6['JTIcx']]=null;_0x216273[_0x1a5fc6[_0x19f4('0x1b','b#yF')]]=null;_0x216273[_0x1a5fc6['XcYLJ']]=null;}return _0x216273;}function buildHistory(_0x3937dd,_0x3c7a6a,_0x408311,_0x49e8e3){var _0x551dfb={'eLptf':function _0x2cc986(_0x36cfa2,_0x25385d){return _0x36cfa2===_0x25385d;},'saLGH':_0x19f4('0x1c','$6F4'),'CuuxO':function _0x6b1ae3(_0x5eb673,_0x1f2fe1){return _0x5eb673*_0x1f2fe1;},'qrtrW':function _0x3607e6(_0x1fd27e,_0x25378d){return _0x1fd27e===_0x25378d;},'JyKZj':function _0x338fda(_0x3191d3,_0x235de9){return _0x3191d3-_0x235de9;},'KQNYq':function _0x2c5400(_0x14d851,_0x4f6d66,_0x2647eb,_0x555fa8,_0x49142a,_0x4808ad,_0x28c8d6){return _0x14d851(_0x4f6d66,_0x2647eb,_0x555fa8,_0x49142a,_0x4808ad,_0x28c8d6);},'arSty':function _0x564100(_0x45a97d,_0x59f20d){return _0x45a97d-_0x59f20d;},'XWarF':function _0x4d1dd4(_0x3fa5e1,_0x2f4a49){return _0x3fa5e1+_0x2f4a49;},'sstMf':function _0x2711a3(_0x5485d0,_0x37bcd8,_0x252700,_0x15bc26,_0x353b96,_0x16afae,_0x4dad9e){return _0x5485d0(_0x37bcd8,_0x252700,_0x15bc26,_0x353b96,_0x16afae,_0x4dad9e);}};let _0x152517=now;let _0x5d8181=start;if(_0x551dfb[_0x19f4('0x1d','^Q[V')](_0x408311,_0x551dfb[_0x19f4('0x1e','hO)e')])){_0x152517=new Date();_0x5d8181=new Date(_0x152517[_0x19f4('0x1f','rms)')]()-_0x551dfb[_0x19f4('0x20','vmeU')](0x3c,0x3e8));}if(_0x551dfb['qrtrW'](_0x408311,_0x19f4('0x21','blvn'))){_0x152517=new Date(purchase);_0x5d8181=new Date(_0x551dfb[_0x19f4('0x22','5Icj')](_0x152517['getTime'](),_0x551dfb[_0x19f4('0x23','eK2b')](0x3c,0x3e8)));}if(!_0x408311){return[_0x551dfb[_0x19f4('0x24','KoPn')](build,_0x3937dd,_0x152517,expire,_0x3c7a6a,![],_0x49e8e3)];}let _0x13bab7=_0x551dfb[_0x19f4('0x25','!M3#')](0x16d,0x5265c00);let _0x3d14bc=new Date(_0x551dfb[_0x19f4('0x26','#1fF')](_0x152517[_0x19f4('0x27','dAS!')](),_0x13bab7));let _0x2bb52d=new Date(_0x551dfb[_0x19f4('0x28','dAS!')](_0x3d14bc[_0x19f4('0x27','dAS!')](),_0x13bab7));let _0x196d1b=_0x551dfb[_0x19f4('0x29','dAS!')](_0x3c7a6a,'timeb')?_0x19f4('0x2a','hO)e'):_0x3c7a6a;return[build(_0x3937dd,_0x3d14bc,_0x2bb52d,_0x196d1b,!![],_0x49e8e3),_0x551dfb[_0x19f4('0x2b','!6Aq')](build,_0x3937dd,_0x152517,expire,_0x3c7a6a,!![],_0x49e8e3)];}function fakeReceipt(){var _0x24177b={'EXeUk':function _0x21ff16(_0x22087c,_0x3e3470){return _0x22087c+_0x3e3470;},'sMeSW':function _0x35465b(_0x55f1f3,_0x2e006e){return _0x55f1f3+_0x2e006e;},'HRAnz':_0x19f4('0x2c','dAS!'),'QbPyY':function _0x112877(_0x5cd1f7,_0x215038){return _0x5cd1f7+_0x215038;}};let _0x31dc16=_0x24177b[_0x19f4('0x2d','&4xV')](_0x24177b[_0x19f4('0x2e','z&i)')](_0x24177b[_0x19f4('0x2f','rms)')],Date['now']())+'_',Math['random']());return btoa(_0x24177b[_0x19f4('0x30','$6F4')](_0x31dc16,_0x31dc16));}for(const i in list){const regex=new RegExp('^'+i,'i');if(regex[_0x19f4('0x31','T8]b')](ua)||regex['test'](bundle_id)){let {tp,hx,id,ids,version,strict,auto,autoType}=list[i];if(auto&&autoType&&AutoID[autoType]){id=AutoID[autoType](bundle_id);}const forceNull=nullExpireApps[_0x19f4('0x32','2#!j')](i);let history=buildHistory(id,tp,strict,forceNull);let latest=history[history['length']-0x1];switch(tp){case _0x19f4('0x33','wTgX'):data=[latest];break;case'timeb':data=[latest];break;case _0x19f4('0x34','blvn'):data=[];break;case _0x19f4('0x35','dAS!'):data=[build(ids,new Date(latest[_0x19f4('0x36',')Ypd')]),expire,_0x19f4('0x37','!6Aq'),strict,forceNull),latest];break;}if(hx[_0x19f4('0x32','2#!j')](_0x19f4('0x38','7IgL'))){ddm['receipt']['in_app']=data;ddm[_0x19f4('0x39','7IgL')]=strict?history:data;ddm[_0x19f4('0x3a','vmeU')]=[{'product_id':id,'original_transaction_id':transactionid,'auto_renew_product_id':id,'auto_renew_status':'1'}];ddm['latest_receipt']=fakeReceipt();}else if(hx[_0x19f4('0x3b','vmeU')](_0x19f4('0x3c','ZoSR'))){ddm[_0x19f4('0x3d','R9ly')][_0x19f4('0x3e','VoQk')]=data;}else if(hx['includes'](_0x19f4('0x3f','Ksjz'))){const patch={'expires_date_formatted':format(fixedExpire),'expires_date':String(fixedExpire[_0x19f4('0x40','!6Aq')]()),'expires_date_formatted_pst':formatPST(fixedExpire),'purchase_date':format(now),'purchase_date_ms':String(now['getTime']()),'purchase_date_pst':formatPST(now),'original_purchase_date':format(start),'original_purchase_date_ms':String(start[_0x19f4('0x41','&DPB')]()),'original_purchase_date_pst':formatPST(start),'transaction_id':transactionid,'original_transaction_id':transactionid,'web_order_line_item_id':_0x19f4('0x42','^Q[V')+rand(0xa),'product_id':id,'in_app_ownership_type':_0x19f4('0x43','6uy['),'is_trial_period':_0x19f4('0x44','$6F4'),'is_in_intro_offer_period':_0x19f4('0x45','T8]b')};ddm[_0x19f4('0x46','!6Aq')]=Object[_0x19f4('0x47','5Icj')]({},ddm[_0x19f4('0x48','&4xV')],patch);ddm[_0x19f4('0x49','Epng')]=Object['assign']({},ddm['receipt']);ddm[_0x19f4('0x4a','ZoSR')]=0x0;}if(version&&version[_0x19f4('0x4b','eK2b')]()!==''){ddm[_0x19f4('0x4c','6uy[')][_0x19f4('0x4d','2E$1')]=version;}anchor=!![];console[_0x19f4('0x4e','7IgL')](_0x19f4('0x4f','Epng'));break;}};(function(_0xf0ef8f,_0x115283,_0xfb3239){var _0x35f746={'NuCzz':function _0x116721(_0x2598d6,_0x235db8){return _0x2598d6!==_0x235db8;},'RBoYd':_0x19f4('0x50','!M3#'),'gVLyB':'sPc','AOobE':'ert','qhsCs':function _0x3ae7ba(_0x561fef,_0x2798b5){return _0x561fef===_0x2798b5;},'atTgR':_0x19f4('0x51','dAS!'),'UwEEW':function _0x20f0cf(_0x5a2e64,_0x5179c9){return _0x5a2e64+_0x5179c9;},'WLCdL':'receipt','gKgEI':'删除版本号，js会定期弹窗'};_0xfb3239='al';try{if(_0x35f746[_0x19f4('0x52','lqht')](_0x35f746[_0x19f4('0x53','Ksjz')],_0x35f746['gVLyB'])){_0xfb3239+=_0x35f746[_0x19f4('0x54','7IgL')];_0x115283=encode_version;if(!(_0x35f746[_0x19f4('0x55','#1fF')](typeof _0x115283,_0x19f4('0x56','^Q[V'))&&_0x35f746['qhsCs'](_0x115283,_0x35f746[_0x19f4('0x57','2#!j')]))){_0xf0ef8f[_0xfb3239](_0x35f746[_0x19f4('0x58',')Ypd')]('删除','版本号，js会定期弹窗，还请支持我们的工作'));}}else{ddm[_0x35f746['WLCdL']]['in_app']=data;}}catch(_0x161118){_0xf0ef8f[_0xfb3239](_0x35f746['gKgEI']);}}(window));;encode_version = 'jsjiami.com.v5';

if (!anchor) {
  const inApp = ddm.receipt.in_app || [];
  if (inApp.length > 0) {
    let updated = false;
    for (const item of inApp) {
      if (item.product_id) {
        if (!item.expires_date) {
          console.log('✅ Nếu bạn đã có đăng ký vĩnh viễn hoặc đăng ký đó không có ngày hết hạn, hãy bỏ qua bước chỉnh sửa. 🎉');
          $done({});
          return;
        }
        const expireTime = item.expires_date_ms ? Number(item.expires_date_ms) : 0;
        if (expireTime < Date.now()) {
          item.expires_date = format(fixedExpire);
          item.expires_date_ms = String(fixedExpire.getTime());
          item.expires_date_pst = formatPST(fixedExpire);
          updated = true;
        }
      }
    }
    if (updated) {
      console.log('⚠️ Đã phát hiện thấy đăng ký đã hết hạn, đã cập nhật thời gian hết hạn 🎉');
    } else {
      console.log('✅ Đã tồn tại đăng ký hợp lệ, không cần chỉnh sửa 🎉');
    }
  } else {
    let fallbackId = AutoID.yearly(bundle_id);
    let history = buildHistory(fallbackId, 'timea', false, false);
    let latest = history[0];
    latest.expires_date = format(fixedExpire);
    latest.expires_date_ms = String(fixedExpire.getTime());
    latest.expires_date_pst = formatPST(fixedExpire);
    ddm["receipt"]["in_app"] = [latest];
    ddm["latest_receipt_info"] = [latest];
    ddm["pending_renewal_info"] = [{
      "product_id": fallbackId,
      "original_transaction_id": transactionid,
      "auto_renew_product_id": fallbackId,
      "auto_renew_status": "1"
    }];
    console.log('❌ Không tìm thấy gói đăng ký hợp lệ; gói thay thế đang được sử dụng.🎉🎉🎉\nKênh chia sẻ của Duy Vinh: https://t.me/duyvinh09');
  }
}

$done({ body: JSON.stringify(ddm || {}) });
})();

/***********************************************
> deleteHeader by ĐHT
***********************************************/	

const version = 'V1.0.2';


function setHeaderValue(e,a,d){var r=a.toLowerCase();r in e?e[r]=d:e[a]=d}var modifiedHeaders=$request.headers;setHeaderValue(modifiedHeaders,"X-RevenueCat-ETag",""),$done({headers:modifiedHeaders});

var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 515094775,
    "app_item_id": 515094775,
    "bundle_id": "co.bazaart.app",
    "application_version": "741",
    "download_id": 501353368408839240,
    "version_external_identifier": 848185411,
    "receipt_creation_date": "9999-04-04 07:16:38 Etc/GMT",
    "receipt_creation_date_ms": "1651130198000",
    "receipt_creation_date_pst": "9999-04-04 00:16:38 America/Los_Angeles",
    "request_date": "9999-04-04 07:24:35 Etc/GMT",
    "request_date_ms": "1651130675869",
    "request_date_pst": "9999-04-04 00:24:35 America/Los_Angeles",
    "original_purchase_date": "9999-04-04 05:39:07 Etc/GMT",
    "original_purchase_date_ms": "1651124347000",
    "original_purchase_date_pst": "9999-04-04 22:39:07 America/Los_Angeles",
    "original_application_version": "741",
    "in_app": [{
      "quantity": "1",
      "product_id": "Bazaart_Premium_Monthly_v9",
      "transaction_id": "190001277264068",
      "original_transaction_id": "190001277264068",
      "purchase_date": "9999-04-04 07:16:28 Etc/GMT",
      "purchase_date_ms": "1651130188000",
      "purchase_date_pst": "9999-04-04 00:16:28 America/Los_Angeles",
      "original_purchase_date": "9999-04-04 07:16:29 Etc/GMT",
      "original_purchase_date_ms": "1651130189000",
      "original_purchase_date_pst": "9999-04-04 00:16:29 America/Los_Angeles",
      "expires_date": "9999-04-04 17:54:33 Etc/GMT",
      "expires_date_ms": "1871891673000",
      "expires_date_pst": "9999-04-04 10:54:33 America/Los_Angeles",
      "web_order_line_item_id": "190000554353099",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "Bazaart_Premium_Monthly_v9",
    "transaction_id": "190001277264068",
    "original_transaction_id": "190001277264068",
    "purchase_date": "9999-04-04 07:16:28 Etc/GMT",
    "purchase_date_ms": "1651130188000",
    "purchase_date_pst": "9999-04-04 00:16:28 America/Los_Angeles",
    "original_purchase_date": "9999-04-04 07:16:29 Etc/GMT",
    "original_purchase_date_ms": "1651130189000",
    "original_purchase_date_pst": "9999-04-04 00:16:29 America/Los_Angeles",
    "expires_date": "9999-04-04 17:54:33 Etc/GMT",
    "expires_date_ms": "1871891673000",
    "expires_date_pst": "9999-04-04 10:54:33 America/Los_Angeles",
    "web_order_line_item_id": "190000554353099",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20528408"
  }],
  "latest_receipt": "MIIUEgYJKoZIhvcNAQcCoIIUAzCCE/8CAQExCzAJBgUrDgMCGgUAMIIDswYJKoZIhvcNAQcBoIIDpASCA6AxggOcMAoCARQCAQEEAgwAMAsCARkCAQEEAwIBAzAMAgEKAgEBBAQWAjQrMAwCAQ4CAQEEBAICAKowDQIBAwIBAQQFDAM3NDEwDQIBCwIBAQQFAgMQ1JEwDQIBDQIBAQQFAgMCS4EwDQIBEwIBAQQFDAM3NDEwDgIBAQIBAQQGAgQes7j3MA4CAQkCAQEEBgIEUDI1NjAOAgEQAgEBBAYCBDKOSEMwEgIBDwIBAQQKAggG9So7dvRUSDAUAgEAAgEBBAwMClByb2R1Y3Rpb24wGAIBAgIBAQQQDA5jby5iYXphYXJ0LmFwcDAYAgEEAgECBBALvtH6OBEt0MU68EBniraFMBwCAQUCAQEEFEVLgCFKKOz5Nyyis+2UKen+1/tlMB4CAQgCAQEEFhYUMjAyMi0wNC0yOFQwNzoxNjozOFowHgIBDAIBAQQWFhQyMDIyLTA0LTI4VDA3OjI0OjM1WjAeAgESAgEBBBYWFDIwMjItMDQtMjhUMDU6Mzk6MDdaMD8CAQcCAQEEN6pKVUxrwvufew9QD/cSI7rAFIG5CcVDK0f/kfNn3fZbtz7mYN4doCHtfYxAl+szUTRn6XVv8xMwQgIBBgIBAQQ6AqfkfJFBZR3QgjfPqxElOsp/VbVHB9yFWPBpTG6/4nbQTzQ/Zk0IhGSCnphjHnzoaKwOfvrJGBa4mjCCAZYCARECAQEEggGMMYIBiDALAgIGrQIBAQQCDAAwCwICBrACAQEEAhYAMAsCAgayAgEBBAIMADALAgIGswIBAQQCDAAwCwICBrQCAQEEAgwAMAsCAga1AgEBBAIMADALAgIGtgIBAQQCDAAwDAICBqUCAQEEAwIBATAMAgIGqwIBAQQDAgEDMAwCAgaxAgEBBAMCAQEwDAICBrcCAQEEAwIBADAMAgIGugIBAQQDAgEAMA8CAgauAgEBBAYCBFd79ecwEgICBq8CAQEECQIHAKzN84yhyzAaAgIGpwIBAQQRDA8xOTAwMDEyNzcyNjQwNjgwGgICBqkCAQEEEQwPMTkwMDAxMjc3MjY0MDY4MB8CAgaoAgEBBBYWFDIwMjItMDQtMjhUMDc6MTY6MjhaMB8CAgaqAgEBBBYWFDIwMjItMDQtMjhUMDc6MTY6MjlaMB8CAgasAgEBBBYWFDIwMjItMDUtMDVUMDc6MTY6MjhaMCUCAgamAgEBBBwMGkJhemFhcnRfUHJlbWl1bV9Nb250aGx5X3Y5oIIOZTCCBXwwggRkoAMCAQICCA7rV4fnngmNMA0GCSqGSIb3DQEBBQUAMIGWMQswCQYDVQQGEwJVUzETMBEGA1UECgwKQXBwbGUgSW5jLjEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxRDBCBgNVBAMMO0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MB4XDTE1MTExMzAyMTUwOVoXDTIzMDIwNzIxNDg0N1owgYkxNzA1BgNVBAMMLk1hYyBBcHAgU3RvcmUgYW5kIGlUdW5lcyBTdG9yZSBSZWNlaXB0IFNpZ25pbmcxLDAqBgNVBAsMI0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zMRMwEQYDVQQKDApBcHBsZSBJbmMuMQswCQYDVQQGEwJVUzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKXPgf0looFb1oftI9ozHI7iI8ClxCbLPcaf7EoNVYb/pALXl8o5VG19f7JUGJ3ELFJxjmR7gs6JuknWCOW0iHHPP1tGLsbEHbgDqViiBD4heNXbt9COEo2DTFsqaDeTwvK9HsTSoQxKWFKrEuPt3R+YFZA1LcLMEsqNSIH3WHhUa+iMMTYfSgYMR1TzN5C4spKJfV+khUrhwJzguqS7gpdj9CuTwf0+b8rB9Typj1IawCUKdg7e/pn+/8Jr9VterHNRSQhWicxDkMyOgQLQoJe2XLGhaWmHkBBoJiY5uB0Qc7AKXcVz0N92O9gt2Yge4+wHz+KO0NP6JlWB7+IDSSMCAwEAAaOCAdcwggHTMD8GCCsGAQUFBwEBBDMwMTAvBggrBgEFBQcwAYYjaHR0cDovL29jc3AuYXBwbGUuY29tL29jc3AwMy13d2RyMDQwHQYDVR0OBBYEFJGknPzEdrefoIr0TfWPNl3tKwSFMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUiCcXCam2GGCL7Ou69kdZxVJUo7cwggEeBgNVHSAEggEVMIIBETCCAQ0GCiqGSIb3Y2QFBgEwgf4wgcMGCCsGAQUFBwICMIG2DIGzUmVsaWFuY2Ugb24gdGhpcyBjZXJ0aWZpY2F0ZSBieSBhbnkgcGFydHkgYXNzdW1lcyBhY2NlcHRhbmNlIG9mIHRoZSB0aGVuIGFwcGxpY2FibGUgc3RhbmRhcmQgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdXNlLCBjZXJ0aWZpY2F0ZSBwb2xpY3kgYW5kIGNlcnRpZmljYXRpb24gcHJhY3RpY2Ugc3RhdGVtZW50cy4wNgYIKwYBBQUHAgEWKmh0dHA6Ly93d3cuYXBwbGUuY29tL2NlcnRpZmljYXRlYXV0aG9yaXR5LzAOBgNVHQ8BAf8EBAMCB4AwEAYKKoZIhvdjZAYLAQQCBQAwDQYJKoZIhvcNAQEFBQADggEBAA2mG9MuPeNbKwduQpZs0+iMQzCCX+Bc0Y2+vQ+9GvwlktuMhcOAWd/j4tcuBRSsDdu2uP78NS58y60Xa45/H+R3ubFnlbQTXqYZhnb4WiCV52OMD3P86O3GH66Z+GVIXKDgKDrAEDctuaAEOR9zucgF/fLefxoqKm4rAfygIFzZ630npjP49ZjgvkTbsUxn/G4KT8niBqjSl/OnjmtRolqEdWXRFgRi48Ff9Qipz2jZkgDJwYyz+I0AZLpYYMB8r491ymm5WyrWHWhumEL1TKc3GZvMOxx6GUPzo22/SGAGDDaSK+zeGLUR2i0j0I78oGmcFxuegHs5R0UwYS/HE6gwggQiMIIDCqADAgECAggB3rzEOW2gEDANBgkqhkiG9w0BAQUFADBiMQswCQYDVQQGEwJVUzETMBEGA1UEChMKQXBwbGUgSW5jLjEmMCQGA1UECxMdQXBwbGUgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxFjAUBgNVBAMTDUFwcGxlIFJvb3QgQ0EwHhcNMTMwMjA3MjE0ODQ3WhcNMjMwMjA3MjE0ODQ3WjCBljELMAkGA1UEBhMCVVMxEzARBgNVBAoMCkFwcGxlIEluYy4xLDAqBgNVBAsMI0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zMUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMo4VKbLVqrIJDlI6Yzu7F+4fyaRvDRTes58Y4Bhd2RepQcjtjn+UC0VVlhwLX7EbsFKhT4v8N6EGqFXya97GP9q+hUSSRUIGayq2yoy7ZZjaFIVPYyK7L9rGJXgA6wBfZcFZ84OhZU3au0Jtq5nzVFkn8Zc0bxXbmc1gHY2pIeBbjiP2CsVTnsl2Fq/ToPBjdKT1RpxtWCcnTNOVfkSWAyGuBYNweV3RY1QSLorLeSUheHoxJ3GaKWwo/xnfnC6AllLd0KRObn1zeFM78A7SIym5SFd/Wpqu6cWNWDS5q3zRinJ6MOL6XnAamFnFbLw/eVovGJfbs+Z3e8bY/6SZasCAwEAAaOBpjCBozAdBgNVHQ4EFgQUiCcXCam2GGCL7Ou69kdZxVJUo7cwDwYDVR0TAQH/BAUwAwEB/zAfBgNVHSMEGDAWgBQr0GlHlHYJ/vRrjS5ApvdHTX8IXjAuBgNVHR8EJzAlMCOgIaAfhh1odHRwOi8vY3JsLmFwcGxlLmNvbS9yb290LmNybDAOBgNVHQ8BAf8EBAMCAYYwEAYKKoZIhvdjZAYCAQQCBQAwDQYJKoZIhvcNAQEFBQADggEBAE/P71m+LPWybC+P7hOHMugFNahui33JaQy52Re8dyzUZ+L9mm06WVzfgwG9sq4qYXKxr83DRTCPo4MNzh1HtPGTiqN0m6TDmHKHOz6vRQuSVLkyu5AYU2sKThC22R1QbCGAColOV4xrWzw9pv3e9w0jHQtKJoc/upGSTKQZEhltV/V6WId7aIrkhoxK6+JJFKql3VUAqa67SzCu4aCxvCmA5gl35b40ogHKf9ziCuY7uLvsumKV8wVjQYLNDzsdTJWk26v5yZXpT+RN5yaZgem8+bQp0gF6ZuEujPYhisX4eOGBrr/TkJ2prfOv/TgalmcwHFGlXOxxioK0bA8MFR8wggS7MIIDo6ADAgECAgECMA0GCSqGSIb3DQEBBQUAMGIxCzAJBgNVBAYTAlVTMRMwEQYDVQQKEwpBcHBsZSBJbmMuMSYwJAYDVQQLEx1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEWMBQGA1UEAxMNQXBwbGUgUm9vdCBDQTAeFw0wNjA0MjUyMTQwMzZaFw0zNTAyMDkyMTQwMzZaMGIxCzAJBgNVBAYTAlVTMRMwEQYDVQQKEwpBcHBsZSBJbmMuMSYwJAYDVQQLEx1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEWMBQGA1UEAxMNQXBwbGUgUm9vdCBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAOSRqQkfkdseR1DrBe1eeYQt6zaiV0xV7IsZid75S2z1B6siMALoGD74UAnTf0GomPnRymacJGsR0KO75Bsqwx+VnnoMpEeLW9QWNzPLxA9NzhRp0ckZcvVdDtV/X5vyJQO6VY9NXQ3xZDUjFUsVWR2zlPf2nJ7PULrBWFBnjwi0IPfLrCwgb3C2PwEwjLdDzw+dPfMrSSgayP7OtbkO2V4c1ss9tTqt9A8OAJILsSEWLnTVPA3bYharo3GSR1NVwa8vQbP4++NwzeajTEV+H0xrUJZBicR0YgsQg0GHM4qBsTBY7FoEMoxos48d3mVz/2deZbxJ2HafMxRloXeUyS0CAwEAAaOCAXowggF2MA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQr0GlHlHYJ/vRrjS5ApvdHTX8IXjAfBgNVHSMEGDAWgBQr0GlHlHYJ/vRrjS5ApvdHTX8IXjCCAREGA1UdIASCAQgwggEEMIIBAAYJKoZIhvdjZAUBMIHyMCoGCCsGAQUFBwIBFh5odHRwczovL3d3dy5hcHBsZS5jb20vYXBwbGVjYS8wgcMGCCsGAQUFBwICMIG2GoGzUmVsaWFuY2Ugb24gdGhpcyBjZXJ0aWZpY2F0ZSBieSBhbnkgcGFydHkgYXNzdW1lcyBhY2NlcHRhbmNlIG9mIHRoZSB0aGVuIGFwcGxpY2FibGUgc3RhbmRhcmQgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdXNlLCBjZXJ0aWZpY2F0ZSBwb2xpY3kgYW5kIGNlcnRpZmljYXRpb24gcHJhY3RpY2Ugc3RhdGVtZW50cy4wDQYJKoZIhvcNAQEFBQADggEBAFw2mUwteLftjJvc83eb8nbSdzBPwR+Fg4UbmT1HN/Kpm0COLNSxkBLYvvRzm+7SZA/LeU802KI++Xj/a8gH7H05g4tTINM4xLG/mk8Ka/8r/FmnBQl8F0BWER5007eLIztHo9VvJOLr0bdw3w9F4SfK8W147ee1Fxeo3H4iNcol1dkP1mvUoiQjEfehrI9zgWDGG1sJL5Ky+ERI8GA4nhX1PSZnIIozavcNgs/e66Mv+VNqW2TAYzN39zoHLFbr2g8hDtq6cxlPtdk2f8GHVdmnmbkyQvvY1XGefqFStxu9k0IkEirHDx22TZxeY8hLgBdQqorV2uT80AkHN7B1dSExggHLMIIBxwIBATCBozCBljELMAkGA1UEBhMCVVMxEzARBgNVBAoMCkFwcGxlIEluYy4xLDAqBgNVBAsMI0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zMUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eQIIDutXh+eeCY0wCQYFKw4DAhoFADANBgkqhkiG9w0BAQEFAASCAQB7GfK2BSaoouxOA95Sr45pqVTi5NiRsDOEd4kpNQ6MO83/dwWSuAV7Iep2T3A5Mp+E8t8KjYtzw9KWVcxZUPyk/ml1GqBHMN+Wf8LAmwfzpBI2encwAawaQAxDuLyzBGAXsrAxsjKAs1cyJyG7syYmFu+MRFeq6Prn57ZRRDijMC9wSfhDsB8A8opz1tivyL+uINFJuDBLpAUk/+mEXBLCnQReGVdv4ROd84uobPx13mHnKZx0rhf2rtb+aIvemgzQkuctST+Q6628d35xhj6lm4hdghsDP1MwwWLN555GwZmH/eNnBeY5dyHfU/H6SmkfGIOlVUYOIsFVmVzGvrgh",
  "pending_renewal_info": [{
    "auto_renew_product_id": "Bazaart_Premium_Monthly_v9",
    "product_id": "Bazaart_Premium_Monthly_v9",
    "original_transaction_id": "190001277264068",
    "auto_renew_status": "1"
  }],
  "status": 0
}
  

body = JSON.stringify(obj);
$done({body});
