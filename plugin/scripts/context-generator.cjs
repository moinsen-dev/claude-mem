"use strict";var ke=Object.create;var q=Object.defineProperty;var Ue=Object.getOwnPropertyDescriptor;var xe=Object.getOwnPropertyNames;var $e=Object.getPrototypeOf,we=Object.prototype.hasOwnProperty;var Fe=(c,e)=>{for(var s in e)q(c,s,{get:e[s],enumerable:!0})},ue=(c,e,s,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of xe(e))!we.call(c,r)&&r!==s&&q(c,r,{get:()=>e[r],enumerable:!(t=Ue(e,r))||t.enumerable});return c};var le=(c,e,s)=>(s=c!=null?ke($e(c)):{},ue(e||!c||!c.__esModule?q(s,"default",{value:c,enumerable:!0}):s,c)),Xe=c=>ue(q({},"__esModule",{value:!0}),c);var ze={};Fe(ze,{generateContext:()=>Qe});module.exports=Xe(ze);var w=le(require("path"),1),z=require("os"),H=require("fs");var Ie=le(require("better-sqlite3"),1);var h=require("path"),be=require("os"),Oe=require("fs");var fe=require("url");var W=require("fs"),Se=require("path"),he=require("os");var te=["bugfix","feature","refactor","discovery","decision","change"],re=["how-it-works","why-it-exists","what-changed","problem-solution","gotcha","pattern","trade-off"],Ee={bugfix:"\u{1F534}",feature:"\u{1F7E3}",refactor:"\u{1F504}",change:"\u2705",discovery:"\u{1F535}",decision:"\u2696\uFE0F","session-request":"\u{1F3AF}"},me={discovery:"\u{1F50D}",change:"\u{1F6E0}\uFE0F",feature:"\u{1F6E0}\uFE0F",bugfix:"\u{1F6E0}\uFE0F",refactor:"\u{1F6E0}\uFE0F",decision:"\u2696\uFE0F"},Te=te.join(","),ge=re.join(",");var ne=(i=>(i[i.DEBUG=0]="DEBUG",i[i.INFO=1]="INFO",i[i.WARN=2]="WARN",i[i.ERROR=3]="ERROR",i[i.SILENT=4]="SILENT",i))(ne||{}),oe=class{level=null;useColor;constructor(){this.useColor=process.stdout.isTTY??!1}getLevel(){if(this.level===null){let e=x.get("CLAUDE_MEM_LOG_LEVEL").toUpperCase();this.level=ne[e]??1}return this.level}correlationId(e,s){return`obs-${e}-${s}`}sessionId(e){return`session-${e}`}formatData(e){if(e==null)return"";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return e.toString();if(typeof e=="object"){if(e instanceof Error)return this.getLevel()===0?`${e.message}
${e.stack}`:e.message;if(Array.isArray(e))return`[${e.length} items]`;let s=Object.keys(e);return s.length===0?"{}":s.length<=3?JSON.stringify(e):`{${s.length} keys: ${s.slice(0,3).join(", ")}...}`}return String(e)}formatTool(e,s){if(!s)return e;try{let t=typeof s=="string"?JSON.parse(s):s;if(e==="Bash"&&t.command){let r=t.command.length>50?t.command.substring(0,50)+"...":t.command;return`${e}(${r})`}if(e==="Read"&&t.file_path){let r=t.file_path.split("/").pop()||t.file_path;return`${e}(${r})`}if(e==="Edit"&&t.file_path){let r=t.file_path.split("/").pop()||t.file_path;return`${e}(${r})`}if(e==="Write"&&t.file_path){let r=t.file_path.split("/").pop()||t.file_path;return`${e}(${r})`}return e}catch{return e}}log(e,s,t,r,i){if(e<this.getLevel())return;let a=new Date().toISOString().replace("T"," ").substring(0,23),d=ne[e].padEnd(5),p=s.padEnd(6),g="";r?.correlationId?g=`[${r.correlationId}] `:r?.sessionId&&(g=`[session-${r.sessionId}] `);let l="";i!=null&&(this.getLevel()===0&&typeof i=="object"?l=`
`+JSON.stringify(i,null,2):l=" "+this.formatData(i));let b="";if(r){let{sessionId:O,sdkSessionId:y,correlationId:E,...n}=r;Object.keys(n).length>0&&(b=` {${Object.entries(n).map(([f,S])=>`${f}=${S}`).join(", ")}}`)}let v=`[${a}] [${d}] [${p}] ${g}${t}${b}${l}`;e===3?console.error(v):console.log(v)}debug(e,s,t,r){this.log(0,e,s,t,r)}info(e,s,t,r){this.log(1,e,s,t,r)}warn(e,s,t,r){this.log(2,e,s,t,r)}error(e,s,t,r){this.log(3,e,s,t,r)}dataIn(e,s,t,r){this.info(e,`\u2192 ${s}`,t,r)}dataOut(e,s,t,r){this.info(e,`\u2190 ${s}`,t,r)}success(e,s,t,r){this.info(e,`\u2713 ${s}`,t,r)}failure(e,s,t,r){this.error(e,`\u2717 ${s}`,t,r)}timing(e,s,t,r){this.info(e,`\u23F1 ${s}`,r,{duration:`${t}ms`})}},U=new oe;var x=class{static DEFAULTS={CLAUDE_MEM_MODEL:"claude-haiku-4-5",CLAUDE_MEM_CONTEXT_OBSERVATIONS:"50",CLAUDE_MEM_WORKER_PORT:"37777",CLAUDE_MEM_SKIP_TOOLS:"ListMcpResourcesTool,SlashCommand,Skill,TodoWrite,AskUserQuestion",CLAUDE_MEM_DATA_DIR:(0,Se.join)((0,he.homedir)(),".claude-mem"),CLAUDE_MEM_LOG_LEVEL:"INFO",CLAUDE_MEM_PYTHON_VERSION:"3.13",CLAUDE_CODE_PATH:"",CLAUDE_MEM_CONTEXT_SHOW_READ_TOKENS:"true",CLAUDE_MEM_CONTEXT_SHOW_WORK_TOKENS:"true",CLAUDE_MEM_CONTEXT_SHOW_SAVINGS_AMOUNT:"true",CLAUDE_MEM_CONTEXT_SHOW_SAVINGS_PERCENT:"true",CLAUDE_MEM_CONTEXT_OBSERVATION_TYPES:Te,CLAUDE_MEM_CONTEXT_OBSERVATION_CONCEPTS:ge,CLAUDE_MEM_CONTEXT_FULL_COUNT:"5",CLAUDE_MEM_CONTEXT_FULL_FIELD:"narrative",CLAUDE_MEM_CONTEXT_SESSION_COUNT:"10",CLAUDE_MEM_CONTEXT_SHOW_LAST_SUMMARY:"true",CLAUDE_MEM_CONTEXT_SHOW_LAST_MESSAGE:"false"};static getAllDefaults(){return{...this.DEFAULTS}}static get(e){return this.DEFAULTS[e]}static getInt(e){let s=this.get(e);return parseInt(s,10)}static getBool(e){return this.get(e)==="true"}static loadFromFile(e){if(!(0,W.existsSync)(e))return this.getAllDefaults();let s=(0,W.readFileSync)(e,"utf-8"),t=JSON.parse(s),r=t;if(t.env&&typeof t.env=="object"){r=t.env;try{(0,W.writeFileSync)(e,JSON.stringify(r,null,2),"utf-8"),U.info("SETTINGS","Migrated settings file from nested to flat schema",{settingsPath:e})}catch(a){U.warn("SETTINGS","Failed to auto-migrate settings file",{settingsPath:e},a)}}let i={...this.DEFAULTS};for(let a of Object.keys(this.DEFAULTS))r[a]!==void 0&&(i[a]=r[a]);return i}};var Be={};function Pe(){return typeof __dirname<"u"?__dirname:(0,h.dirname)((0,fe.fileURLToPath)(Be.url))}var ps=Pe(),C=x.get("CLAUDE_MEM_DATA_DIR"),ie=process.env.CLAUDE_CONFIG_DIR||(0,h.join)((0,be.homedir)(),".claude"),us=(0,h.join)(C,"archives"),ls=(0,h.join)(C,"logs"),Es=(0,h.join)(C,"trash"),ms=(0,h.join)(C,"backups"),Ts=(0,h.join)(C,"settings.json"),Re=(0,h.join)(C,"claude-mem.db"),gs=(0,h.join)(C,"vector-db"),Ss=(0,h.join)(ie,"settings.json"),hs=(0,h.join)(ie,"commands"),bs=(0,h.join)(ie,"CLAUDE.md");function Ne(c){(0,Oe.mkdirSync)(c,{recursive:!0})}var J=class{db;constructor(){Ne(C),this.db=new Ie.default(Re),this.db.pragma("journal_mode = WAL"),this.db.pragma("synchronous = NORMAL"),this.db.pragma("foreign_keys = ON"),this.initializeSchema(),this.ensureWorkerPortColumn(),this.ensurePromptTrackingColumns(),this.removeSessionSummariesUniqueConstraint(),this.addObservationHierarchicalFields(),this.makeObservationsTextNullable(),this.createUserPromptsTable(),this.ensureDiscoveryTokensColumn(),this.createObservationAccessTable()}initializeSchema(){try{this.db.exec(`
        CREATE TABLE IF NOT EXISTS schema_versions (
          id INTEGER PRIMARY KEY,
          version INTEGER UNIQUE NOT NULL,
          applied_at TEXT NOT NULL
        )
      `);let e=this.db.prepare("SELECT version FROM schema_versions ORDER BY version").all();(e.length>0?Math.max(...e.map(t=>t.version)):0)===0&&(console.error("[SessionStore] Initializing fresh database with migration004..."),this.db.exec(`
          CREATE TABLE IF NOT EXISTS sdk_sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            claude_session_id TEXT UNIQUE NOT NULL,
            sdk_session_id TEXT UNIQUE,
            project TEXT NOT NULL,
            user_prompt TEXT,
            started_at TEXT NOT NULL,
            started_at_epoch INTEGER NOT NULL,
            completed_at TEXT,
            completed_at_epoch INTEGER,
            status TEXT CHECK(status IN ('active', 'completed', 'failed')) NOT NULL DEFAULT 'active'
          );

          CREATE INDEX IF NOT EXISTS idx_sdk_sessions_claude_id ON sdk_sessions(claude_session_id);
          CREATE INDEX IF NOT EXISTS idx_sdk_sessions_sdk_id ON sdk_sessions(sdk_session_id);
          CREATE INDEX IF NOT EXISTS idx_sdk_sessions_project ON sdk_sessions(project);
          CREATE INDEX IF NOT EXISTS idx_sdk_sessions_status ON sdk_sessions(status);
          CREATE INDEX IF NOT EXISTS idx_sdk_sessions_started ON sdk_sessions(started_at_epoch DESC);

          CREATE TABLE IF NOT EXISTS observations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sdk_session_id TEXT NOT NULL,
            project TEXT NOT NULL,
            text TEXT NOT NULL,
            type TEXT NOT NULL CHECK(type IN ('decision', 'bugfix', 'feature', 'refactor', 'discovery')),
            created_at TEXT NOT NULL,
            created_at_epoch INTEGER NOT NULL,
            FOREIGN KEY(sdk_session_id) REFERENCES sdk_sessions(sdk_session_id) ON DELETE CASCADE
          );

          CREATE INDEX IF NOT EXISTS idx_observations_sdk_session ON observations(sdk_session_id);
          CREATE INDEX IF NOT EXISTS idx_observations_project ON observations(project);
          CREATE INDEX IF NOT EXISTS idx_observations_type ON observations(type);
          CREATE INDEX IF NOT EXISTS idx_observations_created ON observations(created_at_epoch DESC);

          CREATE TABLE IF NOT EXISTS session_summaries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sdk_session_id TEXT UNIQUE NOT NULL,
            project TEXT NOT NULL,
            request TEXT,
            investigated TEXT,
            learned TEXT,
            completed TEXT,
            next_steps TEXT,
            files_read TEXT,
            files_edited TEXT,
            notes TEXT,
            created_at TEXT NOT NULL,
            created_at_epoch INTEGER NOT NULL,
            FOREIGN KEY(sdk_session_id) REFERENCES sdk_sessions(sdk_session_id) ON DELETE CASCADE
          );

          CREATE INDEX IF NOT EXISTS idx_session_summaries_sdk_session ON session_summaries(sdk_session_id);
          CREATE INDEX IF NOT EXISTS idx_session_summaries_project ON session_summaries(project);
          CREATE INDEX IF NOT EXISTS idx_session_summaries_created ON session_summaries(created_at_epoch DESC);
        `),this.db.prepare("INSERT INTO schema_versions (version, applied_at) VALUES (?, ?)").run(4,new Date().toISOString()),console.error("[SessionStore] Migration004 applied successfully"))}catch(e){throw console.error("[SessionStore] Schema initialization error:",e.message),e}}ensureWorkerPortColumn(){try{if(this.db.prepare("SELECT version FROM schema_versions WHERE version = ?").get(5))return;this.db.pragma("table_info(sdk_sessions)").some(r=>r.name==="worker_port")||(this.db.exec("ALTER TABLE sdk_sessions ADD COLUMN worker_port INTEGER"),console.error("[SessionStore] Added worker_port column to sdk_sessions table")),this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(5,new Date().toISOString())}catch(e){console.error("[SessionStore] Migration error:",e.message)}}ensurePromptTrackingColumns(){try{if(this.db.prepare("SELECT version FROM schema_versions WHERE version = ?").get(6))return;this.db.pragma("table_info(sdk_sessions)").some(p=>p.name==="prompt_counter")||(this.db.exec("ALTER TABLE sdk_sessions ADD COLUMN prompt_counter INTEGER DEFAULT 0"),console.error("[SessionStore] Added prompt_counter column to sdk_sessions table")),this.db.pragma("table_info(observations)").some(p=>p.name==="prompt_number")||(this.db.exec("ALTER TABLE observations ADD COLUMN prompt_number INTEGER"),console.error("[SessionStore] Added prompt_number column to observations table")),this.db.pragma("table_info(session_summaries)").some(p=>p.name==="prompt_number")||(this.db.exec("ALTER TABLE session_summaries ADD COLUMN prompt_number INTEGER"),console.error("[SessionStore] Added prompt_number column to session_summaries table")),this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(6,new Date().toISOString())}catch(e){console.error("[SessionStore] Prompt tracking migration error:",e.message)}}removeSessionSummariesUniqueConstraint(){try{if(this.db.prepare("SELECT version FROM schema_versions WHERE version = ?").get(7))return;if(!this.db.pragma("index_list(session_summaries)").some(r=>r.unique===1)){this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(7,new Date().toISOString());return}console.error("[SessionStore] Removing UNIQUE constraint from session_summaries.sdk_session_id..."),this.db.exec("BEGIN TRANSACTION");try{this.db.exec(`
          CREATE TABLE session_summaries_new (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sdk_session_id TEXT NOT NULL,
            project TEXT NOT NULL,
            request TEXT,
            investigated TEXT,
            learned TEXT,
            completed TEXT,
            next_steps TEXT,
            files_read TEXT,
            files_edited TEXT,
            notes TEXT,
            prompt_number INTEGER,
            created_at TEXT NOT NULL,
            created_at_epoch INTEGER NOT NULL,
            FOREIGN KEY(sdk_session_id) REFERENCES sdk_sessions(sdk_session_id) ON DELETE CASCADE
          )
        `),this.db.exec(`
          INSERT INTO session_summaries_new
          SELECT id, sdk_session_id, project, request, investigated, learned,
                 completed, next_steps, files_read, files_edited, notes,
                 prompt_number, created_at, created_at_epoch
          FROM session_summaries
        `),this.db.exec("DROP TABLE session_summaries"),this.db.exec("ALTER TABLE session_summaries_new RENAME TO session_summaries"),this.db.exec(`
          CREATE INDEX idx_session_summaries_sdk_session ON session_summaries(sdk_session_id);
          CREATE INDEX idx_session_summaries_project ON session_summaries(project);
          CREATE INDEX idx_session_summaries_created ON session_summaries(created_at_epoch DESC);
        `),this.db.exec("COMMIT"),this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(7,new Date().toISOString()),console.error("[SessionStore] Successfully removed UNIQUE constraint from session_summaries.sdk_session_id")}catch(r){throw this.db.exec("ROLLBACK"),r}}catch(e){console.error("[SessionStore] Migration error (remove UNIQUE constraint):",e.message)}}addObservationHierarchicalFields(){try{if(this.db.prepare("SELECT version FROM schema_versions WHERE version = ?").get(8))return;if(this.db.pragma("table_info(observations)").some(r=>r.name==="title")){this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(8,new Date().toISOString());return}console.error("[SessionStore] Adding hierarchical fields to observations table..."),this.db.exec(`
        ALTER TABLE observations ADD COLUMN title TEXT;
        ALTER TABLE observations ADD COLUMN subtitle TEXT;
        ALTER TABLE observations ADD COLUMN facts TEXT;
        ALTER TABLE observations ADD COLUMN narrative TEXT;
        ALTER TABLE observations ADD COLUMN concepts TEXT;
        ALTER TABLE observations ADD COLUMN files_read TEXT;
        ALTER TABLE observations ADD COLUMN files_modified TEXT;
      `),this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(8,new Date().toISOString()),console.error("[SessionStore] Successfully added hierarchical fields to observations table")}catch(e){console.error("[SessionStore] Migration error (add hierarchical fields):",e.message)}}makeObservationsTextNullable(){try{if(this.db.prepare("SELECT version FROM schema_versions WHERE version = ?").get(9))return;let t=this.db.pragma("table_info(observations)").find(r=>r.name==="text");if(!t||t.notnull===0){this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(9,new Date().toISOString());return}console.error("[SessionStore] Making observations.text nullable..."),this.db.exec("BEGIN TRANSACTION");try{this.db.exec(`
          CREATE TABLE observations_new (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sdk_session_id TEXT NOT NULL,
            project TEXT NOT NULL,
            text TEXT,
            type TEXT NOT NULL CHECK(type IN ('decision', 'bugfix', 'feature', 'refactor', 'discovery', 'change')),
            title TEXT,
            subtitle TEXT,
            facts TEXT,
            narrative TEXT,
            concepts TEXT,
            files_read TEXT,
            files_modified TEXT,
            prompt_number INTEGER,
            created_at TEXT NOT NULL,
            created_at_epoch INTEGER NOT NULL,
            FOREIGN KEY(sdk_session_id) REFERENCES sdk_sessions(sdk_session_id) ON DELETE CASCADE
          )
        `),this.db.exec(`
          INSERT INTO observations_new
          SELECT id, sdk_session_id, project, text, type, title, subtitle, facts,
                 narrative, concepts, files_read, files_modified, prompt_number,
                 created_at, created_at_epoch
          FROM observations
        `),this.db.exec("DROP TABLE observations"),this.db.exec("ALTER TABLE observations_new RENAME TO observations"),this.db.exec(`
          CREATE INDEX idx_observations_sdk_session ON observations(sdk_session_id);
          CREATE INDEX idx_observations_project ON observations(project);
          CREATE INDEX idx_observations_type ON observations(type);
          CREATE INDEX idx_observations_created ON observations(created_at_epoch DESC);
        `),this.db.exec("COMMIT"),this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(9,new Date().toISOString()),console.error("[SessionStore] Successfully made observations.text nullable")}catch(r){throw this.db.exec("ROLLBACK"),r}}catch(e){console.error("[SessionStore] Migration error (make text nullable):",e.message)}}createUserPromptsTable(){try{if(this.db.prepare("SELECT version FROM schema_versions WHERE version = ?").get(10))return;if(this.db.pragma("table_info(user_prompts)").length>0){this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(10,new Date().toISOString());return}console.error("[SessionStore] Creating user_prompts table with FTS5 support..."),this.db.exec("BEGIN TRANSACTION");try{this.db.exec(`
          CREATE TABLE user_prompts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            claude_session_id TEXT NOT NULL,
            prompt_number INTEGER NOT NULL,
            prompt_text TEXT NOT NULL,
            created_at TEXT NOT NULL,
            created_at_epoch INTEGER NOT NULL,
            FOREIGN KEY(claude_session_id) REFERENCES sdk_sessions(claude_session_id) ON DELETE CASCADE
          );

          CREATE INDEX idx_user_prompts_claude_session ON user_prompts(claude_session_id);
          CREATE INDEX idx_user_prompts_created ON user_prompts(created_at_epoch DESC);
          CREATE INDEX idx_user_prompts_prompt_number ON user_prompts(prompt_number);
          CREATE INDEX idx_user_prompts_lookup ON user_prompts(claude_session_id, prompt_number);
        `),this.db.exec(`
          CREATE VIRTUAL TABLE user_prompts_fts USING fts5(
            prompt_text,
            content='user_prompts',
            content_rowid='id'
          );
        `),this.db.exec(`
          CREATE TRIGGER user_prompts_ai AFTER INSERT ON user_prompts BEGIN
            INSERT INTO user_prompts_fts(rowid, prompt_text)
            VALUES (new.id, new.prompt_text);
          END;

          CREATE TRIGGER user_prompts_ad AFTER DELETE ON user_prompts BEGIN
            INSERT INTO user_prompts_fts(user_prompts_fts, rowid, prompt_text)
            VALUES('delete', old.id, old.prompt_text);
          END;

          CREATE TRIGGER user_prompts_au AFTER UPDATE ON user_prompts BEGIN
            INSERT INTO user_prompts_fts(user_prompts_fts, rowid, prompt_text)
            VALUES('delete', old.id, old.prompt_text);
            INSERT INTO user_prompts_fts(rowid, prompt_text)
            VALUES (new.id, new.prompt_text);
          END;
        `),this.db.exec("COMMIT"),this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(10,new Date().toISOString()),console.error("[SessionStore] Successfully created user_prompts table with FTS5 support")}catch(t){throw this.db.exec("ROLLBACK"),t}}catch(e){console.error("[SessionStore] Migration error (create user_prompts table):",e.message)}}ensureDiscoveryTokensColumn(){try{if(this.db.prepare("SELECT version FROM schema_versions WHERE version = ?").get(11))return;this.db.pragma("table_info(observations)").some(a=>a.name==="discovery_tokens")||(this.db.exec("ALTER TABLE observations ADD COLUMN discovery_tokens INTEGER DEFAULT 0"),console.error("[SessionStore] Added discovery_tokens column to observations table")),this.db.pragma("table_info(session_summaries)").some(a=>a.name==="discovery_tokens")||(this.db.exec("ALTER TABLE session_summaries ADD COLUMN discovery_tokens INTEGER DEFAULT 0"),console.error("[SessionStore] Added discovery_tokens column to session_summaries table")),this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(11,new Date().toISOString())}catch(e){throw console.error("[SessionStore] Discovery tokens migration error:",e.message),e}}createObservationAccessTable(){try{if(this.db.prepare("SELECT version FROM schema_versions WHERE version = ?").get(12))return;if(this.db.pragma("table_info(observation_access)").length>0){this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(12,new Date().toISOString());return}console.error("[SessionStore] Creating observation_access table for usage tracking..."),this.db.exec(`
        CREATE TABLE observation_access (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          observation_id INTEGER NOT NULL,
          access_type TEXT NOT NULL CHECK(access_type IN ('context_injection', 'search_result', 'manual_view')),
          accessed_at TEXT NOT NULL,
          accessed_at_epoch INTEGER NOT NULL,
          sdk_session_id TEXT,
          FOREIGN KEY(observation_id) REFERENCES observations(id) ON DELETE CASCADE
        );

        CREATE INDEX idx_observation_access_obs ON observation_access(observation_id);
        CREATE INDEX idx_observation_access_epoch ON observation_access(accessed_at_epoch DESC);
        CREATE INDEX idx_observation_access_type ON observation_access(access_type);
      `),this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(12,new Date().toISOString()),console.error("[SessionStore] Successfully created observation_access table")}catch(e){console.error("[SessionStore] Migration error (create observation_access table):",e.message)}}logObservationAccess(e,s,t){try{let r=new Date;this.db.prepare(`
        INSERT INTO observation_access (observation_id, access_type, accessed_at, accessed_at_epoch, sdk_session_id)
        VALUES (?, ?, ?, ?, ?)
      `).run(e,s,r.toISOString(),Math.floor(r.getTime()/1e3),t||null)}catch(r){console.error("[SessionStore] Failed to log observation access:",r.message)}}logObservationAccessBatch(e,s,t){if(e.length!==0)try{let r=new Date,i=r.toISOString(),a=Math.floor(r.getTime()/1e3),d=this.db.prepare(`
        INSERT INTO observation_access (observation_id, access_type, accessed_at, accessed_at_epoch, sdk_session_id)
        VALUES (?, ?, ?, ?, ?)
      `);this.db.transaction(g=>{for(let l of g)d.run(l,s,i,a,t||null)})(e)}catch(r){console.error("[SessionStore] Failed to log observation access batch:",r.message)}}getObservationUsageStats(e){try{let t=this.db.prepare(`
        SELECT access_type, COUNT(*) as count
        FROM observation_access
        WHERE observation_id = ?
        GROUP BY access_type
      `).all(e),r={},i=0;for(let p of t)r[p.access_type]=p.count,i+=p.count;let d=this.db.prepare(`
        SELECT accessed_at
        FROM observation_access
        WHERE observation_id = ?
        ORDER BY accessed_at_epoch DESC
        LIMIT 1
      `).get(e);return{totalAccesses:i,byType:r,lastAccessed:d?.accessed_at||null}}catch(s){return console.error("[SessionStore] Failed to get observation usage stats:",s.message),{totalAccesses:0,byType:{},lastAccessed:null}}}getMostUsedObservations(e=50,s){try{let t=s?`
          SELECT
            o.id, o.title, o.subtitle, o.type, o.project, o.created_at_epoch,
            COUNT(oa.id) as usageCount,
            MAX(oa.accessed_at) as lastAccessed
          FROM observations o
          LEFT JOIN observation_access oa ON o.id = oa.observation_id
          WHERE o.project = ?
          GROUP BY o.id
          ORDER BY usageCount DESC, o.created_at_epoch DESC
          LIMIT ?
        `:`
          SELECT
            o.id, o.title, o.subtitle, o.type, o.project, o.created_at_epoch,
            COUNT(oa.id) as usageCount,
            MAX(oa.accessed_at) as lastAccessed
          FROM observations o
          LEFT JOIN observation_access oa ON o.id = oa.observation_id
          GROUP BY o.id
          ORDER BY usageCount DESC, o.created_at_epoch DESC
          LIMIT ?
        `,r=this.db.prepare(t);return s?r.all(s,e):r.all(e)}catch(t){return console.error("[SessionStore] Failed to get most used observations:",t.message),[]}}getObservationUsageTimeline(e,s=20){try{return this.db.prepare(`
        SELECT accessed_at, access_type, sdk_session_id
        FROM observation_access
        WHERE observation_id = ?
        ORDER BY accessed_at_epoch DESC
        LIMIT ?
      `).all(e,s)}catch(t){return console.error("[SessionStore] Failed to get observation usage timeline:",t.message),[]}}getRecentSummaries(e,s=10){return this.db.prepare(`
      SELECT
        request, investigated, learned, completed, next_steps,
        files_read, files_edited, notes, prompt_number, created_at
      FROM session_summaries
      WHERE project = ?
      ORDER BY created_at_epoch DESC
      LIMIT ?
    `).all(e,s)}getRecentSummariesWithSessionInfo(e,s=3){return this.db.prepare(`
      SELECT
        sdk_session_id, request, learned, completed, next_steps,
        prompt_number, created_at
      FROM session_summaries
      WHERE project = ?
      ORDER BY created_at_epoch DESC
      LIMIT ?
    `).all(e,s)}getRecentObservations(e,s=20){return this.db.prepare(`
      SELECT type, text, prompt_number, created_at
      FROM observations
      WHERE project = ?
      ORDER BY created_at_epoch DESC
      LIMIT ?
    `).all(e,s)}getAllRecentObservations(e=100){return this.db.prepare(`
      SELECT id, type, title, subtitle, text, project, prompt_number, created_at, created_at_epoch
      FROM observations
      ORDER BY created_at_epoch DESC
      LIMIT ?
    `).all(e)}getAllRecentSummaries(e=50){return this.db.prepare(`
      SELECT id, request, investigated, learned, completed, next_steps,
             files_read, files_edited, notes, project, prompt_number,
             created_at, created_at_epoch
      FROM session_summaries
      ORDER BY created_at_epoch DESC
      LIMIT ?
    `).all(e)}getAllRecentUserPrompts(e=100){return this.db.prepare(`
      SELECT
        up.id,
        up.claude_session_id,
        s.project,
        up.prompt_number,
        up.prompt_text,
        up.created_at,
        up.created_at_epoch
      FROM user_prompts up
      LEFT JOIN sdk_sessions s ON up.claude_session_id = s.claude_session_id
      ORDER BY up.created_at_epoch DESC
      LIMIT ?
    `).all(e)}getAllProjects(){return this.db.prepare(`
      SELECT DISTINCT project
      FROM sdk_sessions
      WHERE project IS NOT NULL AND project != ''
      ORDER BY project ASC
    `).all().map(t=>t.project)}getLatestUserPrompt(e){return this.db.prepare(`
      SELECT
        up.*,
        s.sdk_session_id,
        s.project
      FROM user_prompts up
      JOIN sdk_sessions s ON up.claude_session_id = s.claude_session_id
      WHERE up.claude_session_id = ?
      ORDER BY up.created_at_epoch DESC
      LIMIT 1
    `).get(e)}getRecentSessionsWithStatus(e,s=3){return this.db.prepare(`
      SELECT * FROM (
        SELECT
          s.sdk_session_id,
          s.status,
          s.started_at,
          s.started_at_epoch,
          s.user_prompt,
          CASE WHEN sum.sdk_session_id IS NOT NULL THEN 1 ELSE 0 END as has_summary
        FROM sdk_sessions s
        LEFT JOIN session_summaries sum ON s.sdk_session_id = sum.sdk_session_id
        WHERE s.project = ? AND s.sdk_session_id IS NOT NULL
        GROUP BY s.sdk_session_id
        ORDER BY s.started_at_epoch DESC
        LIMIT ?
      )
      ORDER BY started_at_epoch ASC
    `).all(e,s)}getObservationsForSession(e){return this.db.prepare(`
      SELECT title, subtitle, type, prompt_number
      FROM observations
      WHERE sdk_session_id = ?
      ORDER BY created_at_epoch ASC
    `).all(e)}getObservationById(e){return this.db.prepare(`
      SELECT *
      FROM observations
      WHERE id = ?
    `).get(e)||null}getObservationsByIds(e,s={}){if(e.length===0)return[];let{orderBy:t="date_desc",limit:r}=s,i=t==="date_asc"?"ASC":"DESC",a=r?`LIMIT ${r}`:"",d=e.map(()=>"?").join(",");return this.db.prepare(`
      SELECT *
      FROM observations
      WHERE id IN (${d})
      ORDER BY created_at_epoch ${i}
      ${a}
    `).all(...e)}getSummaryForSession(e){return this.db.prepare(`
      SELECT
        request, investigated, learned, completed, next_steps,
        files_read, files_edited, notes, prompt_number, created_at
      FROM session_summaries
      WHERE sdk_session_id = ?
      ORDER BY created_at_epoch DESC
      LIMIT 1
    `).get(e)||null}getFilesForSession(e){let t=this.db.prepare(`
      SELECT files_read, files_modified
      FROM observations
      WHERE sdk_session_id = ?
    `).all(e),r=new Set,i=new Set;for(let a of t){if(a.files_read)try{let d=JSON.parse(a.files_read);Array.isArray(d)&&d.forEach(p=>r.add(p))}catch{}if(a.files_modified)try{let d=JSON.parse(a.files_modified);Array.isArray(d)&&d.forEach(p=>i.add(p))}catch{}}return{filesRead:Array.from(r),filesModified:Array.from(i)}}getSessionById(e){return this.db.prepare(`
      SELECT id, claude_session_id, sdk_session_id, project, user_prompt
      FROM sdk_sessions
      WHERE id = ?
      LIMIT 1
    `).get(e)||null}findActiveSDKSession(e){return this.db.prepare(`
      SELECT id, sdk_session_id, project, worker_port
      FROM sdk_sessions
      WHERE claude_session_id = ? AND status = 'active'
      LIMIT 1
    `).get(e)||null}findAnySDKSession(e){return this.db.prepare(`
      SELECT id
      FROM sdk_sessions
      WHERE claude_session_id = ?
      LIMIT 1
    `).get(e)||null}reactivateSession(e,s){this.db.prepare(`
      UPDATE sdk_sessions
      SET status = 'active', user_prompt = ?, worker_port = NULL
      WHERE id = ?
    `).run(s,e)}incrementPromptCounter(e){return this.db.prepare(`
      UPDATE sdk_sessions
      SET prompt_counter = COALESCE(prompt_counter, 0) + 1
      WHERE id = ?
    `).run(e),this.db.prepare(`
      SELECT prompt_counter FROM sdk_sessions WHERE id = ?
    `).get(e)?.prompt_counter||1}getPromptCounter(e){return this.db.prepare(`
      SELECT prompt_counter FROM sdk_sessions WHERE id = ?
    `).get(e)?.prompt_counter||0}createSDKSession(e,s,t){let r=new Date,i=r.getTime(),d=this.db.prepare(`
      INSERT OR IGNORE INTO sdk_sessions
      (claude_session_id, sdk_session_id, project, user_prompt, started_at, started_at_epoch, status)
      VALUES (?, ?, ?, ?, ?, ?, 'active')
    `).run(e,e,s,t,r.toISOString(),i);return d.lastInsertRowid===0||d.changes===0?(s&&s.trim()!==""&&this.db.prepare(`
          UPDATE sdk_sessions
          SET project = ?, user_prompt = ?
          WHERE claude_session_id = ?
        `).run(s,t,e),this.db.prepare(`
        SELECT id FROM sdk_sessions WHERE claude_session_id = ? LIMIT 1
      `).get(e).id):d.lastInsertRowid}updateSDKSessionId(e,s){return this.db.prepare(`
      UPDATE sdk_sessions
      SET sdk_session_id = ?
      WHERE id = ? AND sdk_session_id IS NULL
    `).run(s,e).changes===0?(U.debug("DB","sdk_session_id already set, skipping update",{sessionId:e,sdkSessionId:s}),!1):!0}setWorkerPort(e,s){this.db.prepare(`
      UPDATE sdk_sessions
      SET worker_port = ?
      WHERE id = ?
    `).run(s,e)}getWorkerPort(e){return this.db.prepare(`
      SELECT worker_port
      FROM sdk_sessions
      WHERE id = ?
      LIMIT 1
    `).get(e)?.worker_port||null}saveUserPrompt(e,s,t){let r=new Date,i=r.getTime();return this.db.prepare(`
      INSERT INTO user_prompts
      (claude_session_id, prompt_number, prompt_text, created_at, created_at_epoch)
      VALUES (?, ?, ?, ?, ?)
    `).run(e,s,t,r.toISOString(),i).lastInsertRowid}getUserPrompt(e,s){return this.db.prepare(`
      SELECT prompt_text
      FROM user_prompts
      WHERE claude_session_id = ? AND prompt_number = ?
      LIMIT 1
    `).get(e,s)?.prompt_text??null}storeObservation(e,s,t,r,i=0){let a=new Date,d=a.getTime();this.db.prepare(`
      SELECT id FROM sdk_sessions WHERE sdk_session_id = ?
    `).get(e)||(this.db.prepare(`
        INSERT INTO sdk_sessions
        (claude_session_id, sdk_session_id, project, started_at, started_at_epoch, status)
        VALUES (?, ?, ?, ?, ?, 'active')
      `).run(e,e,s,a.toISOString(),d),console.error(`[SessionStore] Auto-created session record for session_id: ${e}`));let b=this.db.prepare(`
      INSERT INTO observations
      (sdk_session_id, project, type, title, subtitle, facts, narrative, concepts,
       files_read, files_modified, prompt_number, discovery_tokens, created_at, created_at_epoch)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(e,s,t.type,t.title,t.subtitle,JSON.stringify(t.facts),t.narrative,JSON.stringify(t.concepts),JSON.stringify(t.files_read),JSON.stringify(t.files_modified),r||null,i,a.toISOString(),d);return{id:Number(b.lastInsertRowid),createdAtEpoch:d}}storeSummary(e,s,t,r,i=0){let a=new Date,d=a.getTime();this.db.prepare(`
      SELECT id FROM sdk_sessions WHERE sdk_session_id = ?
    `).get(e)||(this.db.prepare(`
        INSERT INTO sdk_sessions
        (claude_session_id, sdk_session_id, project, started_at, started_at_epoch, status)
        VALUES (?, ?, ?, ?, ?, 'active')
      `).run(e,e,s,a.toISOString(),d),console.error(`[SessionStore] Auto-created session record for session_id: ${e}`));let b=this.db.prepare(`
      INSERT INTO session_summaries
      (sdk_session_id, project, request, investigated, learned, completed,
       next_steps, notes, prompt_number, discovery_tokens, created_at, created_at_epoch)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(e,s,t.request,t.investigated,t.learned,t.completed,t.next_steps,t.notes,r||null,i,a.toISOString(),d);return{id:Number(b.lastInsertRowid),createdAtEpoch:d}}markSessionCompleted(e){let s=new Date,t=s.getTime();this.db.prepare(`
      UPDATE sdk_sessions
      SET status = 'completed', completed_at = ?, completed_at_epoch = ?
      WHERE id = ?
    `).run(s.toISOString(),t,e)}markSessionFailed(e){let s=new Date,t=s.getTime();this.db.prepare(`
      UPDATE sdk_sessions
      SET status = 'failed', completed_at = ?, completed_at_epoch = ?
      WHERE id = ?
    `).run(s.toISOString(),t,e)}getSessionSummariesByIds(e,s={}){if(e.length===0)return[];let{orderBy:t="date_desc",limit:r}=s,i=t==="date_asc"?"ASC":"DESC",a=r?`LIMIT ${r}`:"",d=e.map(()=>"?").join(",");return this.db.prepare(`
      SELECT * FROM session_summaries
      WHERE id IN (${d})
      ORDER BY created_at_epoch ${i}
      ${a}
    `).all(...e)}getUserPromptsByIds(e,s={}){if(e.length===0)return[];let{orderBy:t="date_desc",limit:r}=s,i=t==="date_asc"?"ASC":"DESC",a=r?`LIMIT ${r}`:"",d=e.map(()=>"?").join(",");return this.db.prepare(`
      SELECT
        up.*,
        s.project,
        s.sdk_session_id
      FROM user_prompts up
      JOIN sdk_sessions s ON up.claude_session_id = s.claude_session_id
      WHERE up.id IN (${d})
      ORDER BY up.created_at_epoch ${i}
      ${a}
    `).all(...e)}getTimelineAroundTimestamp(e,s=10,t=10,r){return this.getTimelineAroundObservation(null,e,s,t,r)}getTimelineAroundObservation(e,s,t=10,r=10,i){let a=i?"AND project = ?":"",d=i?[i]:[],p,g;if(e!==null){let O=`
        SELECT id, created_at_epoch
        FROM observations
        WHERE id <= ? ${a}
        ORDER BY id DESC
        LIMIT ?
      `,y=`
        SELECT id, created_at_epoch
        FROM observations
        WHERE id >= ? ${a}
        ORDER BY id ASC
        LIMIT ?
      `;try{let E=this.db.prepare(O).all(e,...d,t+1),n=this.db.prepare(y).all(e,...d,r+1);if(E.length===0&&n.length===0)return{observations:[],sessions:[],prompts:[]};p=E.length>0?E[E.length-1].created_at_epoch:s,g=n.length>0?n[n.length-1].created_at_epoch:s}catch(E){return console.error("[SessionStore] Error getting boundary observations:",E.message),{observations:[],sessions:[],prompts:[]}}}else{let O=`
        SELECT created_at_epoch
        FROM observations
        WHERE created_at_epoch <= ? ${a}
        ORDER BY created_at_epoch DESC
        LIMIT ?
      `,y=`
        SELECT created_at_epoch
        FROM observations
        WHERE created_at_epoch >= ? ${a}
        ORDER BY created_at_epoch ASC
        LIMIT ?
      `;try{let E=this.db.prepare(O).all(s,...d,t),n=this.db.prepare(y).all(s,...d,r+1);if(E.length===0&&n.length===0)return{observations:[],sessions:[],prompts:[]};p=E.length>0?E[E.length-1].created_at_epoch:s,g=n.length>0?n[n.length-1].created_at_epoch:s}catch(E){return console.error("[SessionStore] Error getting boundary timestamps:",E.message),{observations:[],sessions:[],prompts:[]}}}let l=`
      SELECT *
      FROM observations
      WHERE created_at_epoch >= ? AND created_at_epoch <= ? ${a}
      ORDER BY created_at_epoch ASC
    `,b=`
      SELECT *
      FROM session_summaries
      WHERE created_at_epoch >= ? AND created_at_epoch <= ? ${a}
      ORDER BY created_at_epoch ASC
    `,v=`
      SELECT up.*, s.project, s.sdk_session_id
      FROM user_prompts up
      JOIN sdk_sessions s ON up.claude_session_id = s.claude_session_id
      WHERE up.created_at_epoch >= ? AND up.created_at_epoch <= ? ${a.replace("project","s.project")}
      ORDER BY up.created_at_epoch ASC
    `;try{let O=this.db.prepare(l).all(p,g,...d),y=this.db.prepare(b).all(p,g,...d),E=this.db.prepare(v).all(p,g,...d);return{observations:O,sessions:y.map(n=>({id:n.id,sdk_session_id:n.sdk_session_id,project:n.project,request:n.request,completed:n.completed,next_steps:n.next_steps,created_at:n.created_at,created_at_epoch:n.created_at_epoch})),prompts:E.map(n=>({id:n.id,claude_session_id:n.claude_session_id,project:n.project,prompt:n.prompt_text,created_at:n.created_at,created_at_epoch:n.created_at_epoch}))}}catch(O){return console.error("[SessionStore] Error querying timeline records:",O.message),{observations:[],sessions:[],prompts:[]}}}close(){this.db.close()}};var We=w.default.join((0,z.homedir)(),".claude","plugins","marketplaces","thedotmack","plugin",".install-version");function He(){let c=w.default.join((0,z.homedir)(),".claude-mem","settings.json"),e=x.loadFromFile(c);try{return{totalObservationCount:parseInt(e.CLAUDE_MEM_CONTEXT_OBSERVATIONS,10),fullObservationCount:parseInt(e.CLAUDE_MEM_CONTEXT_FULL_COUNT,10),sessionCount:parseInt(e.CLAUDE_MEM_CONTEXT_SESSION_COUNT,10),showReadTokens:e.CLAUDE_MEM_CONTEXT_SHOW_READ_TOKENS==="true",showWorkTokens:e.CLAUDE_MEM_CONTEXT_SHOW_WORK_TOKENS==="true",showSavingsAmount:e.CLAUDE_MEM_CONTEXT_SHOW_SAVINGS_AMOUNT==="true",showSavingsPercent:e.CLAUDE_MEM_CONTEXT_SHOW_SAVINGS_PERCENT==="true",observationTypes:new Set(e.CLAUDE_MEM_CONTEXT_OBSERVATION_TYPES.split(",").map(s=>s.trim()).filter(Boolean)),observationConcepts:new Set(e.CLAUDE_MEM_CONTEXT_OBSERVATION_CONCEPTS.split(",").map(s=>s.trim()).filter(Boolean)),fullObservationField:e.CLAUDE_MEM_CONTEXT_FULL_FIELD,showLastSummary:e.CLAUDE_MEM_CONTEXT_SHOW_LAST_SUMMARY==="true",showLastMessage:e.CLAUDE_MEM_CONTEXT_SHOW_LAST_MESSAGE==="true"}}catch(s){return U.warn("WORKER","Failed to load context settings, using defaults",{},s),{totalObservationCount:50,fullObservationCount:5,sessionCount:10,showReadTokens:!0,showWorkTokens:!0,showSavingsAmount:!0,showSavingsPercent:!0,observationTypes:new Set(te),observationConcepts:new Set(re),fullObservationField:"narrative",showLastSummary:!0,showLastMessage:!1}}}var Ae=4,je=1,o={reset:"\x1B[0m",bright:"\x1B[1m",dim:"\x1B[2m",cyan:"\x1B[36m",green:"\x1B[32m",yellow:"\x1B[33m",blue:"\x1B[34m",magenta:"\x1B[35m",gray:"\x1B[90m",red:"\x1B[31m"};function Le(c){if(!c)return[];try{let e=JSON.parse(c);return Array.isArray(e)?e:[]}catch{return[]}}function Ge(c){return new Date(c).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}function Ye(c){return new Date(c).toLocaleString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}function Ve(c){return new Date(c).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"})}function Ke(c,e){return w.default.isAbsolute(c)?w.default.relative(e,c):c}function Q(c,e,s,t){return e?t?[`${s}${c}:${o.reset} ${e}`,""]:[`**${c}**: ${e}`,""]:[]}function qe(c){return c.replace(/\//g,"-")}function Je(c){try{if(!(0,H.existsSync)(c))return{userMessage:"",assistantMessage:""};let e=(0,H.readFileSync)(c,"utf-8").trim();if(!e)return{userMessage:"",assistantMessage:""};let s=e.split(`
`).filter(r=>r.trim()),t="";for(let r=s.length-1;r>=0;r--)try{let i=s[r];if(!i.includes('"type":"assistant"'))continue;let a=JSON.parse(i);if(a.type==="assistant"&&a.message?.content&&Array.isArray(a.message.content)){let d="";for(let p of a.message.content)p.type==="text"&&(d+=p.text);if(d=d.replace(/<system-reminder>[\s\S]*?<\/system-reminder>/g,"").trim(),d){t=d;break}}}catch{continue}return{userMessage:"",assistantMessage:t}}catch(e){return U.failure("WORKER","Failed to extract prior messages from transcript",{transcriptPath:c},e),{userMessage:"",assistantMessage:""}}}async function Qe(c,e=!1){let s=He(),t=c?.cwd??process.cwd(),r=t?w.default.basename(t):"unknown-project",i=null;try{i=new J}catch(R){if(R.code==="ERR_DLOPEN_FAILED"){try{(0,H.unlinkSync)(We)}catch{}return console.error("Native module rebuild needed - restart Claude Code to auto-fix"),""}throw R}let a=Array.from(s.observationTypes),d=a.map(()=>"?").join(","),p=Array.from(s.observationConcepts),g=p.map(()=>"?").join(","),l=i.db.prepare(`
    SELECT
      id, sdk_session_id, type, title, subtitle, narrative,
      facts, concepts, files_read, files_modified, discovery_tokens,
      created_at, created_at_epoch
    FROM observations
    WHERE project = ?
      AND type IN (${d})
      AND EXISTS (
        SELECT 1 FROM json_each(concepts)
        WHERE value IN (${g})
      )
    ORDER BY created_at_epoch DESC
    LIMIT ?
  `).all(r,...a,...p,s.totalObservationCount);if(l.length>0){let R=l.map(f=>f.id);i.logObservationAccessBatch(R,"context_injection",c?.session_id)}let b=i.db.prepare(`
    SELECT id, sdk_session_id, request, investigated, learned, completed, next_steps, created_at, created_at_epoch
    FROM session_summaries
    WHERE project = ?
    ORDER BY created_at_epoch DESC
    LIMIT ?
  `).all(r,s.sessionCount+je),v="",O="";if(s.showLastMessage&&l.length>0)try{let R=c?.session_id,f=l.find(S=>S.sdk_session_id!==R);if(f){let S=f.sdk_session_id,D=qe(t),F=w.default.join((0,z.homedir)(),".claude","projects",D,`${S}.jsonl`),j=Je(F);v=j.userMessage,O=j.assistantMessage}}catch{}if(l.length===0&&b.length===0)return i?.close(),e?`
${o.bright}${o.cyan}[${r}] recent context${o.reset}
${o.gray}${"\u2500".repeat(60)}${o.reset}

${o.dim}No previous sessions found for this project yet.${o.reset}
`:`# [${r}] recent context

No previous sessions found for this project yet.`;let y=b.slice(0,s.sessionCount),E=l,n=[];if(e?(n.push(""),n.push(`${o.bright}${o.cyan}[${r}] recent context${o.reset}`),n.push(`${o.gray}${"\u2500".repeat(60)}${o.reset}`),n.push("")):(n.push(`# [${r}] recent context`),n.push("")),E.length>0){e?n.push(`${o.dim}Legend: \u{1F3AF} session-request | \u{1F534} bugfix | \u{1F7E3} feature | \u{1F504} refactor | \u2705 change | \u{1F535} discovery | \u2696\uFE0F  decision${o.reset}`):n.push("**Legend:** \u{1F3AF} session-request | \u{1F534} bugfix | \u{1F7E3} feature | \u{1F504} refactor | \u2705 change | \u{1F535} discovery | \u2696\uFE0F  decision"),n.push(""),e?(n.push(`${o.bright}\u{1F4A1} Column Key${o.reset}`),n.push(`${o.dim}  Read: Tokens to read this observation (cost to learn it now)${o.reset}`),n.push(`${o.dim}  Work: Tokens spent on work that produced this record (\u{1F50D} research, \u{1F6E0}\uFE0F building, \u2696\uFE0F  deciding)${o.reset}`)):(n.push("\u{1F4A1} **Column Key**:"),n.push("- **Read**: Tokens to read this observation (cost to learn it now)"),n.push("- **Work**: Tokens spent on work that produced this record (\u{1F50D} research, \u{1F6E0}\uFE0F building, \u2696\uFE0F  deciding)")),n.push(""),e?(n.push(`${o.dim}\u{1F4A1} Context Index: This semantic index (titles, types, files, tokens) is usually sufficient to understand past work.${o.reset}`),n.push(""),n.push(`${o.dim}When you need implementation details, rationale, or debugging context:${o.reset}`),n.push(`${o.dim}  - Use the mem-search skill to fetch full observations on-demand${o.reset}`),n.push(`${o.dim}  - Critical types (\u{1F534} bugfix, \u2696\uFE0F decision) often need detailed fetching${o.reset}`),n.push(`${o.dim}  - Trust this index over re-reading code for past decisions and learnings${o.reset}`)):(n.push("\u{1F4A1} **Context Index:** This semantic index (titles, types, files, tokens) is usually sufficient to understand past work."),n.push(""),n.push("When you need implementation details, rationale, or debugging context:"),n.push("- Use the mem-search skill to fetch full observations on-demand"),n.push("- Critical types (\u{1F534} bugfix, \u2696\uFE0F decision) often need detailed fetching"),n.push("- Trust this index over re-reading code for past decisions and learnings")),n.push("");let R=l.length,f=l.reduce((_,m)=>{let T=(m.title?.length||0)+(m.subtitle?.length||0)+(m.narrative?.length||0)+JSON.stringify(m.facts||[]).length;return _+Math.ceil(T/Ae)},0),S=l.reduce((_,m)=>_+(m.discovery_tokens||0),0),D=S-f,F=S>0?Math.round(D/S*100):0,j=s.showReadTokens||s.showWorkTokens||s.showSavingsAmount||s.showSavingsPercent;if(j)if(e){if(n.push(`${o.bright}${o.cyan}\u{1F4CA} Context Economics${o.reset}`),n.push(`${o.dim}  Loading: ${R} observations (${f.toLocaleString()} tokens to read)${o.reset}`),n.push(`${o.dim}  Work investment: ${S.toLocaleString()} tokens spent on research, building, and decisions${o.reset}`),S>0&&(s.showSavingsAmount||s.showSavingsPercent)){let _="  Your savings: ";s.showSavingsAmount&&s.showSavingsPercent?_+=`${D.toLocaleString()} tokens (${F}% reduction from reuse)`:s.showSavingsAmount?_+=`${D.toLocaleString()} tokens`:_+=`${F}% reduction from reuse`,n.push(`${o.green}${_}${o.reset}`)}n.push("")}else{if(n.push("\u{1F4CA} **Context Economics**:"),n.push(`- Loading: ${R} observations (${f.toLocaleString()} tokens to read)`),n.push(`- Work investment: ${S.toLocaleString()} tokens spent on research, building, and decisions`),S>0&&(s.showSavingsAmount||s.showSavingsPercent)){let _="- Your savings: ";s.showSavingsAmount&&s.showSavingsPercent?_+=`${D.toLocaleString()} tokens (${F}% reduction from reuse)`:s.showSavingsAmount?_+=`${D.toLocaleString()} tokens`:_+=`${F}% reduction from reuse`,n.push(_)}n.push("")}let Ce=b[0]?.id,ve=y.map((_,m)=>{let T=m===0?null:b[m+1];return{..._,displayEpoch:T?T.created_at_epoch:_.created_at_epoch,displayTime:T?T.created_at:_.created_at,shouldShowLink:_.id!==Ce}}),ye=new Set(l.slice(0,s.fullObservationCount).map(_=>_.id)),ae=[...E.map(_=>({type:"observation",data:_})),...ve.map(_=>({type:"summary",data:_}))];ae.sort((_,m)=>{let T=_.type==="observation"?_.data.created_at_epoch:_.data.displayEpoch,M=m.type==="observation"?m.data.created_at_epoch:m.data.displayEpoch;return T-M});let G=new Map;for(let _ of ae){let m=_.type==="observation"?_.data.created_at:_.data.displayTime,T=Ve(m);G.has(T)||G.set(T,[]),G.get(T).push(_)}let De=Array.from(G.entries()).sort((_,m)=>{let T=new Date(_[0]).getTime(),M=new Date(m[0]).getTime();return T-M});for(let[_,m]of De){e?(n.push(`${o.bright}${o.cyan}${_}${o.reset}`),n.push("")):(n.push(`### ${_}`),n.push(""));let T=null,M="",$=!1;for(let Z of m)if(Z.type==="summary"){$&&(n.push(""),$=!1,T=null,M="");let u=Z.data,X=`${u.request||"Session started"} (${Ge(u.displayTime)})`,L=u.shouldShowLink?`claude-mem://session-summary/${u.id}`:"";if(e){let N=L?`${o.dim}[${L}]${o.reset}`:"";n.push(`\u{1F3AF} ${o.yellow}#S${u.id}${o.reset} ${X} ${N}`)}else{let N=L?` [\u2192](${L})`:"";n.push(`**\u{1F3AF} #S${u.id}** ${X}${N}`)}n.push("")}else{let u=Z.data,X=Le(u.files_modified),L=X.length>0&&X[0]?Ke(X[0],t):"General";L!==T&&($&&n.push(""),e?n.push(`${o.dim}${L}${o.reset}`):n.push(`**${L}**`),e||(n.push("| ID | Time | T | Title | Read | Work |"),n.push("|----|------|---|-------|------|------|")),T=L,$=!0,M="");let N=Ye(u.created_at),Y=u.title||"Untitled",V=Ee[u.type]||"\u2022",Me=(u.title?.length||0)+(u.subtitle?.length||0)+(u.narrative?.length||0)+JSON.stringify(u.facts||[]).length,P=Math.ceil(Me/Ae),B=u.discovery_tokens||0,ee=me[u.type]||"\u{1F50D}",de=B>0?`${ee} ${B.toLocaleString()}`:"-",se=N!==M,_e=se?N:"";if(M=N,ye.has(u.id)){let k=s.fullObservationField==="narrative"?u.narrative:u.facts?Le(u.facts).join(`
`):null;if(e){let A=se?`${o.dim}${N}${o.reset}`:" ".repeat(N.length),K=s.showReadTokens&&P>0?`${o.dim}(~${P}t)${o.reset}`:"",pe=s.showWorkTokens&&B>0?`${o.dim}(${ee} ${B.toLocaleString()}t)${o.reset}`:"";n.push(`  ${o.dim}#${u.id}${o.reset}  ${A}  ${V}  ${o.bright}${Y}${o.reset}`),k&&n.push(`    ${o.dim}${k}${o.reset}`),(K||pe)&&n.push(`    ${K} ${pe}`),n.push("")}else{$&&(n.push(""),$=!1),n.push(`**#${u.id}** ${_e||"\u2033"} ${V} **${Y}**`),k&&(n.push(""),n.push(k),n.push(""));let A=[];s.showReadTokens&&A.push(`Read: ~${P}`),s.showWorkTokens&&A.push(`Work: ${de}`),A.length>0&&n.push(A.join(", ")),n.push(""),T=null}}else if(e){let k=se?`${o.dim}${N}${o.reset}`:" ".repeat(N.length),A=s.showReadTokens&&P>0?`${o.dim}(~${P}t)${o.reset}`:"",K=s.showWorkTokens&&B>0?`${o.dim}(${ee} ${B.toLocaleString()}t)${o.reset}`:"";n.push(`  ${o.dim}#${u.id}${o.reset}  ${k}  ${V}  ${Y} ${A} ${K}`)}else{let k=s.showReadTokens?`~${P}`:"",A=s.showWorkTokens?de:"";n.push(`| #${u.id} | ${_e||"\u2033"} | ${V} | ${Y} | ${k} | ${A} |`)}}$&&n.push("")}let I=b[0],ce=l[0];if(s.showLastSummary&&I&&(I.investigated||I.learned||I.completed||I.next_steps)&&(!ce||I.created_at_epoch>ce.created_at_epoch)&&(n.push(...Q("Investigated",I.investigated,o.blue,e)),n.push(...Q("Learned",I.learned,o.yellow,e)),n.push(...Q("Completed",I.completed,o.green,e)),n.push(...Q("Next Steps",I.next_steps,o.magenta,e))),O&&(n.push(""),n.push("---"),n.push(""),e?(n.push(`${o.bright}${o.magenta}\u{1F4CB} Previously${o.reset}`),n.push(""),n.push(`${o.dim}A: ${O}${o.reset}`)):(n.push("**\u{1F4CB} Previously**"),n.push(""),n.push(`A: ${O}`)),n.push("")),j&&S>0&&D>0){let _=Math.round(S/1e3);n.push(""),e?n.push(`${o.dim}\u{1F4B0} Access ${_}k tokens of past research & decisions for just ${f.toLocaleString()}t. Use the mem-search skill to access memories by ID instead of re-reading files.${o.reset}`):n.push(`\u{1F4B0} Access ${_}k tokens of past research & decisions for just ${f.toLocaleString()}t. Use the mem-search skill to access memories by ID instead of re-reading files.`)}}return i?.close(),n.join(`
`).trimEnd()}0&&(module.exports={generateContext});
