import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex items-center flex-col pb-2">
                <AppLogoIcon className="text-white dark:text-black" />
                <div className="ml-1 grid flex-1 text-left">
                    <span className="mb-0.5 truncate text-[10px] leading-none font-semibold uppercase">precision die casting inc</span>
                </div>
            </div>
        </>
    );
}
