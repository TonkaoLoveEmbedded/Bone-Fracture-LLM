import {
  type FC,
} from "react";
import "./FractureAIDiagnostics.css";
import Sidebar from "../../components/Sidebar"
import Navbar from "../../components/Navbar";
import Context from "./Context";
import ChatLlm from "./ChatLlm";

/* =========================================================================
   Types & seed data
   ========================================================================= */


/* X-ray placeholder. Swap with your DICOM-rendered viewport (e.g. Cornerstone.js). */
const SCAN_SRC =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Medical_X-Ray_imaging_ALA06_nevit.jpg/480px-Medical_X-Ray_imaging_ALA06_nevit.jpg";

/* =========================================================================
   Component
   ========================================================================= */
interface FractureAIDiagnosticsProps {
  patientId?: number;
  scanLabel?: string;
  scanSrc?: string;
  /** Called when the physician sends a prompt. Hook this to your backend. */
  onSend?: (text: string) => void;
}

const FractureAIDiagnostics: FC<FractureAIDiagnosticsProps> = ({
  patientId = 8492,
  scanLabel = "Right Tibia X-Ray",
  scanSrc = SCAN_SRC,
  onSend,
}) => {

  return (
    <div className="fai">
      {/* ---------------- Sidebar ---------------- */}
      <Sidebar />
      {/* ---------------- Header ---------------- */}
      <Navbar patientId={patientId} scanLabel={scanLabel} />

      {/* ---------------- Active Context ---------------- */}
      <Context scanSrc={scanSrc} scanLabel={scanLabel} patientId={patientId} />

      {/* ---------------- Consultant Chat ---------------- */}
      <ChatLlm patientId={patientId} onSend={onSend} />
    </div>
  );
};

export default FractureAIDiagnostics;
