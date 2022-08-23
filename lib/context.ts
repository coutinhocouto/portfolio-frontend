import React, { createContext, Dispatch, SetStateAction } from 'react';

interface Lang {
    lang: string;
    setLang: Dispatch<SetStateAction<string>>;
}

const LangContext = createContext<Lang>({lang: '', setLang: () => {},});

export default LangContext;