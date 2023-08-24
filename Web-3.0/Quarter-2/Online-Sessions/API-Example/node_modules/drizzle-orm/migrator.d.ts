interface KitConfig {
    out: string;
    schema: string;
}
interface MigrationConfig {
    migrationsFolder: string;
    migrationsTable?: string;
}
interface MigrationMeta {
    sql: string[];
    folderMillis: number;
    hash: string;
    bps: boolean;
}
declare function readMigrationFiles(config: string | MigrationConfig): MigrationMeta[];

export { KitConfig, MigrationConfig, MigrationMeta, readMigrationFiles };
