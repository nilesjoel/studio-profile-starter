// components/withAuth.tsx

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';

type WithAuthProps = {};

const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P & WithAuthProps> => {
  const WithAuth = (props: P & WithAuthProps) => {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        
        console.log({status})
        console.log(router.asPath !== '/api/auth/signin', router.asPath.split('?')[0], router.asPath.split('?')[0] ==='/auth/signin' )

        //  Redirect the user to the login page if they're not authenticated
        if (status === 'unauthenticated' && router.asPath !== '/auth/signin') {
          router.push('/auth/signin');
        }
      }, [status, router]);

    if (status === 'loading') {
      // Render a loading spinner or some other component if the session is not loaded yet
      return <div>Loading...</div>;
    }

    // Render the wrapped component if the user is authenticated or the session is still loading
    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default withAuth;
