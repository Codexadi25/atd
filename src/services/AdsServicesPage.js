import { useEffect } from 'react';

function AdsServicesPage({ dataAdSlot }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Adsense error:', e);
    }
  }, []);

  return (
    <div>
      <ins className="adsbygoogle"
             style={{ display: "block" }}
             data-ad-client="ca-pub-7836937307099238"
             data-ad-slot={dataAdSlot}
             data-ad-format="auto"
             data-full-width-responsive="true">
        </ins>
    </div>
  );
}

export default AdsServicesPage;
