import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";

export async function generateMetadata() {
  if (!about) {
    return {
      title: "About",
      description: "About page",
    };
  }

  const title = about.title || "About";
  const description = about.description || "About page";
  const ogImage = baseURL ? `https://${baseURL}/og?title=${encodeURIComponent(title)}` : "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: baseURL ? `https://${baseURL}/about` : "",
      images: ogImage ? [{ url: ogImage, alt: title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default function About() {
  if (!about) {
    return <div>Loading...</div>;
  }

  const structure = [
    {
      title: about.intro?.title || "Introduction",
      display: about.intro?.display ?? true,
      items: [],
    },
    {
      title: about.skills?.title || "Skills",
      display: about.skills?.display ?? true,
      items: about.skills?.categories?.map((category) => category.title) || [],
    },
    {
      title: about.experience?.title || "Experience",
      display: about.experience?.display ?? true,
      items: about.experience?.roles?.map((role) => role.company) || [],
    },
    {
      title: about.education?.title || "Education",
      display: about.education?.display ?? true,
      items: about.education?.institutions?.map((inst) => inst.name) || [],
    },
  ];

  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro?.description || "",
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith("mailto:"))
              .map((item) => item.link),
            worksFor: {
              "@type": "Organization",
              name: about.experience?.roles?.[0].company || "",
            },
          }),
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          {/* Header Section */}
          <Column
            id={about.intro?.title || "Introduction"}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
              marginBottom="m"
            >
              {person.role}
            </Text>
            <Flex gap="16" wrap horizontal="center" marginBottom="m">
              <Flex gap="8" vertical="center">
                <Icon name="location" onBackground="neutral-weak" />
                <Text>{person.location}</Text>
              </Flex>
              {/* <Flex gap="8" vertical="center">
                <Icon name="phone" onBackground="neutral-weak" />
                <Text>{person.contact.phone}</Text>
              </Flex>
              <Flex gap="8" vertical="center">
                <Icon name="email" onBackground="neutral-weak" />
                <Text>{person.contact.email}</Text>
              </Flex> */}
            </Flex>
            {social.length > 0 && (
            <Flex className={styles.blockAlign} gap="16" wrap horizontal="center">
              {social.map((item) => item.link && (
                <Flex key={item.name} gap="8" vertical="center">
                  <Icon name={item.icon} onBackground="neutral-weak" />
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Text>{item.name}</Text>
                  </a>
                </Flex>
              ))}
            </Flex>
          )}
          </Column>

          {/* Summary Section */}
          {about.intro?.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              <Heading as="h2" variant="display-strong-s" marginBottom="m">
                {about.intro?.title || "Introduction"}
              </Heading>
              <Text variant="body-default-m">{about.intro?.description || ""}</Text>
            </Column>
          )}

          {/* Skills Section */}
          {about.skills?.display && (
            <Column fillWidth gap="m" marginBottom="xl">
              <Heading as="h2" variant="display-strong-s" marginBottom="m">
                {about.skills?.title || "Skills"}
              </Heading>
              {about.skills?.categories?.map((category, index) => (
                <Column key={index} fillWidth marginBottom="m">
                  <Text variant="heading-strong-s" marginBottom="s">
                    {category.title}
                  </Text>
                  <Flex gap="8" wrap>
                    {category.items.map((item, idx) => (
                      <Tag key={idx} variant="neutral">
                        {item}
                      </Tag>
                    ))}
                  </Flex>
                </Column>
              ))}
            </Column>
          )}

          {/* Experience Section */}
          {about.experience?.display && (
            <Column fillWidth gap="l" marginBottom="xl">
              <Heading as="h2" variant="display-strong-s" marginBottom="m">
                {about.experience?.title || "Experience"}
              </Heading>
              {about.experience?.roles?.map((role, index) => (
                <Column key={index} fillWidth marginBottom="l">
                  <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                    <Text variant="heading-strong-l">
                      {role.company}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {role.timeframe}
                    </Text>
                  </Flex>
                  <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                    {role.role}
                  </Text>
                  <Column as="ul" gap="12">
                    {role.achievements.map((achievement, idx) => (
                      <Text
                        as="li"
                        variant="body-default-m"
                        key={idx}
                      >
                        {achievement}
                      </Text>
                    ))}
                  </Column>
                </Column>
              ))}
            </Column>
          )}

          {/* Education Section */}
          {about.education?.display && (
            <Column fillWidth gap="m" marginBottom="xl">
              <Heading as="h2" variant="display-strong-s" marginBottom="m">
                {about.education?.title || "Education"}
              </Heading>
              {about.education?.institutions?.map((inst, index) => (
                <Column key={index} fillWidth>
                  <Text variant="heading-strong-l" marginBottom="4">
                    {inst.name}
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="2">
                    {inst.year}
                  </Text>
                  <Text variant="body-default-m">
                    {inst.description}
                  </Text>
                </Column>
              ))}
            </Column>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
