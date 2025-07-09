'use client';

import { useState } from "react";
import { FilledLockIcon } from "../atoms/icons/FilledLockIcon";
import { RoundInputField } from "./RoundInputField";
import { FilledEyeIcon } from "../atoms/icons/FilledEyeIcon";
import { FilledSlashEyeIcon } from "../atoms/icons/FilledSlashEyeIcon";

export function PasswordInput({ placeholder = "Password"}) {
    let [isHidden, setIsHidden] = useState(true);

    return (
        <div>
            <RoundInputField icon={<FilledLockIcon size={24} />} inputName="password" placeholder={placeholder}
                type={isHidden ? "password" : "text"} >
                <button type="button" onClick={() => setIsHidden(!isHidden)} className="relative -bottom-2.5 right-4 opacity-20 text-blue-700 hover:opacity-80 h-0 w-0">
                    {isHidden ? <FilledSlashEyeIcon size={20} /> : <FilledEyeIcon size={20} />}
                </button>
            </RoundInputField>
        </div >
    );
}