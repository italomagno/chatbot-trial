"use client";
import Script from "next/script";
import React from "react";
import Image from "next/image";
import { useTimeout } from "usehooks-ts";

const languages = [
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
  { label: "Portuguese", value: "pt", src: "https://flagcdn.com/h60/br.png" },
  { label: "German", value: "de", src: "https://flagcdn.com/h60/de.png" },
  { label: "French", value: "fr", src: "https://flagcdn.com/h60/fr.png" },
      // Add additional languages as needed
];
type LenguageProps = typeof languages[0]

const includedLanguages = languages.map(lang => lang.value).join(",");

function googleTranslateElementInit() {
  new window.google.translate.TranslateElement({
    pageLanguage: "auto", includedLanguages
  }, "google_translate_element");
}

export function GoogleTranslate({ prefLangCookie,HandlePrefLangCookie }: { prefLangCookie: string, HandlePrefLangCookie:(lang:string)=>Promise<void> }) {
  const [langCookie, setLangCookie] = React.useState(decodeURIComponent(prefLangCookie));
  const [selectedLanguage,setSelectedLanguage] = React.useState<LenguageProps>(languages[0]);

  React.useEffect(() => {
    window.googleTranslateElementInit = googleTranslateElementInit;

    const handleScriptLoad = () => {
      googleTranslateElementInit();
      const initialLanguage = langCookie.replace(/\//g, '');
      setLangCookie(langCookie);
      const language = languages.find(language => language.value === initialLanguage);
      if (language) setSelectedLanguage(language);
      const element = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (element) {
        element.value = initialLanguage;
        element.dispatchEvent(new Event("change"));
      }
    };},[]);
      React.useEffect(() => {
    const intervalId = setInterval(() => {
      const element = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (element && element.value !== langCookie.split("/")[1]) {
        const selectedLang = element.value;
        const language = languages.find(lang => lang.value === selectedLang);
        if (language) {
          setSelectedLanguage(language);
          setLangCookie(`/${selectedLang}/`);
        }
      }
    }, 1000); // Check every second

    return () => clearInterval(intervalId);
  }, [langCookie]);

  const onChange = (value: string) => {
    const language = languages.find(language=>language.value === value)
    if(language) setSelectedLanguage(language)
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
      <LanguageSelector onChange={onChange} value={langCookie} selectedLanguage={selectedLanguage} />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
};

function LanguageSelector({ onChange, value ,selectedLanguage}: { onChange: (value: string) => void; value: string, selectedLanguage:LenguageProps }) {
  return (
    <div className="flex items-center gap-2">
       <div>
        {
          selectedLanguage &&
          <Image
          src={selectedLanguage.src}
          alt={selectedLanguage.value}
          width={16}
          height={16}
        />
        }
      </div>
      <select onChange={(e) => onChange(e.target.value)} value={value.split("/")[1]} className="w-fit">
      {languages.map((it) => (
        <option className="flex gap-2" value={it.value} key={it.value}>
         {it.label}
        </option>
      ))}
     

    </select>
    </div>
    
  );
}

