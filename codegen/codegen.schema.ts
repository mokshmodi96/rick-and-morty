import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://rickandmortyapi.com/graphql',
  generates: {
    'src/graphql/schema.generated.graphql': {
      plugins: ['schema-ast'],
    },
  },
};

export default config;
