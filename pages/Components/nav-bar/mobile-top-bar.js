import Link from 'next/link';
import { menu } from '/pages/core/info';
import { processedInfo } from '/pages/core/info';

export default function MobileTopBar() {

    return <>
        <div className="top-bar">
            <Link href={processedInfo.callBusiness} legacyBehavior>
                <div className="top-bar-item-left">
                    CALL NOW
                </div>
            </Link>
            <div className="top-bar-item-spacer">
            </div>
            <Link href={menu.linkToMainMenu3} legacyBehavior>
                <div className="top-bar-item-right">
                    BOOK NOW
                </div>
            </Link>
        </div>
    </>
}