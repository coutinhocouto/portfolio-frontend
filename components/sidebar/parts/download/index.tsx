import LangContext from "@/lib/context";
import { DownloadOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { DownloadBtn } from "./styles";

export default function Download() {
  const lang = useContext(LangContext);

  return (
    <div>
      {
        {
          pt_BR: (
            <DownloadBtn href="/curriculo.pdf" target="_blank">
              DOWNLOAD CV <DownloadOutlined />
            </DownloadBtn>
          ),
          en: (
            <DownloadBtn href="/resume.pdf" target="_blank">
              DOWNLOAD CV <DownloadOutlined />
            </DownloadBtn>
          ),
          es_ES: (
            <DownloadBtn href="/curriculo.pdf" target="_blank">
              DOWNLOAD CV <DownloadOutlined />
            </DownloadBtn>
          ),
        }[lang.lang]
      }
    </div>
  );
}
