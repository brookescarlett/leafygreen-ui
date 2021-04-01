import React, { useState } from 'react';
import Code, { Language } from '@leafygreen-ui/code';
import LiveExample, { KnobsConfigInterface } from 'components/live-example';

const languageOptions = [
  {
    displayName: 'JavaScript',
    language: Language.JavaScript,
  },
  {
    displayName: 'Python',
    language: Language.Python,
  },
];

const jsSnippet = `

function greeting(entity) {
  return \`Hello, \${entity}!\`;
}

console.log(greeting('World'));

`;

const pythonSnippet = `

def greeting(entity):
    return "Hello {}".format(entity)

print (greeting("World"))

`;

const snippetMap = {
  [Language.JavaScript]: jsSnippet,
  [Language.Python]: pythonSnippet,
};

function LanguageSwitcher({ darkMode }: { darkMode: boolean }) {
  const [language, setLanguage] = useState<LanguageOption>(languageOptions[0]);

  const handleChange = (languageObject: LanguageOption) => {
    setLanguage(languageObject);
  };

  const languageIndex = language.language;

  return (
    <Code
      language={language?.displayName}
      onChange={handleChange}
      languageOptions={languageOptions}
      darkMode={darkMode}
    >
      {snippetMap[languageIndex as 'javascript' | 'python']}
    </Code>
  );
}

const knobsConfig: KnobsConfigInterface<{
  showWindowChrome: boolean;
  copyable: boolean;
  chromeTitle: string;
  darkMode: boolean;
  language: Language;
  children: string;
  withLanguageSwitcher: boolean;
}> = {
  showWindowChrome: {
    type: 'boolean',
    default: false,
    label: 'Show Window Chrome',
  },
  copyable: {
    type: 'boolean',
    default: true,
    label: 'Copyable',
  },
  chromeTitle: {
    type: 'text',
    default: 'Chrome Title',
    label: 'Chrome Title',
  },
  darkMode: {
    type: 'boolean',
    default: false,
    label: 'Dark Mode',
  },
  language: {
    type: 'select',
    default: Language.JavaScript,
    options: Object.values(Language),
    label: 'Language',
  },
  children: {
    type: 'area',
    default: jsSnippet,
    label: 'Children',
  },
  withLanguageSwitcher: {
    type: 'boolean',
    default: false,
    label: 'With Language Switcher',
  },
};

export default function CodeLiveExample() {
  return (
    <LiveExample knobsConfig={knobsConfig}>
      {({ withLanguageSwitcher, ...props }) =>
        withLanguageSwitcher ? (
          <LanguageSwitcher {...props} />
        ) : (
          <Code {...props} />
        )
      }
    </LiveExample>
  );
}
