import { IconBot, IconAttach, IconSend, IconLock, IconReport, IconCompare, IconProtocol } from "../../components/Icon"
import { useState, useEffect, type KeyboardEvent, useRef} from "react";

type Role = "assistant" | "user";

interface ChatMessage {
    id: string;
    role: Role;
    author: string;
    text: string;
}

interface PatientInfo {
    patientId: number
    onSend?: (text: string) => void;
}

const INITIAL_MESSAGES: ChatMessage[] = [
    {
        id: "m1",
        role: "assistant",
        author: "LLM Consultant",
        text:
            "I have analyzed the Right Tibia X-Ray for Patient #8492. I've highlighted a potential non-displaced spiral fracture in the proximal tibia (Confidence: 94%).\n\nHow would you like to proceed? I can provide treatment guidelines, compare with previous scans, or draft a preliminary radiology report.",
    },
    {
        id: "m2",
        role: "user",
        author: "Dr. Smith",
        text:
            "Can you overlay the fracture lines more clearly and check for any minor displacement I might be missing?",
    },
];
const QUICK_ACTIONS = [
    { id: "report", label: "Draft Radiology Report", icon: <IconReport /> },
    { id: "protocol", label: "Treatment Protocol", icon: <IconProtocol /> },
    { id: "compare", label: "Compare Contralateral", icon: <IconCompare /> },
];




function ChatLlm({patientId, onSend }: PatientInfo) {
    const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
    const [draft, setDraft] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(true);
    const streamRef = useRef<HTMLDivElement>(null);
    const fieldRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        const el = streamRef.current;
        if (el) el.scrollTop = el.scrollHeight;
    }, [messages, isAnalyzing]);
    const sendMessage = () => {
        const text = draft.trim();
        if (!text) return;

        const next: ChatMessage = {
            id: `m${Date.now()}`,
            role: "user",
            author: "Dr. Smith",
            text,
        };
        setMessages((prev) => [...prev, next]);
        setDraft("");
        if (fieldRef.current) fieldRef.current.style.height = "auto";
        setIsAnalyzing(true);
        onSend?.(text);
    };

    const handleDraftChange = (value: string) => {
        setDraft(value);
        const el = fieldRef.current;
        if (el) {
            el.style.height = "auto";
            el.style.height = `${Math.min(el.scrollHeight, 140)}px`;
        }
    };
    
    
    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };
    

    const runQuickAction = (label: string) => {
        handleDraftChange(label);
        fieldRef.current?.focus();
    };

    

    return (
        <section className="fai-chat" aria-label="Consultant chat">
            <div className="fai-chat__stream" ref={streamRef}>
                <div className="fai-system-tag">
                    Consultation Started — Patient #{patientId} Context Loaded
                </div>

                {messages.map((m) => (
                    <div key={m.id} className={`fai-msg fai-msg--${m.role}`}>
                        <div
                            className={`fai-msg__avatar fai-msg__avatar--${m.role === "assistant" ? "bot" : "user"
                                }`}
                        >
                            {m.role === "assistant" ? <IconBot /> : "DS"}
                        </div>
                        <div className="fai-msg__body">
                            <span className="fai-msg__name">{m.author}</span>
                            <div className={`fai-bubble fai-bubble--${m.role}`}>{m.text}</div>
                        </div>
                    </div>
                ))}

                {isAnalyzing && (
                    <div className="fai-msg fai-msg--assistant">
                        <div className="fai-msg__avatar fai-msg__avatar--bot">
                            <IconBot />
                        </div>
                        <div className="fai-typing">
                            <span className="fai-typing__label">
                                LLM Consultant is analyzing…
                            </span>
                            <div className="fai-typing__bubble" aria-label="Analyzing">
                                <span className="fai-typing__dot" />
                                <span className="fai-typing__dot" />
                                <span className="fai-typing__dot" />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* ---------------- Composer ---------------- */}
            <div className="fai-composer">
                <div className="fai-quick">
                    {QUICK_ACTIONS.map((a) => (
                        <button
                            key={a.id}
                            type="button"
                            className="fai-quick__btn"
                            onClick={() => runQuickAction(a.label)}
                        >
                            {a.icon}
                            {a.label}
                        </button>
                    ))}
                </div>

                <div className="fai-inputbar">
                    <button type="button" className="fai-inputbar__attach" aria-label="Attach file">
                        <IconAttach />
                    </button>
                    <textarea
                        ref={fieldRef}
                        className="fai-inputbar__field"
                        rows={1}
                        placeholder="Ask about the current scan or medical protocols…"
                        value={draft}
                        onChange={(e) => handleDraftChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        type="button"
                        className="fai-inputbar__send"
                        onClick={sendMessage}
                        disabled={!draft.trim()}
                        aria-label="Send message"
                    >
                        <IconSend />
                    </button>
                </div>

                <div className="fai-composer__footer">
                    <span className="fai-composer__secure">
                        <IconLock /> End-to-end encrypted. HIPAA compliant.
                    </span>
                    <span>Press Enter to send, Shift+Enter for new line</span>
                </div>
            </div>
        </section>
    )
}
export default ChatLlm