(function(t) {
  function e(e) {
    for (
      var r, n, i = e[0], c = e[1], l = e[2], u = 0, p = [];
      u < i.length;
      u++
    )
      (n = i[u]), a[n] && p.push(a[n][0]), (a[n] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
    d && d(e);
    while (p.length) p.shift()();
    return o.push.apply(o, l || []), s();
  }
  function s() {
    for (var t, e = 0; e < o.length; e++) {
      for (var s = o[e], r = !0, i = 1; i < s.length; i++) {
        var c = s[i];
        0 !== a[c] && (r = !1);
      }
      r && (o.splice(e--, 1), (t = n((n.s = s[0]))));
    }
    return t;
  }
  var r = {},
    a = { app: 0 },
    o = [];
  function n(e) {
    if (r[e]) return r[e].exports;
    var s = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
  }
  (n.m = t),
    (n.c = r),
    (n.d = function(t, e, s) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
    }),
    (n.r = function(t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (n.r(s),
        Object.defineProperty(s, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          n.d(
            s,
            r,
            function(e) {
              return t[e];
            }.bind(null, r),
          );
      return s;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t['default'];
            }
          : function() {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = '/');
  var i = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    c = i.push.bind(i);
  (i.push = e), (i = i.slice());
  for (var l = 0; l < i.length; l++) e(i[l]);
  var d = c;
  o.push([0, 'chunk-vendors']), s();
})({
  0: function(t, e, s) {
    t.exports = s('56d7');
  },
  '0ce6': function(t, e, s) {},
  1462: function(t, e, s) {},
  1904: function(t, e, s) {},
  '1a4c': function(t, e, s) {
    'use strict';
    var r = s('297d'),
      a = s.n(r);
    a.a;
  },
  '1c0a': function(t, e, s) {},
  '1ff2': function(t, e, s) {
    'use strict';
    var r = s('61b7'),
      a = s.n(r);
    a.a;
  },
  '297d': function(t, e, s) {},
  '31e4': function(t, e, s) {
    'use strict';
    var r = s('1462'),
      a = s.n(r);
    a.a;
  },
  3630: function(t, e, s) {},
  3819: function(t, e, s) {
    'use strict';
    var r = s('3630'),
      a = s.n(r);
    a.a;
  },
  '56d7': function(t, e, s) {
    'use strict';
    s.r(e);
    s('cadf'), s('551c'), s('097d');
    var r = s('2b0e'),
      a = s('5c96'),
      o = s.n(a),
      n = s('b2d6'),
      i = s.n(n),
      c = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          'div',
          { attrs: { id: 'psbuybuttonlite-content' } },
          [
            s(
              'el-row',
              { attrs: { type: 'flex', justify: 'center' } },
              [
                s(
                  'el-col',
                  { attrs: { xs: 24, sm: 24, md: 24, lg: 20 } },
                  [
                    s(
                      'PsCard',
                      [
                        s(
                          'PsCardHeader',
                          [
                            s('template', { slot: 'headerLeft' }, [
                              s('i', { staticClass: 'material-icons' }, [
                                t._v('link'),
                              ]),
                              t._v(' Buy button lite\n                    '),
                            ]),
                          ],
                          2,
                        ),
                        s(
                          'PsCardBlock',
                          [
                            s(
                              'el-row',
                              {
                                attrs: {
                                  type: 'flex',
                                  justify: 'center',
                                  gutter: 100,
                                },
                              },
                              [
                                s(
                                  'el-col',
                                  { attrs: { xs: 24, sm: 18, md: 16, lg: 12 } },
                                  [
                                    s(
                                      'el-form',
                                      {
                                        ref: 'form',
                                        attrs: {
                                          rules: t.rulesForm,
                                          model: t.form,
                                          'label-width': '200px',
                                        },
                                      },
                                      [
                                        s(
                                          'el-form-item',
                                          {
                                            attrs: {
                                              label:
                                                t.translations.selectProduct,
                                              prop: 'selectedProduct',
                                            },
                                          },
                                          [
                                            s(
                                              'el-autocomplete',
                                              {
                                                attrs: {
                                                  'fetch-suggestions':
                                                    t.querySearchAsync,
                                                  'trigger-on-focus': !1,
                                                  placeholder:
                                                    t.translations
                                                      .searchProduct,
                                                },
                                                on: { select: t.handleSelect },
                                                scopedSlots: t._u([
                                                  {
                                                    key: 'default',
                                                    fn: function(e) {
                                                      var r = e.item;
                                                      return [
                                                        s(
                                                          'div',
                                                          {
                                                            staticClass:
                                                              'product-suggestion',
                                                          },
                                                          [
                                                            s('img', {
                                                              staticClass:
                                                                'product-suggestion-image',
                                                              attrs: {
                                                                src:
                                                                  r.image_link,
                                                                width: '50',
                                                                height: '50',
                                                              },
                                                            }),
                                                            s(
                                                              'div',
                                                              {
                                                                staticClass:
                                                                  'product-suggestion-name',
                                                              },
                                                              [
                                                                s('div', [
                                                                  s(
                                                                    'span',
                                                                    {
                                                                      staticClass:
                                                                        'product-suggestion-attributes',
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        t._s(
                                                                          r.name,
                                                                        ),
                                                                      ),
                                                                    ],
                                                                  ),
                                                                  s('br'),
                                                                  r.attribute_name
                                                                    ? s(
                                                                        'span',
                                                                        {
                                                                          staticClass:
                                                                            'product-suggestion-attributes',
                                                                        },
                                                                        [
                                                                          t._v(
                                                                            t._s(
                                                                              r.attribute_name,
                                                                            ),
                                                                          ),
                                                                        ],
                                                                      )
                                                                    : t._e(),
                                                                ]),
                                                              ],
                                                            ),
                                                          ],
                                                        ),
                                                      ];
                                                    },
                                                  },
                                                ]),
                                                model: {
                                                  value: t.product,
                                                  callback: function(e) {
                                                    t.product = e;
                                                  },
                                                  expression: 'product',
                                                },
                                              },
                                              [
                                                s(
                                                  'i',
                                                  {
                                                    staticClass:
                                                      'material-icons',
                                                    attrs: { slot: 'suffix' },
                                                    slot: 'suffix',
                                                  },
                                                  [t._v('search')],
                                                ),
                                              ],
                                            ),
                                          ],
                                          1,
                                        ),
                                        t.form.selectedProduct
                                          ? s('el-form-item', [
                                              s('div', [
                                                s(
                                                  'div',
                                                  {
                                                    staticClass:
                                                      'selected-product-image',
                                                  },
                                                  [
                                                    s('img', {
                                                      staticClass:
                                                        'product-suggestion-image',
                                                      attrs: {
                                                        src:
                                                          t.form.selectedProduct
                                                            .image_link,
                                                        width: '75',
                                                        height: '75',
                                                      },
                                                    }),
                                                  ],
                                                ),
                                                s(
                                                  'div',
                                                  {
                                                    staticClass:
                                                      'selected-product-name',
                                                  },
                                                  [
                                                    s('div', [
                                                      s('label', [
                                                        t._v(
                                                          t._s(
                                                            t.form
                                                              .selectedProduct
                                                              .name,
                                                          ),
                                                        ),
                                                      ]),
                                                      s('br'),
                                                      s('label', [
                                                        t._v(
                                                          t._s(
                                                            t.form
                                                              .selectedProduct
                                                              .attribute_name,
                                                          ),
                                                        ),
                                                      ]),
                                                    ]),
                                                    s(
                                                      'div',
                                                      {
                                                        staticClass:
                                                          'selected-product-delete',
                                                      },
                                                      [
                                                        s(
                                                          'i',
                                                          {
                                                            staticClass:
                                                              'material-icons red',
                                                            on: {
                                                              click: function(
                                                                e,
                                                              ) {
                                                                t.removeSelectedProduct();
                                                              },
                                                            },
                                                          },
                                                          [t._v('close')],
                                                        ),
                                                      ],
                                                    ),
                                                  ],
                                                ),
                                              ]),
                                            ])
                                          : t._e(),
                                        1 == t.form.selectedProduct.customizable
                                          ? s(
                                              'Alert',
                                              { attrs: { type: 'warning' } },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.translations
                                                      .alertCustomizableProduct,
                                                  ),
                                                ),
                                              ],
                                            )
                                          : t._e(),
                                        s(
                                          'el-form-item',
                                          {
                                            attrs: {
                                              label: t.translations.action,
                                              prop: 'selectedAction',
                                            },
                                          },
                                          [
                                            s(
                                              'el-select',
                                              {
                                                attrs: {
                                                  placeholder:
                                                    t.translations.action,
                                                  clearable: '',
                                                },
                                                model: {
                                                  value: t.form.selectedAction,
                                                  callback: function(e) {
                                                    t.$set(
                                                      t.form,
                                                      'selectedAction',
                                                      e,
                                                    );
                                                  },
                                                  expression:
                                                    'form.selectedAction',
                                                },
                                              },
                                              [
                                                s('el-option', {
                                                  attrs: {
                                                    label: 'Go to cart',
                                                    value: '1',
                                                  },
                                                }),
                                                s('el-option', {
                                                  attrs: {
                                                    label: 'Check out',
                                                    value: '2',
                                                  },
                                                }),
                                              ],
                                              1,
                                            ),
                                          ],
                                          1,
                                        ),
                                        s(
                                          'el-form-item',
                                          {
                                            staticClass: 'form-link',
                                            attrs: {
                                              label:
                                                t.translations.sharableLink,
                                            },
                                          },
                                          [
                                            t.form.selectedProduct &&
                                            t.form.selectedAction
                                              ? s(
                                                  'span',
                                                  {
                                                    staticClass:
                                                      'generated-link',
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.redirectControllerUrl,
                                                      ) +
                                                        '?id_product=' +
                                                        t._s(
                                                          t.form.selectedProduct
                                                            .id_product,
                                                        ) +
                                                        '&action=' +
                                                        t._s(
                                                          t.form.selectedAction,
                                                        ),
                                                    ),
                                                    t.form.selectedProduct
                                                      .id_product_attribute
                                                      ? s(
                                                          'label',
                                                          {
                                                            staticClass:
                                                              'generated-link',
                                                          },
                                                          [
                                                            t._v(
                                                              '&id_product_attribute=' +
                                                                t._s(
                                                                  t.form
                                                                    .selectedProduct
                                                                    .id_product_attribute,
                                                                ),
                                                            ),
                                                          ],
                                                        )
                                                      : t._e(),
                                                  ],
                                                )
                                              : s(
                                                  'span',
                                                  { staticClass: 'no-link' },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.translations
                                                          .linkPlaceholder,
                                                      ),
                                                    ),
                                                  ],
                                                ),
                                          ],
                                        ),
                                      ],
                                      1,
                                    ),
                                  ],
                                  1,
                                ),
                              ],
                              1,
                            ),
                          ],
                          1,
                        ),
                        s(
                          'PsCardFooter',
                          [
                            s(
                              'template',
                              { slot: 'footerRight' },
                              [
                                s(
                                  'el-button',
                                  {
                                    attrs: { type: 'primary' },
                                    on: {
                                      click: function(e) {
                                        t.validateForm('form');
                                      },
                                    },
                                  },
                                  [t._v(t._s(t.translations.copyToClipboard))],
                                ),
                              ],
                              1,
                            ),
                          ],
                          2,
                        ),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
            s(
              'BannerPromo',
              {
                attrs: {
                  idProductAddons: 41139,
                  isoCode: t.context.country.iso_code,
                  isoLang: t.context.language.iso_code,
                  psVersion: t.ps_version,
                  trackingAddonsLink: t.trackingAddonsLink,
                },
              },
              [
                s(
                  'el-row',
                  [
                    s('el-col', { attrs: { span: 12 } }, [
                      s('span', { staticClass: 'features' }, [
                        s('i', { staticClass: 'material-icons' }, [
                          t._v('add_circle'),
                        ]),
                        t._v(' Card & Button design integration'),
                      ]),
                    ]),
                    s('el-col', { attrs: { span: 12 } }, [
                      s('span', { staticClass: 'features' }, [
                        s('i', { staticClass: 'material-icons' }, [
                          t._v('add_circle'),
                        ]),
                        t._v(' Overview and Card Manager'),
                      ]),
                    ]),
                  ],
                  1,
                ),
                s(
                  'el-row',
                  [
                    s('el-col', { attrs: { span: 12 } }, [
                      s('span', { staticClass: 'features' }, [
                        s('i', { staticClass: 'material-icons' }, [
                          t._v('add_circle'),
                        ]),
                        t._v(' Statistics'),
                      ]),
                    ]),
                    s('el-col', { attrs: { span: 12 } }, [
                      s('span', { staticClass: 'features' }, [
                        s('i', { staticClass: 'material-icons' }, [
                          t._v('add_circle'),
                        ]),
                        t._v(' Virtual cart on external pages'),
                      ]),
                    ]),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      l = [],
      d = s('bc3a'),
      u = s.n(d),
      p = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s('div', { staticClass: 'ps-card' }, [t._t('default')], 2);
      },
      f = [],
      m = { name: 'PsCard' },
      v = m,
      _ = (s('1a4c'), s('2877')),
      g = Object(_['a'])(v, p, f, !1, null, '437b7557', null);
    g.options.__file = 'PsCard.vue';
    var b = g.exports,
      h = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s('div', { staticClass: 'ps-card-header clearfix' }, [
          s(
            'div',
            { staticClass: 'justify-content-start' },
            [t._t('headerLeft')],
            2,
          ),
          s(
            'div',
            { staticClass: 'justify-content-end' },
            [t._t('headerRight')],
            2,
          ),
        ]);
      },
      C = [],
      y = { name: 'PsCardHeader' },
      P = y,
      k = (s('b573'),
      s('fb98'),
      Object(_['a'])(P, h, C, !1, null, '122df95a', null));
    k.options.__file = 'PsCardHeader.vue';
    var x = k.exports,
      A = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s('div', { staticClass: 'ps-card-block' }, [t._t('default')], 2);
      },
      w = [],
      S = { name: 'PsCardBlock' },
      j = S,
      O = (s('dee9'), Object(_['a'])(j, A, w, !1, null, '457cffc1', null));
    O.options.__file = 'PsCardBlock.vue';
    var B = O.exports,
      L = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s('div', { staticClass: 'ps-card-footer clearfix' }, [
          s(
            'div',
            { staticClass: 'justify-content-start' },
            [t._t('footerLeft')],
            2,
          ),
          s(
            'div',
            { staticClass: 'justify-content-end' },
            [t._t('footerRight')],
            2,
          ),
        ]);
      },
      F = [],
      T = { name: 'PsCardFooter' },
      $ = T,
      E = (s('a6d3'), Object(_['a'])($, L, F, !1, null, '3759fe12', null));
    E.options.__file = 'PsCardFooter.vue';
    var D = E.exports,
      M = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.isActive
          ? s('div', { staticClass: 'addons-alert', class: t.type }, [
              t.closable
                ? s(
                    'button',
                    {
                      staticClass: 'close-addons-alert',
                      attrs: { type: 'button' },
                      on: {
                        click: function(e) {
                          t.isActive = !1;
                        },
                      },
                    },
                    [t._m(0)],
                  )
                : t._e(),
              s('p', { staticClass: 'alert-text' }, [t._t('default')], 2),
            ])
          : t._e();
      },
      q = [
        function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s('span', { attrs: { 'aria-hidden': 'true' } }, [
            s('i', { staticClass: 'material-icons' }, [t._v('close')]),
          ]);
        },
      ],
      N = {
        name: 'Alert',
        data: function() {
          return { isActive: !0 };
        },
        props: {
          type: { type: String, require: !0 },
          closable: { type: Boolean, require: !1, default: !1 },
        },
      },
      J = N,
      U = (s('3819'), Object(_['a'])(J, M, q, !1, null, '21e947bd', null));
    U.options.__file = 'Alert.vue';
    var V = U.exports,
      H = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          'div',
          {
            directives: [
              {
                name: 'show',
                rawName: 'v-show',
                value: Object.keys(t.product).length > 0,
                expression: 'Object.keys(product).length > 0',
              },
            ],
            staticClass: 'banner-block',
          },
          [
            s(
              'el-row',
              { attrs: { justify: 'center', gutter: 50 } },
              [
                s('el-col', { attrs: { xs: 24, sm: 24, md: 8, lg: 6 } }, [
                  s('div', { staticStyle: { display: 'inline-flex' } }, [
                    s('div', { staticClass: 'pico' }, [
                      s('img', { attrs: { src: t.product.img } }),
                    ]),
                    s('div', { staticStyle: { 'margin-left': '20px' } }, [
                      s('p', { staticClass: 'go-further' }, [
                        t._v(t._s(t.translations.goFurther)),
                      ]),
                      s('span', { staticClass: 'product-name' }, [
                        t._v(t._s(t.product.displayName)),
                      ]),
                      s('p', { staticClass: 'addons' }, [
                        t._v(t._s(t.translations.addonsMarketplace)),
                      ]),
                    ]),
                  ]),
                ]),
                s(
                  'el-col',
                  { attrs: { xs: 24, sm: 24, md: 16, lg: 12 } },
                  [
                    s('p', [t._v(t._s(t.product.fullDescription))]),
                    t._t('default'),
                  ],
                  2,
                ),
                s(
                  'el-col',
                  {
                    staticClass: 'center',
                    attrs: { xs: 24, sm: 24, md: 24, lg: 6 },
                  },
                  [
                    s(
                      'el-button',
                      {
                        attrs: { type: 'text' },
                        on: {
                          click: function(e) {
                            t.dialogDiscover = !0;
                          },
                        },
                      },
                      [
                        s(
                          'i',
                          {
                            staticClass: 'material-icons',
                            staticStyle: { 'vertical-align': 'middle' },
                          },
                          [t._v('computer')],
                        ),
                        t._v(' ' + t._s(t.translations.screenshots)),
                      ],
                    ),
                    s(
                      'el-button',
                      {
                        attrs: { type: 'primary' },
                        on: {
                          click: function(e) {
                            t.redirectToAddons();
                          },
                        },
                      },
                      [t._v(t._s(t.translations.discover))],
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
            s(
              'el-dialog',
              {
                attrs: {
                  id: 'dialog-preview-addons',
                  visible: t.dialogDiscover,
                },
                on: {
                  'update:visible': function(e) {
                    t.dialogDiscover = e;
                  },
                },
              },
              [
                s(
                  'el-carousel',
                  {
                    attrs: {
                      id: 'screenshot-preview-addons',
                      interval: 5e3,
                      height: '66.67vh',
                      arrow: 'always',
                      'indicator-position': 'none',
                    },
                  },
                  t._l(t.product.pictures, function(t) {
                    return s('el-carousel-item', {
                      key: parseInt(t),
                      style: 'background-image:url(' + t.big + ')',
                    });
                  }),
                ),
                s(
                  'el-row',
                  {
                    staticClass: 'dialog-preview-addons-footer',
                    attrs: { type: 'flex', justify: 'center' },
                  },
                  [
                    s(
                      'el-col',
                      { attrs: { xs: 24, sm: 24, md: 12, lg: 12 } },
                      [
                        s(
                          'el-button',
                          {
                            staticClass: 'by-prestashop',
                            attrs: { type: 'text' },
                            on: {
                              click: function(e) {
                                t.dialogDiscover = !0;
                              },
                            },
                          },
                          [
                            s(
                              'i',
                              {
                                staticClass: 'material-icons',
                                staticStyle: { 'vertical-align': 'middle' },
                              },
                              [t._v('check_circle')],
                            ),
                            t._v(' ' + t._s(t.translations.developedBy)),
                          ],
                        ),
                      ],
                      1,
                    ),
                    s(
                      'el-col',
                      { attrs: { xs: 24, sm: 24, md: 12, lg: 12 } },
                      [
                        s(
                          'el-button',
                          {
                            staticClass: 'right',
                            attrs: { type: 'primary' },
                            on: {
                              click: function(e) {
                                t.redirectToAddons();
                              },
                            },
                          },
                          [t._v(t._s(t.translations.discoverOn))],
                        ),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      R = [],
      z = (s('c5f6'), JSON.parse(bannerPromoTranslations)),
      G = {
        name: 'BannerPromo',
        data: function() {
          return { dialogDiscover: !1, product: '', translations: z };
        },
        props: {
          idProductAddons: Number,
          isoCode: String,
          isoLang: String,
          psVersion: String,
          trackingAddonsLink: String,
        },
        created: function() {
          var t = this;
          u.a
            .get('https://api.addons.prestashop.com/index.php', {
              params: {
                method: 'prediggo',
                action: 'product',
                iso_lang: this.isoLang,
                iso_code: this.isoCode,
                version: this.psVersion,
                id_product: this.idProductAddons,
              },
            })
            .then(function(e) {
              t.product = e.data;
            })
            .catch(function(t) {
              console.log(t);
            });
        },
        methods: {
          redirectToAddons: function() {
            window.open(this.trackingAddonsLink, '_blank');
          },
        },
      },
      I = G,
      K = (s('31e4'),
      s('1ff2'),
      Object(_['a'])(I, H, R, !1, null, '28c1e516', null));
    K.options.__file = 'BannerPromo.vue';
    var Q = K.exports,
      W = JSON.parse(context),
      X = JSON.parse(confTranslations),
      Y = {
        name: 'configuration',
        components: {
          BannerPromo: Q,
          PsCard: b,
          PsCardHeader: x,
          PsCardBlock: B,
          PsCardFooter: D,
          Alert: V,
        },
        data: function() {
          return {
            product: '',
            form: { selectedProduct: '', selectedAction: '' },
            rulesForm: {
              selectedProduct: [
                {
                  required: !0,
                  message: X.errorFormSelectProduct,
                  trigger: 'change',
                },
              ],
              selectedAction: [
                {
                  required: !0,
                  message: X.errorFormSelectAction,
                  trigger: 'change',
                },
              ],
            },
            redirectControllerUrl: redirectControllerUrl,
            context: W,
            translations: X,
            trackingAddonsLink: trackingAddonsLink,
            ps_base_url: psBaseUrl,
            ps_version: psVersion,
          };
        },
        methods: {
          validateForm: function(t) {
            var e = this;
            this.$refs[t].validate(function(t) {
              if (!t) return !1;
              e.copyToClopboard(
                e.redirectControllerUrl +
                  '?id_product=' +
                  e.form.selectedProduct.id_product +
                  '&action=' +
                  e.form.selectedAction +
                  '&id_product_attribute=' +
                  e.form.selectedProduct.id_product_attribute,
              );
            });
          },
          querySearchAsync: function(t, e) {
            var s = new FormData();
            s.append('action', 'SearchProducts'),
              s.append('product_search', t),
              u.a
                .post(adminAjaxController, s)
                .then(function(t) {
                  e(t.data);
                })
                .catch(function(t) {
                  console.log(t);
                });
          },
          handleSelect: function(t) {
            this.form.selectedProduct = t;
          },
          removeSelectedProduct: function() {
            this.form.selectedProduct = '';
          },
          copyToClopboard: function(t) {
            var e = document.createElement('textarea');
            (e.value = t),
              e.setAttribute('readonly', ''),
              (e.style.position = 'absolute'),
              (e.style.left = '-9999px'),
              document.body.appendChild(e),
              e.select(),
              document.execCommand('copy'),
              document.body.removeChild(e),
              showSuccessMessage(this.translations.linkCopied);
          },
        },
      },
      Z = Y,
      tt = (s('d284'), Object(_['a'])(Z, c, l, !1, null, 'b0ad8302', null));
    tt.options.__file = 'App.vue';
    var et = tt.exports;
    (r['default'].config.productionTip = !1),
      r['default'].use(o.a, { locale: i.a }),
      new r['default']({
        render: function(t) {
          return t(et);
        },
      }).$mount('#ps_buybuttonlite');
  },
  '61b7': function(t, e, s) {},
  7264: function(t, e, s) {},
  a6d3: function(t, e, s) {
    'use strict';
    var r = s('b8f7'),
      a = s.n(r);
    a.a;
  },
  b573: function(t, e, s) {
    'use strict';
    var r = s('7264'),
      a = s.n(r);
    a.a;
  },
  b8f7: function(t, e, s) {},
  d284: function(t, e, s) {
    'use strict';
    var r = s('1c0a'),
      a = s.n(r);
    a.a;
  },
  dee9: function(t, e, s) {
    'use strict';
    var r = s('1904'),
      a = s.n(r);
    a.a;
  },
  fb98: function(t, e, s) {
    'use strict';
    var r = s('0ce6'),
      a = s.n(r);
    a.a;
  },
});
//# sourceMappingURL=app.ddd3b79a.js.map
