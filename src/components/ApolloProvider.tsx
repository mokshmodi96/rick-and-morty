import { PropsWithChildren, useMemo } from 'react';
import { ApolloProvider as BaseApolloProvider } from '@apollo/client';
import { createApolloClient } from '../graphql/client.ts';

export interface ApolloProviderProps extends PropsWithChildren {
  BaseURL: string;
}

export function ApolloProvider(props: ApolloProviderProps) {
  const client = useMemo(() => {
    return createApolloClient({
      urlBase: props.BaseURL,
    });
  }, [props.BaseURL]);

  return <BaseApolloProvider client={client}>{props.children}</BaseApolloProvider>;
}
