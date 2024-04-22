import { router } from '@/router/AppRouter';

const NotFoundPage = () => {
  const goBack = () => {
    router.navigate('/');
  };

  return (
    <main>
      <div className='max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8'>
        <div className='max-w-lg mx-auto space-y-3 text-center'>
          <h3 className='text-primary_blue font-semibold'>404 Error</h3>
          <p className='text-app_primary_gray text-4xl font-semibold sm:text-5xl'>
            Page not found
          </p>
          <p className='text-app_secondary_gray'>
            Sorry, the page you are looking for could not be found or has been
            removed.
          </p>
          <div className='flex flex-wrap items-center justify-center gap-3'>
            <button
              onClick={goBack}
              className='block py-2 px-4 text-white font-medium bg-primary_blue duration-150 rounded-lg'
            >
              Go back
            </button>
            <a
              href='javascript:void(0)'
              className='block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg'
            >
              Contact support
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
