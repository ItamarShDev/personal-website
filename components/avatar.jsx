import Image from "components/image";

export default function Avatar() {
    return (
        <span className="avatar">
            <Image
                src={`images/me.png`}
                alt="my picture"
                size="inherit"
                objectFit="cover"
                title="Me, preparing for my wedding"
            />
            <style jsx>{`
                .avatar {
                    height: inherit;
                    width: inherit;
                    overflow: hidden;
                }
            `}</style>
        </span>
    );
}
