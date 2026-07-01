import { Link, useLocation } from "react-router-dom";
import "../styles/PageNavigator.css";

const steps = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/add-opportunity", label: "Add Opportunity" },
    { path: "/applications", label: "Applications" },
    { path: "/resume", label: "Resume" },
    { path: "/profile", label: "Profile" }
];

function PageNavigator() {
    const location = useLocation();
    const currentIndex = steps.findIndex((step) => step.path === location.pathname);
    const currentStep = steps[currentIndex] || steps[0];
    const previousStep = currentIndex > 0 ? steps[currentIndex - 1] : null;
    const nextStep = currentIndex >= 0 && currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null;

    return (
        <div className="page-navigator">
            {previousStep ? (
                <Link to={previousStep.path} className="nav-pill nav-pill-secondary">
                    ← {previousStep.label}
                </Link>
            ) : null}

            <span className="nav-pill nav-pill-current">{currentStep.label}</span>

            {nextStep ? (
                <Link to={nextStep.path} className="nav-pill nav-pill-primary">
                    {nextStep.label} →
                </Link>
            ) : null}
        </div>
    );
}

export default PageNavigator;
