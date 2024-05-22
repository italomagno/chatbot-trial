"use client";
import Script from "next/script";
import React from "react";

const languages = [
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
  { label: "Portuguese", value: "pt", src: "https://flagcdn.com/h60/us.png" },
  // Add additional languages as needed
];

const includedLanguages = languages.map(lang => lang.value).join(",");

function googleTranslateElementInit() {
  new window.google.translate.TranslateElement({
    pageLanguage: "auto", includedLanguages
  }, "google_translate_element");
}

export function GoogleTranslate({ prefLangCookie,HandlePrefLangCookie }: { prefLangCookie: string, HandlePrefLangCookie:(lang:string)=>Promise<void> }) {
  const [langCookie, setLangCookie] = React.useState("");

  React.useEffect(() => {
    window.googleTranslateElementInit = googleTranslateElementInit;
    setLangCookie(decodeURIComponent(prefLangCookie))
  }, []);

  const onChange = (value: string) => {
    const lang = `/${value}/`;
    HandlePrefLangCookie(lang)
    setLangCookie(lang);
    const element = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    element.value = value;
    element.dispatchEvent(new Event("change"));
    
  };

  return (
    <div>
      <div id="google_translate_element" style={{ visibility: "hidden", width: "1px", height: "1px" }}></div>
      <LanguageSelector onChange={onChange} value={langCookie} />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
};

function LanguageSelector({ onChange, value }: { onChange: (value: string) => void; value: string }) {
  return (
    <select onChange={(e) => onChange(e.target.value)} value={value.split("/")[1]}>
      {languages.map((it) => (
        <option value={it.value} key={it.value}>
          {it.label}
        </option>
      ))}
    </select>
  );
}

