import React, {FC} from 'react';
import {Avatar, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import PersonAvatar from '../../assets/icons/PersonAvatar.svg';
import SocialProofBg from '../../assets/background/social-proof.svg';
type QuotationStep = "QUOTE" | "COVERAGE";
interface ReferenceUser {
    fullName?: string,
    location?: string,
}
interface SocialProofStatement {
    currentStep: QuotationStep,
    referenceUser?: ReferenceUser,
}

const QuoteStatementView:FC<ReferenceUser> = ({fullName, location}) => (
    <>
        <Avatar src={PersonAvatar} sx={{marginTop: -5}}/>
        <Stack
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{
                position:"relative",
                top: -15
            }}
        >
            <Typography color={"#273576"} sx={{
                fontSize: 12,
                fontWeight: 500,
            }}>
                “Great service, and even better rates!”
            </Typography>
            <Typography color={"#273576"} sx={{
                fontSize: 9.6,
            }}>
                {fullName} - {location}
            </Typography>
        </Stack>
    </>
);
const CoverageStatementView:FC = () => (
    <>
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
                position:"relative",
                top: -15
            }}
        >
            <Typography color={"#273576"} sx={{
                fontSize: 12,
                fontWeight: 500,
            }}>
                Contractors save more than 53% with
            </Typography>
            <Typography color={"#273576"} sx={{
                fontSize: 12,
                fontWeight: 500,
            }}>
                us in liability insurance!
            </Typography>
        </Stack>

    </>
);


const SocialProof: FC<SocialProofStatement> = ({currentStep, referenceUser}): JSX.Element => {
    const Screen = currentStep === "QUOTE" ? <QuoteStatementView  fullName={referenceUser?.fullName} location={referenceUser?.location}/> : <CoverageStatementView/>
    return (
        <>
            <Stack
                mt={5}
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{
                    height: 180,
                    backgroundImage: `url(${SocialProofBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 80%"
                }}
            >
                { Screen }
            </Stack>
        </>
    );
}

export default SocialProof;