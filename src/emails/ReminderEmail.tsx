import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Img,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

interface ReminderEmailProps {
  photoUrl: string;
  caption?: string;
  locationName?: string;
  dateTaken: string;
  recipientName: string;
}

export function ReminderEmail({
  photoUrl,
  caption,
  locationName,
  dateTaken,
  recipientName,
}: ReminderEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={body}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={heading}>&#x1F451; Memory Reminder</Heading>
          </Section>

          <Section style={content}>
            <Text style={greeting}>
              Hi {recipientName},
            </Text>
            <Text style={text}>
              A beautiful memory from this day! Here&apos;s a photo from{" "}
              <strong>{dateTaken}</strong>
              {locationName && (
                <> at <strong>{locationName}</strong></>
              )}
              .
            </Text>

            <Img
              src={photoUrl}
              alt={caption || "Memory photo"}
              width={500}
              style={photo}
            />

            {caption && (
              <Text style={captionStyle}>
                &ldquo;{caption}&rdquo;
              </Text>
            )}

            <Hr style={divider} />

            <Text style={footer}>
              With love,
              <br />
              My Bulgarian Princess
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#fefdf8",
  fontFamily: "Georgia, serif",
};

const container = {
  maxWidth: "560px",
  margin: "0 auto",
  padding: "40px 20px",
};

const header = {
  textAlign: "center" as const,
  marginBottom: "24px",
};

const heading = {
  color: "#ab1f49",
  fontSize: "28px",
  fontWeight: "bold" as const,
};

const content = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  padding: "32px",
  border: "1px solid #e8dfd2",
};

const greeting = {
  fontSize: "16px",
  color: "#1a1a2e",
  marginBottom: "8px",
};

const text = {
  fontSize: "16px",
  color: "#1a1a2e",
  lineHeight: "1.6",
};

const photo = {
  width: "100%",
  borderRadius: "8px",
  marginTop: "16px",
  marginBottom: "16px",
};

const captionStyle = {
  fontSize: "14px",
  color: "#6b5e4f",
  fontStyle: "italic" as const,
  textAlign: "center" as const,
};

const divider = {
  borderColor: "#e8dfd2",
  margin: "24px 0",
};

const footer = {
  fontSize: "14px",
  color: "#6b5e4f",
  textAlign: "center" as const,
};
