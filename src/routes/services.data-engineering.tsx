import { createFileRoute } from "@tanstack/react-router";
import { SubServicePage } from "@/components/site/SubServicePage";
import { TechnologyExpertiseSection } from "@/components/site/TechnologyExpertiseSectionForAiSolutionsPage";
import { subServices } from "@/lib/sub-services";

const entry = subServices["data-engineering"];

export const Route = createFileRoute("/services/data-engineering")({
  head: () => ({
    meta: [
      { title: `${entry.eyebrow} — Pure Technology` },
      { name: "description", content: entry.lede },
      { property: "og:title", content: `${entry.eyebrow} — Pure Technology` },
      { property: "og:description", content: entry.lede },
    ],
  }),
  component: DataEngineering,
});

function DataEngineering() {
  return (
    <SubServicePage
      {...entry}
      title={entry.title}
      extraSection={
        <TechnologyExpertiseSection
  accent="var(--brand-orange)"
  tabs={[
    {
      label: "Ingestion & ETL",
      cards: [
        { role: "ETL Engineers",       level: "L5", category: "Batch & Stream ETL",   tech: ["Apache Spark", "Flink", "Kafka"] },
        { role: "Pipeline Engineers",  level: "L5", category: "Orchestration",         tech: ["Airflow", "Prefect", "Dagster"] },
        { role: "Streaming Eng.",      level: "L6", category: "Real-time Streaming",   tech: ["Kafka", "Kinesis", "Pub/Sub"] },
        { role: "Integration Eng.",    level: "L4", category: "Data Integration",      tech: ["Fivetran", "Airbyte", "dbt"] },
      ],
    },
    {
      label: "Storage & Warehousing",
      cards: [
        { role: "Data Warehouse Eng.", level: "L6", category: "Cloud DWH",        tech: ["Snowflake", "BigQuery", "Redshift"] },
        { role: "Lakehouse Engineers", level: "L5", category: "Data Lakehouse",   tech: ["Delta Lake", "Iceberg", "Hudi"] },
        { role: "Database Architects", level: "L6", category: "OLTP & OLAP",      tech: ["PostgreSQL", "ClickHouse", "DuckDB"] },
        { role: "Vector DB Engineers", level: "L5", category: "Vector Storage",   tech: ["Pinecone", "Weaviate", "pgvector"] },
      ],
    },
    {
      label: "Transformation & dbt",
      cards: [
        { role: "dbt Engineers",       level: "L5", category: "Transformation",   tech: ["dbt Core", "dbt Cloud", "SQLMesh"] },
        { role: "Analytics Engineers", level: "L5", category: "Analytics",        tech: ["SQL", "Python", "Metabase"] },
        { role: "Data Modellers",      level: "L6", category: "Data Modelling",   tech: ["Dimensional", "Data Vault", "OBT"] },
      ],
    },
    {
      label: "Governance & Quality",
      cards: [
        { role: "Data Quality Eng.",   level: "L5", category: "DQ & Observability",tech: ["Great Expectations", "Soda", "Monte Carlo"] },
        { role: "Data Governance Eng.",level: "L6", category: "Governance",         tech: ["Collibra", "Alation", "DataHub"] },
        { role: "Data Catalog Eng.",   level: "L4", category: "Cataloguing",        tech: ["OpenMetadata", "Amundsen", "Atlan"] },
      ],
    },
  ]}
/>
      }
    />
  );
}
