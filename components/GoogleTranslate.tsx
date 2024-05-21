"use client";
import Script from "next/script";
import React from "react";

const languages = [
  { label: "Português", value: "pt", src: "https://flagcdn.com/h60/br.png" },
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
  // Add additional languages as needed
];

const includedLanguages = languages.map(lang => lang.value).join(",");

function googleTranslateElementInit() {
    //@ts-ignore
  new window.google.translate.TranslateElement({
    pageLanguage: "auto",
    includedLanguages,
    //@ts-ignore

    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
  }, "google_translate_element");
}

export function GoogleTranslate({ prefLangCookie }: { prefLangCookie: string }) {
  const [langCookie, setLangCookie] = React.useState(decodeURIComponent(prefLangCookie));

  React.useEffect(() => {
    //@ts-ignore
    window.googleTranslateElementInit = googleTranslateElementInit;
    const script = document.createElement('script');
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
  }, []);

  const onChange = (value: string) => {
    setLangCookie(value);
    console.log(value)
    const element = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (element) {
      element.value = value;
      element.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div>
      <style jsx global>{`
        body {
          position: static !important;
          top: 0px !important;
        }
        iframe.skiptranslate {
          display: none !important;
        }
        iframe.goog-gt-tt {
          display: none !important;
        }
      `}</style>
      <div id="google_translate_element" style={{ visibility: "hidden", width: "1px", height: "1px" }}></div>
      <LanguageSelector onChange={onChange} value={langCookie} />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
};
    //@ts-ignore
function LanguageSelector({ onChange, value }) {
  return (
    <select onChange={(e) => onChange(e.target.value)} value={value}>
      {languages.map((it) => (
        <option value={it.value} key={it.value}>
          {it.label}
        </option>
      ))}
    </select>
  );
}
