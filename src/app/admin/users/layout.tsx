import { AppSection } from '@/components/Common/AppSection';
import { FaUser } from 'react-icons/fa';

interface Props {
	children: React.ReactNode;
}
export default function AdminProductsLayout({ children }: Props) {
	return (
		<AppSection icon={<FaUser />} title="Usuarios">
			{children}
		</AppSection>
	);
}
