import { Careers } from "@/components/careers";
import { SEO } from "@/components/SEO";

const CareersPage = () => {
    return (
        <>
            <SEO
                title="Careers | Swift Trucking LLC"
                description="Join Swift Trucking LLC. Dispatch professionals and support roles with 24/7 operation. Apply to help drivers maximize earnings."
                canonical="https://swifttruckingllc.com/careers"
            />
            <Careers />
        </>
    );
};

export default CareersPage;
