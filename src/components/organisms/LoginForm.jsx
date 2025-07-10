import Link from "next/link";
import { FilledPersonIcon } from "../atoms/icons/FilledPersonIcon";
import { RoundInputField } from "../molecules/RoundInputField";
import { PillButton } from "../atoms/PillButton";
import { HorizontalLine } from "../atoms/HorizontalLine";
import { RoundIconContainer } from "../molecules/RoundIconContainer";
import { GoogleIcon } from "../atoms/icons/GoogleIcon";
import { FacebookIcon } from "../atoms/icons/FacebookIcon";
import { InstagramIcon } from "../atoms/icons/InstagramIcon";
import { RemembermeCheckbox } from "../atoms/RemembermeCheckbox";
import { SignUpPrompt } from "../atoms/SignUpPrompt";
import { AuthCard } from "../atoms/AuthCard";
import { PasswordInput } from "../molecules/PasswordInput";

export function LoginForm() {
    return (
    <AuthCard title="Selamat Datang Kembali" description="Tolong login ke akun kamu dulu">
        <div className="mb-6">
            <RoundInputField icon={<FilledPersonIcon size={24} />} inputName="username" placeholder="Username" />
        </div>
        <div className="mb-6">
            <PasswordInput />
        </div>
            <div className="flex justify-between mt-10">
                <RemembermeCheckbox />
                <Link href="" className="text-blue-500">Lupa password?</Link>
            </div>
            <div className="flex justify-center mt-5">
                <PillButton>Login</PillButton>
            </div>
            <div className="flex items-center gap-2 pt-8">
                <HorizontalLine>Atau login dengan</HorizontalLine>
            </div>
            <div className="flex justify-center gap-5 pt-6">
                <RoundIconContainer>
                    <GoogleIcon width="32" height="32" />
                </RoundIconContainer>
                <RoundIconContainer>
                    <FacebookIcon width="32" height="32" />
                </RoundIconContainer>
                <RoundIconContainer>
                    <InstagramIcon width="32" height="32" />
                </RoundIconContainer>
            </div>
            <div className="mt-6">
                <SignUpPrompt />
            </div>
        </AuthCard>
    );
} 