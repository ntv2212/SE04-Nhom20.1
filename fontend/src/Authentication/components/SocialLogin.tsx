import React from "react";
import { ReactNode } from "react";
import Svg, { LinearGradient, Path, Stop } from "react-native-svg"
import { Box, theme } from "../../components";

const SIZE = theme.borderRadii.l * 2;
const Google = () => (<Svg
    // xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 45 45"
    width={20}
    height={20}
>
    <Path
        fill="#fbc02d"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <Path
        fill="#e53935"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <Path
        fill="#4caf50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <Path
        fill="#1565c0"
        d="M43.611 20.083L43.595 20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
</Svg>)
const Facebook = () => (<Svg
    // xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 45 45"
    width={20}
    height={20}
>
    <LinearGradient
        id="prefix__a"
        x1={9.993}
        x2={40.615}
        y1={9.993}
        y2={40.615}
        gradientUnits="userSpaceOnUse"
    >
        <Stop offset={0} stopColor="#2aa4f4" />
        <Stop offset={1} stopColor="#007ad9" />
    </LinearGradient>
    <Path
        fill="url(#prefix__a)"
        d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z"
    />
    <Path
        fill="#fff"
        d="M26.707 29.301h5.176l.813-5.258h-5.989v-2.874c0-2.184.714-4.121 2.757-4.121h3.283V12.46c-.577-.078-1.797-.248-4.102-.248-4.814 0-7.636 2.542-7.636 8.334v3.498H16.06v5.258h4.948v14.452c.98.146 1.973.246 2.992.246.921 0 1.82-.084 2.707-.204V29.301z"
    />
</Svg>)
const Gmail = () => (
    <Svg
        // xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 45 45"
        width={20}
        height={20}
    >
        <LinearGradient
            id="prefix__a"
            x1={15.072}
            x2={24.111}
            y1={13.624}
            y2={24.129}
            gradientUnits="userSpaceOnUse"
        >
            <Stop offset={0} stopColor="#e3e3e3" />
            <Stop offset={1} stopColor="#e2e2e2" />
        </LinearGradient>
        <Path
            fill="url(#prefix__a)"
            d="M42.485 40H5.515A2.515 2.515 0 013 37.485v-26.97A2.515 2.515 0 015.515 8h36.969A2.515 2.515 0 0145 10.515v26.969A2.515 2.515 0 0142.485 40z"
        />
        <LinearGradient
            id="prefix__b"
            x1={26.453}
            x2={36.17}
            y1={25.441}
            y2={37.643}
            gradientUnits="userSpaceOnUse"
        >
            <Stop offset={0} stopColor="#f5f5f5" />
            <Stop offset={0.03} stopColor="#eee" />
            <Stop offset={1} stopColor="#eee" />
        </LinearGradient>
        <Path
            fill="url(#prefix__b)"
            d="M42.485 40H8l37-29v26.485A2.515 2.515 0 0142.485 40z"
        />
        <LinearGradient
            id="prefix__c"
            x1={3}
            x2={45}
            y1={24}
            y2={24}
            gradientUnits="userSpaceOnUse"
        >
            <Stop offset={0} stopColor="#d74a39" />
            <Stop offset={1} stopColor="#c73d28" />
        </LinearGradient>
        <Path
            fill="url(#prefix__c)"
            d="M5.515 8H8v32H5.515A2.515 2.515 0 013 37.485v-26.97A2.515 2.515 0 015.515 8zm36.97 0H40v32h2.485A2.515 2.515 0 0045 37.485v-26.97A2.515 2.515 0 0042.485 8z"
        />
        <LinearGradient
            id="prefix__d"
            x1={24}
            x2={24}
            y1={8}
            y2={38.181}
            gradientUnits="userSpaceOnUse"
        >
            <Stop offset={0} stopOpacity={0.15} />
            <Stop offset={1} stopOpacity={0.03} />
        </LinearGradient>
        <Path
            fill="url(#prefix__d)"
            d="M42.485 40h-11.97L3 11.485v-.969A2.515 2.515 0 015.515 8h36.969A2.515 2.515 0 0145 10.515v26.969A2.515 2.515 0 0142.485 40z"
        />
        <LinearGradient
            id="prefix__e"
            x1={3}
            x2={45}
            y1={17.73}
            y2={17.73}
            gradientUnits="userSpaceOnUse"
        >
            <Stop offset={0} stopColor="#f5f5f5" />
            <Stop offset={1} stopColor="#f5f5f5" />
        </LinearGradient>
        <Path
            fill="url(#prefix__e)"
            d="M43.822 13.101L24 27.459 4.178 13.101A2.85 2.85 0 013 10.793v-.278A2.515 2.515 0 015.515 8h36.969A2.515 2.515 0 0145 10.515v.278a2.85 2.85 0 01-1.178 2.308z"
        />
        <LinearGradient
            id="prefix__f"
            x1={24}
            x2={24}
            y1={8.446}
            y2={27.811}
            gradientUnits="userSpaceOnUse"
        >
            <Stop offset={0} stopColor="#e05141" />
            <Stop offset={1} stopColor="#de4735" />
        </LinearGradient>
        <Path
            fill="url(#prefix__f)"
            d="M42.485 8h-.3L24 21.172 5.815 8h-.3A2.515 2.515 0 003 10.515v.278a2.85 2.85 0 001.178 2.308L24 27.459l19.822-14.358A2.85 2.85 0 0045 10.793v-.278A2.515 2.515 0 0042.485 8z"
        />
    </Svg>
)
interface SocialIconProps {
    children: ReactNode;
}
const SocialIcon = ({ children }: SocialIconProps) => {
    return (
        <Box
            marginHorizontal="s"
            backgroundColor="white"
            width={SIZE}
            height={SIZE}
            borderRadius="l"
            justifyContent="center"
            alignItems="center"
        >
            {children}
        </Box>
    )
}
const SocialLogin = () => {
    return (
        <Box flexDirection="row" justifyContent="center" >
            <SocialIcon>
                <Google />
            </SocialIcon>
            <SocialIcon>
                <Facebook />
            </SocialIcon>
            <SocialIcon>
                <Gmail />
            </SocialIcon>
        </Box>
    );
};
export default SocialLogin;