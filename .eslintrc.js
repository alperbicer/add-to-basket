module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-var': 'error',
    'eqeqeq': ['error', 'smart'],
    'arrow-spacing': [ 2, { 'before': true, 'after': true } ],
    'keyword-spacing': 'error',
    'no-multi-spaces': 'error',
    'object-curly-newline': ['error', { 'multiline': true, 'consistent': true }],
    'vue/html-closing-bracket-spacing': 'warn',
    'vue/mustache-interpolation-spacing': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'vue/no-v-html': 'off',
    'no-multiple-empty-lines': ['error', { max: 0, maxBOF: 0 }],
    'template-curly-spacing': 'off',
    camelcase: ['error', { properties: 'never' }],
    'vue/html-indent': 'warn',
    'vue/html-closing-bracket-newline': 'warn',
    'no-trailing-spaces': 'error',
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': false }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 6,
    }],
    'key-spacing': ['error', { 'beforeColon': false }],
    'capitalized-comments': [
      'off',
      'never',
      {
        line: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
        block: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      },
    ],
    'max-depth': ['off', 4],
    'max-len': [
      'error',
      150,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'max-lines': [
      'off',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      'off',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],
    'no-console': process.env.NODE_ENV === 'prod' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'prod' ? 'error' : 'warn',
    'no-new-object': 'error',
    'no-plusplus': 'error',
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
    semi: ['error', 'always'],
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!'],
          balanced: true,
        },
      },
    ],
    'switch-colon-spacing': ['error', { after: true, before: false }],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'off',
    'vue/component-tags-order': ['error', {
      'order': [ [ 'script', 'template' ], 'style' ],
    }],
    'vue/attributes-order': ['error', {
      'order': [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
      'alphabetical': false,
    }],
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'asyncData',
        'data',
        'fetch',
        'head',
        'computed',
        'watch',
        'watchQuery',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError',
      ],
    }],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/src/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};