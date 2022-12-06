const APP_NAME = "Krowd.gg";

const Meta = () => {
  return (
    <>
      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#18181B" />

      <link rel="shortcut icon" href="/logo.png" />

      <link rel="manifest" href="/manifest.json" />
    </>
  );
};

export default Meta;
