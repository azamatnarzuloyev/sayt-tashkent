import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

interface BreadcrumbsProps {
  items: { label: string; href?: string }[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = items.map(item => ({
    name: item.label,
    href: item.href,
  }))

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <div className="container mx-auto px-4 pt-6 pb-2">
        <Breadcrumb>
          <BreadcrumbList>
            {items.map((item, index) => {
              const isLast = index === items.length - 1
              return (
                <BreadcrumbItem key={index}>
                  {index > 0 && <BreadcrumbSeparator />}
                  {isLast ? (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={item.href || '/'}>{item.label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </>
  )
}
