import Sidebar from "../components/Sidebar";
import PageNavigator from "../components/PageNavigator";
import AssistantPanel from "../components/AssistantPanel";
import "../styles/Assistant.css";

function AssistantPage() {
    return (
        <div className="layout assistant-layout">
            <Sidebar />

            <div className="assistant-page">
                <PageNavigator />

                <div className="assistant-page-header">
                    <span className="assistant-page-badge">AI Assistant</span>
                    <h1>Ask your career coach anything</h1>
                    <p>
                        Get help with resumes, internships, application strategy,
                        and next steps in your job search.
                    </p>
                </div>

                <div className="assistant-page-card">
                    <AssistantPanel />
                </div>
            </div>
        </div>
    );
}

export default AssistantPage;
