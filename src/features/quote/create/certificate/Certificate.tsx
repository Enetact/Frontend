import React, {FC, useState} from 'react';
import CertificatePayment from "./certificate-payment/CertificatePayment";
import CertificateAccount from "./certificate-account/CertificateAccount";


const Certificate: FC = (): JSX.Element  =>  {

    const [hasPaid, setHasPaid] = useState<boolean>(false);

    const View = hasPaid ? <CertificateAccount setHasPaid={setHasPaid}/> : <CertificatePayment setHasPaid={setHasPaid}/>;

    return (
        <>
            { View }
        </>
    );
};

export default Certificate;