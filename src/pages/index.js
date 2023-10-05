import Hero from '@/components/template/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Hero />

			<Section heading="">
				<p className="text-justify">
					ERP Lanka (Pvt) Ltd, established in 2009, offers diverse
					accounting software solutions including QuickBooks. They
					introduced cloud-based MIS and on-premise AccMIS ERP
					systems, along with QB Integration services. Their
					customizable Accounting and ERP software aids organizations
					in efficient financial and business operations, aiming to
					become Sri Lanka&lsquo;s trusted holistic business software
					provider.
				</p>
			</Section>

			<Section className="flex flex-row -mx-2" heading="">
				<Card className="w-1/3" img="./images/quickbooks.png">
					<h1>QuickBooks</h1>
					<h2>www.qblanka.com</h2>
					<ul>
						<Link href=''><li>Pro</li></Link>
						<Link href=''><li>Premier</li></Link>
						<Link href=''><li>Enterprises</li></Link>
						<Link href=''><li>Online</li></Link>
						<Link href=''><li>Printing softwares</li></Link>
						<Link href=''><li>Integration</li></Link>
					</ul>
				</Card>

				<Card className="w-1/3" img="./images/erp_lanka.jpg">
					<h1>MIS ERP</h1>
					<h2>www.miserp.com</h2>
					<ul>
						<Link href=''><li>Online accounts</li></Link>
						<Link href=''><li>MIS Production & Job Costing</li></Link>
						<Link href=''><li>MIS CRM Management</li></Link>
						<Link href=''><li>MIS Fuel Management</li></Link>
						<Link href=''><li>MIS Online Payroll</li></Link>
						<Link href=''><li>MIS HRM</li></Link>
					</ul>
				</Card>

				<Card className="w-1/3" img="./images/erp_lanka.jpg">
					<h1>Acc MIS</h1>
					<h2>www.accmis.com</h2>
					<ul>
						<Link href=''><li>Accounting</li></Link>
						<Link href=''><li>Production & Job Costing</li></Link>
						<Link href=''><li>HRM</li></Link>
						<Link href=''><li>Micro Finance</li></Link>
						<Link href=''><li>Fixed assets</li></Link>
						<Link href=''><li>POS</li></Link>
					</ul>
				</Card>
			</Section>
		</>
	);
}
