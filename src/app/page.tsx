const EMERGENCY_ITEMS = [
  {
    link: 'Sample.pdf',
    icon: 'emergency-icon.png',
    title: 'Emergency Response Manual'
  },
  {
    link: 'https://docs.google.com/document/d/16eXJbz_qgEtViO-kVeX8cp-JfcZY9-XmVRefe7YRmco/edit?usp=sharing',
    icon: 'chemical-icon.png',
    title: 'SDS & Chemical Register'
  }
];
import Image from 'next/image';
export default function Home() {
  return (
    <div className="container">
      {EMERGENCY_ITEMS && EMERGENCY_ITEMS.length > 0 ? (
        EMERGENCY_ITEMS.map((item) => (
          <div
            className="box"
            key={item.title}>
            <a
              className="box-link"
              target="_blank"
              href={item.link}>
              <Image
                className="box-icon"
                width={80}
                height={100}
                src={item.icon}
                alt={item.title}
              />
              <div className="box-title">{item.title}</div>
            </a>
          </div>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
