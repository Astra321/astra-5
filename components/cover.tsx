
import Image from 'next/image';

const Cover = ({ src, alt }) => (
    <div>
        <Image src={src} alt={alt} layout="responsive" width={500} height={300} />
    </div>
);

export default Cover;
