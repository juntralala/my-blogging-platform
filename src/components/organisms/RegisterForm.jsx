import { AuthCard } from "../atoms/AuthCard";
import { FilledLockIcon } from "../atoms/icons/FilledLockIcon";
import { FilledPersonIcon } from "../atoms/icons/FilledPersonIcon";
import { FilledTagIcon } from "../atoms/icons/FilledTagIcon";
import { PillButton } from "../atoms/PillButton";
import { RoundInputField } from "../molecules/RoundInputField";

export function RegisterForm() {
    return (
        <AuthCard title="Register" description="Sebelum mengakses web lebih jauh silahkan register terlebih dahulu">
            <div className="mb-6">
                <RoundInputField icon={<FilledTagIcon size={24} />} inputName="name" placeholder="Name" type="text" />
            </div>
            <div className="mb-6">
                <RoundInputField icon={<FilledPersonIcon size={24} />} inputName="username" placeholder="Username" type="text" />
            </div>
            <div className="mb-6">
                <RoundInputField icon={<FilledLockIcon size={24} />} inputName="password" placeholder="Password" type="password" />
            </div>
            <div className="mb-6">
                <RoundInputField icon={<FilledLockIcon size={24} />} inputName="repeatPassword" placeholder="Repeat Password" type="password" />
            </div>

            <div className="flex mt-14">
                <PillButton>Next</PillButton>
            </div>
        </AuthCard>
    );
}