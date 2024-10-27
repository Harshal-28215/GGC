"use client"

import React, { createContext, useState } from 'react';

// Define the type for your context value
type GGCContextValue = {
    getactive: boolean;
    otpactive: boolean;
    otp: string;
    formdata: string;
    handleformdata: (value: string) => void;
    handleotp: (value: number) => void;
    handleotpactive: (value: boolean) => void;
    handleactive: (value: boolean) => void;
};

// Create the initial context value
const initialContextValue: GGCContextValue = {
    getactive: false,
    otpactive: false,
    otp: "",
    formdata: "",
    handleformdata: () => {},
    handleotp: () => {},
    handleotpactive: () => {},
    handleactive: () => {},
};

// Create the context
export const GGCContext = createContext<GGCContextValue>(initialContextValue);

// Create the context provider component
export const GGCProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    
    const [getactive, setactive] = useState(false);
    const [otpactive, setotpactive] = useState(false);
    const [otp, setotp] = useState("");
    const [formdata, setformdata] = useState("");

    const handleformdata = (value: string) => {
        setformdata(value);
    }

    const handleactive = (value: boolean) => {
        setactive(value);
    }

    const handleotp = (value: number) => {
        
        const stringotp = value.toString();
        setotp(stringotp);
        

        setTimeout(() => {
            setotp("");
            console.log("OTP has been removed after 10 minutes.");
            
          }, 600000);
    }
    
    const handleotpactive = (value: boolean) => {
        setotpactive(value);
    }
    
    // Create the context value object
    const contextValue: GGCContextValue = {
        getactive,
        handleactive,
        otpactive,
        otp,
        formdata,
        handleformdata,
        handleotp,
        handleotpactive,
    };
    
    return (
        <GGCContext.Provider value={contextValue}>
            {children}
        </GGCContext.Provider>
    );
};