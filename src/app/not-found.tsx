import Link from "next/link"

const Icon = ({ className }: { className?: string }) => {
    return (
        <svg className={className} viewBox="0 0 411 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 114.318V88.8993L61.6682 1.84384H84.4265V36.35H71.2227L38.6445 87.5823V88.6359H119.261V114.318H6ZM71.6208 136.707V106.548L72.2843 95.4186V1.84384H103.005V136.707H71.6208Z" fill="#162930" fill-opacity="0.5" />
            <path d="M207.625 140C195.77 140 185.552 137.212 176.971 131.637C168.39 126.018 161.777 117.962 157.132 107.469C152.488 96.9332 150.188 84.2678 150.232 69.4732C150.276 54.6786 152.598 42.1229 157.199 31.8062C161.843 21.4456 168.434 13.5654 176.971 8.16558C185.552 2.72186 195.77 0 207.625 0C219.48 0 229.698 2.72186 238.279 8.16558C246.905 13.5654 253.54 21.4456 258.184 31.8062C262.829 42.1668 265.129 54.7225 265.085 69.4732C265.085 84.3117 262.762 96.9991 258.118 107.535C253.473 118.072 246.86 126.127 238.279 131.703C229.742 137.234 219.524 140 207.625 140ZM207.625 113.33C214.702 113.33 220.431 109.752 224.81 102.596C229.189 95.3967 231.356 84.3556 231.312 69.4732C231.312 59.7272 230.317 51.6933 228.326 45.3716C226.336 39.006 223.571 34.2647 220.033 31.1477C216.494 28.0307 212.358 26.4722 207.625 26.4722C200.592 26.4722 194.908 30.0063 190.573 37.0743C186.238 44.0985 184.048 54.8981 184.004 69.4732C183.96 79.3509 184.911 87.5384 186.857 94.0357C188.848 100.533 191.635 105.384 195.217 108.589C198.8 111.75 202.936 113.33 207.625 113.33Z" fill="#162930" fill-opacity="0.5" />
            <path d="M297.184 114.318V88.8993L352.852 1.84384H375.61V36.35H362.407L329.828 87.5823V88.6359H410.444V114.318H297.184ZM362.805 136.707V106.548L363.468 95.4186V1.84384H394.189V136.707H362.805Z" fill="#162930" fill-opacity="0.5" />
            <path d="M0 114.318V88.8993L55.6682 1.84384H78.4265V36.35H65.2227L32.6445 87.5823V88.6359H113.261V114.318H0ZM65.6208 136.707V106.548L66.2843 95.4186V1.84384H97.0047V136.707H65.6208Z" fill="#FFE4E4" />
            <path d="M201.625 140C189.77 140 179.552 137.212 170.971 131.637C162.39 126.018 155.777 117.962 151.132 107.469C146.488 96.9332 144.188 84.2678 144.232 69.4732C144.276 54.6786 146.598 42.1229 151.199 31.8062C155.843 21.4456 162.434 13.5654 170.971 8.16558C179.552 2.72186 189.77 0 201.625 0C213.48 0 223.698 2.72186 232.279 8.16558C240.905 13.5654 247.54 21.4456 252.184 31.8062C256.829 42.1668 259.129 54.7225 259.085 69.4732C259.085 84.3117 256.762 96.9991 252.118 107.535C247.473 118.071 240.86 126.127 232.279 131.703C223.742 137.234 213.524 140 201.625 140ZM201.625 113.33C208.702 113.33 214.431 109.752 218.81 102.596C223.189 95.3967 225.356 84.3556 225.312 69.4732C225.312 59.7272 224.317 51.6933 222.326 45.3716C220.336 39.006 217.571 34.2647 214.033 31.1477C210.494 28.0307 206.358 26.4722 201.625 26.4722C194.592 26.4722 188.908 30.0063 184.573 37.0743C180.238 44.0985 178.048 54.8981 178.004 69.4732C177.96 79.3509 178.911 87.5384 180.857 94.0357C182.848 100.533 185.635 105.384 189.217 108.589C192.8 111.75 196.936 113.33 201.625 113.33Z" fill="#FFE4E4" />
            <path d="M291.184 114.318V88.8993L346.852 1.84384H369.61V36.35H356.407L323.828 87.5823V88.6359H404.444V114.318H291.184ZM356.805 136.707V106.548L357.468 95.4186V1.84384H388.189V136.707H356.805Z" fill="#FFE4E4" />
        </svg>

    )
}

function NotFoundPage() {
    return (
        <div className="min-h-[80vh] px-4 lg:px-6 flex flex-col items-center justify-center bg-white">
            <div className="mb-7 max-w-[14rem] lg:max-w-[25rem]">
                <Icon className="w-full" />
            </div>
            
            <h1 className="font-semibold text-[1.5rem] leading-[2.25rem] mb-4">Oops! Page not found</h1>
            <p className="mb-10 color-[#484847] text-center">The page you are looking for is not available at the moment</p>
            <Link className="bg-[#560707] rounded-md text-white py-2.5 px-8 " href="/">
                Go back
            </Link>
        </div>
    )
}

export default NotFoundPage