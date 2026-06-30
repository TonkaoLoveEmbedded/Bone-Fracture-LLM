import { IconCheck, IconInfo, IconHistory, IconZoom } from "../../components/Icon"
interface PatientImData{
    scanSrc:string
    scanLabel:string
    patientId:number
}

function Context({scanSrc, scanLabel, patientId}:PatientImData){
    return (
        <section className="fai-context" aria-label="Active context">
                <div className="fai-context__head">
                  <h2>Active Context</h2>
                  <p>Current image being analyzed</p>
                </div>
        
                <div className="fai-scan">
                  <img src={scanSrc} alt={`${scanLabel} for patient ${patientId}`} />
                  <span className="fai-scan__badge">Anomaly Detected</span>
                </div>
        
                <div className="fai-findings">
                  <div className="fai-findings__label">AI Initial Findings</div>
                  <div className="fai-finding">
                    <span className="fai-finding__icon fai-finding__icon--ok">
                      <IconCheck />
                    </span>
                    <span>
                      <strong>High probability (94%)</strong> of non-displaced spiral
                      fracture in proximal tibia.
                    </span>
                  </div>
                  <div className="fai-finding">
                    <span className="fai-finding__icon fai-finding__icon--info">
                      <IconInfo />
                    </span>
                    <span>
                      Fibula appears intact. No significant joint effusion detected.
                    </span>
                  </div>
                </div>
        
                <div className="fai-context__actions">
                  <button type="button" className="fai-context-action">
                    <IconZoom />
                    Enhance Region
                  </button>
                  <button type="button" className="fai-context-action">
                    <IconHistory />
                    Prior Scans
                  </button>
                </div>
              </section>
    )
}
export default Context