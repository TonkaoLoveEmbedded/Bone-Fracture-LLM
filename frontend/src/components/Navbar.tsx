//import { useState, type ReactNode } from "react";
import { IconUser, IconBell } from "./Icon";

interface PatientData{
    patientId : number
    scanLabel : string
}

function Navbar({patientId, scanLabel}: PatientData){
    return (
        <header className="fai-header">
                <h1 className="fai-header__title">FractureAI Diagnostics</h1>
                <div className="fai-header__right">
                  <div className="fai-context-pill">
                    <span className="fai-context-pill__dot" />
                    Context: Patient #{patientId} — {scanLabel}
                  </div>
                  <button type="button" className="fai-icon-btn" aria-label="Notifications">
                    <IconBell />
                  </button>
                  <button type="button" className="fai-icon-btn" aria-label="Account">
                    <IconUser />
                  </button>
                </div>
              </header>
    )
}
export default Navbar