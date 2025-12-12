"use strict";var Ue=Object.create;var q=Object.defineProperty;var ke=Object.getOwnPropertyDescriptor;var xe=Object.getOwnPropertyNames;var we=Object.getPrototypeOf,$e=Object.prototype.hasOwnProperty;var Xe=(d,e)=>{for(var s in e)q(d,s,{get:e[s],enumerable:!0})},Ee=(d,e,s,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of xe(e))!$e.call(d,r)&&r!==s&&q(d,r,{get:()=>e[r],enumerable:!(t=ke(e,r))||t.enumerable});return d};var ue=(d,e,s)=>(s=d!=null?Ue(we(d)):{},Ee(e||!d||!d.__esModule?q(s,"default",{value:d,enumerable:!0}):s,d)),Fe=d=>Ee(q({},"__esModule",{value:!0}),d);var ze={};Xe(ze,{generateContext:()=>Qe});module.exports=Fe(ze);var $=ue(require("path"),1),z=require("os"),B=require("fs");var Ae=ue(require("better-sqlite3"),1);var b=require("path"),be=require("os"),Oe=require("fs");var Re=require("url");var H=require("fs"),ge=require("path"),he=require("os");var te=["bugfix","feature","refactor","discovery","decision","change"],re=["how-it-works","why-it-exists","what-changed","problem-solution","gotcha","pattern","trade-off"],le={bugfix:"\u{1F534}",feature:"\u{1F7E3}",refactor:"\u{1F504}",change:"\u2705",discovery:"\u{1F535}",decision:"\u2696\uFE0F","session-request":"\u{1F3AF}"},me={discovery:"\u{1F50D}",change:"\u{1F6E0}\uFE0F",feature:"\u{1F6E0}\uFE0F",bugfix:"\u{1F6E0}\uFE0F",refactor:"\u{1F6E0}\uFE0F",decision:"\u2696\uFE0F"},Te=te.join(","),Se=re.join(",");var ne=(i=>(i[i.DEBUG=0]="DEBUG",i[i.INFO=1]="INFO",i[i.WARN=2]="WARN",i[i.ERROR=3]="ERROR",i[i.SILENT=4]="SILENT",i))(ne||{}),oe=class{level=null;useColor;constructor(){this.useColor=process.stdout.isTTY??!1}getLevel(){if(this.level===null){let e=x.get("CLAUDE_MEM_LOG_LEVEL").toUpperCase();this.level=ne[e]??1}return this.level}correlationId(e,s){return`obs-${e}-${s}`}sessionId(e){return`session-${e}`}formatData(e){if(e==null)return"";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return e.toString();if(typeof e=="object"){if(e instanceof Error)return this.getLevel()===0?`${e.message}
${e.stack}`:e.message;if(Array.isArray(e))return`[${e.length} items]`;let s=Object.keys(e);return s.length===0?"{}":s.length<=3?JSON.stringify(e):`{${s.length} keys: ${s.slice(0,3).join(", ")}...}`}return String(e)}formatTool(e,s){if(!s)return e;try{let t=typeof s=="string"?JSON.parse(s):s;if(e==="Bash"&&t.command){let r=t.command.length>50?t.command.substring(0,50)+"...":t.command;return`${e}(${r})`}if(e==="Read"&&t.file_path){let r=t.file_path.split("/").pop()||t.file_path;return`${e}(${r})`}if(e==="Edit"&&t.file_path){let r=t.file_path.split("/").pop()||t.file_path;return`${e}(${r})`}if(e==="Write"&&t.file_path){let r=t.file_path.split("/").pop()||t.file_path;return`${e}(${r})`}return e}catch{return e}}log(e,s,t,r,i){if(e<this.getLevel())return;let a=new Date().toISOString().replace("T"," ").substring(0,23),c=ne[e].padEnd(5),p=s.padEnd(6),l="";r?.correlationId?l=`[${r.correlationId}] `:r?.sessionId&&(l=`[session-${r.sessionId}] `);let u="";i!=null&&(this.getLevel()===0&&typeof i=="object"?u=`
`+JSON.stringify(i,null,2):u=" "+this.formatData(i));let g="";if(r){let{sessionId:O,sdkSessionId:D,correlationId:m,...n}=r;Object.keys(n).length>0&&(g=` {${Object.entries(n).map(([R,h])=>`${R}=${h}`).join(", ")}}`)}let I=`[${a}] [${c}] [${p}] ${l}${t}${g}${u}`;e===3?console.error(I):console.log(I)}debug(e,s,t,r){this.log(0,e,s,t,r)}info(e,s,t,r){this.log(1,e,s,t,r)}warn(e,s,t,r){this.log(2,e,s,t,r)}error(e,s,t,r){this.log(3,e,s,t,r)}dataIn(e,s,t,r){this.info(e,`\u2192 ${s}`,t,r)}dataOut(e,s,t,r){this.info(e,`\u2190 ${s}`,t,r)}success(e,s,t,r){this.info(e,`\u2713 ${s}`,t,r)}failure(e,s,t,r){this.error(e,`\u2717 ${s}`,t,r)}timing(e,s,t,r){this.info(e,`\u23F1 ${s}`,r,{duration:`${t}ms`})}},k=new oe;var x=class{static DEFAULTS={CLAUDE_MEM_MODEL:"claude-haiku-4-5",CLAUDE_MEM_CONTEXT_OBSERVATIONS:"50",CLAUDE_MEM_WORKER_PORT:"37777",CLAUDE_MEM_SKIP_TOOLS:"ListMcpResourcesTool,SlashCommand,Skill,TodoWrite,AskUserQuestion",CLAUDE_MEM_DATA_DIR:(0,ge.join)((0,he.homedir)(),".claude-mem"),CLAUDE_MEM_LOG_LEVEL:"INFO",CLAUDE_MEM_PYTHON_VERSION:"3.13",CLAUDE_CODE_PATH:"",CLAUDE_MEM_CONTEXT_SHOW_READ_TOKENS:"true",CLAUDE_MEM_CONTEXT_SHOW_WORK_TOKENS:"true",CLAUDE_MEM_CONTEXT_SHOW_SAVINGS_AMOUNT:"true",CLAUDE_MEM_CONTEXT_SHOW_SAVINGS_PERCENT:"true",CLAUDE_MEM_CONTEXT_OBSERVATION_TYPES:Te,CLAUDE_MEM_CONTEXT_OBSERVATION_CONCEPTS:Se,CLAUDE_MEM_CONTEXT_FULL_COUNT:"5",CLAUDE_MEM_CONTEXT_FULL_FIELD:"narrative",CLAUDE_MEM_CONTEXT_SESSION_COUNT:"10",CLAUDE_MEM_CONTEXT_SHOW_LAST_SUMMARY:"true",CLAUDE_MEM_CONTEXT_SHOW_LAST_MESSAGE:"false",CLAUDE_MEM_SLACK_ENABLED:"false",CLAUDE_MEM_SLACK_BOT_TOKEN:"",CLAUDE_MEM_SLACK_APP_TOKEN:"",CLAUDE_MEM_SLACK_CHANNEL_ID:"",CLAUDE_MEM_SLACK_NOTIFY_ON_QUESTIONS:"true",CLAUDE_MEM_SLACK_SESSION_EXPIRY_HOURS:"24",CLAUDE_MEM_INTERACTION_MODE:"auto",CLAUDE_MEM_SLACK_SHARE_SUMMARIES:"false",CLAUDE_MEM_SLACK_SHARE_TYPES:""};static getAllDefaults(){return{...this.DEFAULTS}}static get(e){return this.DEFAULTS[e]}static getInt(e){let s=this.get(e);return parseInt(s,10)}static getBool(e){return this.get(e)==="true"}static loadFromFile(e){if(!(0,H.existsSync)(e))return this.getAllDefaults();let s=(0,H.readFileSync)(e,"utf-8"),t=JSON.parse(s),r=t;if(t.env&&typeof t.env=="object"){r=t.env;try{(0,H.writeFileSync)(e,JSON.stringify(r,null,2),"utf-8"),k.info("SETTINGS","Migrated settings file from nested to flat schema",{settingsPath:e})}catch(a){k.warn("SETTINGS","Failed to auto-migrate settings file",{settingsPath:e},a)}}let i={...this.DEFAULTS};for(let a of Object.keys(this.DEFAULTS))r[a]!==void 0&&(i[a]=r[a]);return i}};var Pe={};function We(){return typeof __dirname<"u"?__dirname:(0,b.dirname)((0,Re.fileURLToPath)(Pe.url))}var ps=We(),v=x.get("CLAUDE_MEM_DATA_DIR"),ie=process.env.CLAUDE_CONFIG_DIR||(0,b.join)((0,be.homedir)(),".claude"),Es=(0,b.join)(v,"archives"),us=(0,b.join)(v,"logs"),ls=(0,b.join)(v,"trash"),ms=(0,b.join)(v,"backups"),Ts=(0,b.join)(v,"settings.json"),Ne=(0,b.join)(v,"claude-mem.db"),Ss=(0,b.join)(v,"vector-db"),gs=(0,b.join)(ie,"settings.json"),hs=(0,b.join)(ie,"commands"),bs=(0,b.join)(ie,"CLAUDE.md");function fe(d){(0,Oe.mkdirSync)(d,{recursive:!0})}var J=class{db;constructor(){fe(v),this.db=new Ae.default(Ne),this.db.pragma("journal_mode = WAL"),this.db.pragma("synchronous = NORMAL"),this.db.pragma("foreign_keys = ON"),this.initializeSchema(),this.ensureWorkerPortColumn(),this.ensurePromptTrackingColumns(),this.removeSessionSummariesUniqueConstraint(),this.addObservationHierarchicalFields(),this.makeObservationsTextNullable(),this.createUserPromptsTable(),this.ensureDiscoveryTokensColumn(),this.createObservationAccessTable(),this.createWaitingSessionsTable(),this.createScheduledContinuationsTable(),this.addWaitingSessionsResponseSource()}initializeSchema(){try{this.db.exec(`
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
      `),this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(12,new Date().toISOString()),console.error("[SessionStore] Successfully created observation_access table")}catch(e){console.error("[SessionStore] Migration error (create observation_access table):",e.message)}}createWaitingSessionsTable(){try{if(this.db.prepare("SELECT version FROM schema_versions WHERE version = ?").get(13))return;if(this.db.pragma("table_info(waiting_sessions)").length>0){this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(13,new Date().toISOString());return}console.error("[SessionStore] Creating waiting_sessions table for Slack notifications..."),this.db.exec(`
        CREATE TABLE waiting_sessions (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          claude_session_id TEXT NOT NULL,
          project TEXT NOT NULL,
          cwd TEXT NOT NULL,
          question TEXT,
          full_message TEXT,
          transcript_path TEXT,
          slack_thread_ts TEXT,
          slack_channel_id TEXT,
          status TEXT CHECK(status IN ('waiting', 'responded', 'expired', 'cancelled')) NOT NULL DEFAULT 'waiting',
          created_at TEXT NOT NULL,
          created_at_epoch INTEGER NOT NULL,
          responded_at TEXT,
          responded_at_epoch INTEGER,
          response_text TEXT,
          expires_at_epoch INTEGER NOT NULL
        );

        CREATE INDEX idx_waiting_sessions_claude_id ON waiting_sessions(claude_session_id);
        CREATE INDEX idx_waiting_sessions_status ON waiting_sessions(status);
        CREATE INDEX idx_waiting_sessions_slack_thread ON waiting_sessions(slack_thread_ts);
        CREATE INDEX idx_waiting_sessions_expires ON waiting_sessions(expires_at_epoch);
      `),this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(13,new Date().toISOString()),console.error("[SessionStore] Successfully created waiting_sessions table")}catch(e){console.error("[SessionStore] Migration error (create waiting_sessions table):",e.message)}}createScheduledContinuationsTable(){try{if(this.db.prepare("SELECT version FROM schema_versions WHERE version = ?").get(14))return;if(this.db.pragma("table_info(scheduled_continuations)").length>0){this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(14,new Date().toISOString());return}console.error("[SessionStore] Creating scheduled_continuations table..."),this.db.exec(`
        CREATE TABLE scheduled_continuations (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          claude_session_id TEXT NOT NULL,
          project TEXT NOT NULL,
          cwd TEXT NOT NULL,
          scheduled_at TEXT NOT NULL,
          scheduled_at_epoch INTEGER NOT NULL,
          reason TEXT CHECK(reason IN ('rate_limit', 'user_scheduled', 'other')) NOT NULL DEFAULT 'other',
          prompt TEXT NOT NULL DEFAULT 'continue',
          status TEXT CHECK(status IN ('pending', 'executed', 'cancelled', 'failed')) NOT NULL DEFAULT 'pending',
          created_at TEXT NOT NULL,
          created_at_epoch INTEGER NOT NULL,
          executed_at TEXT,
          executed_at_epoch INTEGER
        );

        CREATE INDEX idx_scheduled_continuations_status ON scheduled_continuations(status);
        CREATE INDEX idx_scheduled_continuations_scheduled ON scheduled_continuations(scheduled_at_epoch);
      `),this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(14,new Date().toISOString()),console.error("[SessionStore] Successfully created scheduled_continuations table")}catch(e){console.error("[SessionStore] Migration error (create scheduled_continuations table):",e.message)}}addWaitingSessionsResponseSource(){try{if(this.db.prepare("SELECT version FROM schema_versions WHERE version = ?").get(15))return;this.db.pragma("table_info(waiting_sessions)").some(r=>r.name==="response_source")||(console.error("[SessionStore] Adding response_source column to waiting_sessions..."),this.db.exec(`
          ALTER TABLE waiting_sessions ADD COLUMN response_source TEXT CHECK(response_source IN ('slack', 'local', 'api'));
        `),console.error("[SessionStore] Successfully added response_source column")),this.db.prepare("INSERT OR IGNORE INTO schema_versions (version, applied_at) VALUES (?, ?)").run(15,new Date().toISOString())}catch(e){console.error("[SessionStore] Migration error (add response_source column):",e.message)}}logObservationAccess(e,s,t){try{let r=new Date;this.db.prepare(`
        INSERT INTO observation_access (observation_id, access_type, accessed_at, accessed_at_epoch, sdk_session_id)
        VALUES (?, ?, ?, ?, ?)
      `).run(e,s,r.toISOString(),Math.floor(r.getTime()/1e3),t||null)}catch(r){console.error("[SessionStore] Failed to log observation access:",r.message)}}logObservationAccessBatch(e,s,t){if(e.length!==0)try{let r=new Date,i=r.toISOString(),a=Math.floor(r.getTime()/1e3),c=this.db.prepare(`
        INSERT INTO observation_access (observation_id, access_type, accessed_at, accessed_at_epoch, sdk_session_id)
        VALUES (?, ?, ?, ?, ?)
      `);this.db.transaction(l=>{for(let u of l)c.run(u,s,i,a,t||null)})(e)}catch(r){console.error("[SessionStore] Failed to log observation access batch:",r.message)}}getObservationUsageStats(e){try{let t=this.db.prepare(`
        SELECT access_type, COUNT(*) as count
        FROM observation_access
        WHERE observation_id = ?
        GROUP BY access_type
      `).all(e),r={},i=0;for(let p of t)r[p.access_type]=p.count,i+=p.count;let c=this.db.prepare(`
        SELECT accessed_at
        FROM observation_access
        WHERE observation_id = ?
        ORDER BY accessed_at_epoch DESC
        LIMIT 1
      `).get(e);return{totalAccesses:i,byType:r,lastAccessed:c?.accessed_at||null}}catch(s){return console.error("[SessionStore] Failed to get observation usage stats:",s.message),{totalAccesses:0,byType:{},lastAccessed:null}}}getMostUsedObservations(e=50,s){try{let t=s?`
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
    `).get(e)||null}getObservationsByIds(e,s={}){if(e.length===0)return[];let{orderBy:t="date_desc",limit:r}=s,i=t==="date_asc"?"ASC":"DESC",a=r?`LIMIT ${r}`:"",c=e.map(()=>"?").join(",");return this.db.prepare(`
      SELECT *
      FROM observations
      WHERE id IN (${c})
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
    `).all(e),r=new Set,i=new Set;for(let a of t){if(a.files_read)try{let c=JSON.parse(a.files_read);Array.isArray(c)&&c.forEach(p=>r.add(p))}catch{}if(a.files_modified)try{let c=JSON.parse(a.files_modified);Array.isArray(c)&&c.forEach(p=>i.add(p))}catch{}}return{filesRead:Array.from(r),filesModified:Array.from(i)}}getSessionById(e){return this.db.prepare(`
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
    `).get(e)?.prompt_counter||0}createSDKSession(e,s,t){let r=new Date,i=r.getTime(),c=this.db.prepare(`
      INSERT OR IGNORE INTO sdk_sessions
      (claude_session_id, sdk_session_id, project, user_prompt, started_at, started_at_epoch, status)
      VALUES (?, ?, ?, ?, ?, ?, 'active')
    `).run(e,e,s,t,r.toISOString(),i);return c.lastInsertRowid===0||c.changes===0?(s&&s.trim()!==""&&this.db.prepare(`
          UPDATE sdk_sessions
          SET project = ?, user_prompt = ?
          WHERE claude_session_id = ?
        `).run(s,t,e),this.db.prepare(`
        SELECT id FROM sdk_sessions WHERE claude_session_id = ? LIMIT 1
      `).get(e).id):c.lastInsertRowid}updateSDKSessionId(e,s){return this.db.prepare(`
      UPDATE sdk_sessions
      SET sdk_session_id = ?
      WHERE id = ? AND sdk_session_id IS NULL
    `).run(s,e).changes===0?(k.debug("DB","sdk_session_id already set, skipping update",{sessionId:e,sdkSessionId:s}),!1):!0}setWorkerPort(e,s){this.db.prepare(`
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
    `).get(e,s)?.prompt_text??null}storeObservation(e,s,t,r,i=0){let a=new Date,c=a.getTime();this.db.prepare(`
      SELECT id FROM sdk_sessions WHERE sdk_session_id = ?
    `).get(e)||(this.db.prepare(`
        INSERT INTO sdk_sessions
        (claude_session_id, sdk_session_id, project, started_at, started_at_epoch, status)
        VALUES (?, ?, ?, ?, ?, 'active')
      `).run(e,e,s,a.toISOString(),c),console.error(`[SessionStore] Auto-created session record for session_id: ${e}`));let g=this.db.prepare(`
      INSERT INTO observations
      (sdk_session_id, project, type, title, subtitle, facts, narrative, concepts,
       files_read, files_modified, prompt_number, discovery_tokens, created_at, created_at_epoch)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(e,s,t.type,t.title,t.subtitle,JSON.stringify(t.facts),t.narrative,JSON.stringify(t.concepts),JSON.stringify(t.files_read),JSON.stringify(t.files_modified),r||null,i,a.toISOString(),c);return{id:Number(g.lastInsertRowid),createdAtEpoch:c}}storeSummary(e,s,t,r,i=0){let a=new Date,c=a.getTime();this.db.prepare(`
      SELECT id FROM sdk_sessions WHERE sdk_session_id = ?
    `).get(e)||(this.db.prepare(`
        INSERT INTO sdk_sessions
        (claude_session_id, sdk_session_id, project, started_at, started_at_epoch, status)
        VALUES (?, ?, ?, ?, ?, 'active')
      `).run(e,e,s,a.toISOString(),c),console.error(`[SessionStore] Auto-created session record for session_id: ${e}`));let g=this.db.prepare(`
      INSERT INTO session_summaries
      (sdk_session_id, project, request, investigated, learned, completed,
       next_steps, notes, prompt_number, discovery_tokens, created_at, created_at_epoch)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(e,s,t.request,t.investigated,t.learned,t.completed,t.next_steps,t.notes,r||null,i,a.toISOString(),c);return{id:Number(g.lastInsertRowid),createdAtEpoch:c}}markSessionCompleted(e){let s=new Date,t=s.getTime();this.db.prepare(`
      UPDATE sdk_sessions
      SET status = 'completed', completed_at = ?, completed_at_epoch = ?
      WHERE id = ?
    `).run(s.toISOString(),t,e)}markSessionFailed(e){let s=new Date,t=s.getTime();this.db.prepare(`
      UPDATE sdk_sessions
      SET status = 'failed', completed_at = ?, completed_at_epoch = ?
      WHERE id = ?
    `).run(s.toISOString(),t,e)}getSessionSummariesByIds(e,s={}){if(e.length===0)return[];let{orderBy:t="date_desc",limit:r}=s,i=t==="date_asc"?"ASC":"DESC",a=r?`LIMIT ${r}`:"",c=e.map(()=>"?").join(",");return this.db.prepare(`
      SELECT * FROM session_summaries
      WHERE id IN (${c})
      ORDER BY created_at_epoch ${i}
      ${a}
    `).all(...e)}getLatestSessionSummary(e){return this.db.prepare(`
      SELECT * FROM session_summaries
      WHERE sdk_session_id = ?
      ORDER BY created_at_epoch DESC
      LIMIT 1
    `).get(e)}getUserPromptsByIds(e,s={}){if(e.length===0)return[];let{orderBy:t="date_desc",limit:r}=s,i=t==="date_asc"?"ASC":"DESC",a=r?`LIMIT ${r}`:"",c=e.map(()=>"?").join(",");return this.db.prepare(`
      SELECT
        up.*,
        s.project,
        s.sdk_session_id
      FROM user_prompts up
      JOIN sdk_sessions s ON up.claude_session_id = s.claude_session_id
      WHERE up.id IN (${c})
      ORDER BY up.created_at_epoch ${i}
      ${a}
    `).all(...e)}getTimelineAroundTimestamp(e,s=10,t=10,r){return this.getTimelineAroundObservation(null,e,s,t,r)}getTimelineAroundObservation(e,s,t=10,r=10,i){let a=i?"AND project = ?":"",c=i?[i]:[],p,l;if(e!==null){let O=`
        SELECT id, created_at_epoch
        FROM observations
        WHERE id <= ? ${a}
        ORDER BY id DESC
        LIMIT ?
      `,D=`
        SELECT id, created_at_epoch
        FROM observations
        WHERE id >= ? ${a}
        ORDER BY id ASC
        LIMIT ?
      `;try{let m=this.db.prepare(O).all(e,...c,t+1),n=this.db.prepare(D).all(e,...c,r+1);if(m.length===0&&n.length===0)return{observations:[],sessions:[],prompts:[]};p=m.length>0?m[m.length-1].created_at_epoch:s,l=n.length>0?n[n.length-1].created_at_epoch:s}catch(m){return console.error("[SessionStore] Error getting boundary observations:",m.message),{observations:[],sessions:[],prompts:[]}}}else{let O=`
        SELECT created_at_epoch
        FROM observations
        WHERE created_at_epoch <= ? ${a}
        ORDER BY created_at_epoch DESC
        LIMIT ?
      `,D=`
        SELECT created_at_epoch
        FROM observations
        WHERE created_at_epoch >= ? ${a}
        ORDER BY created_at_epoch ASC
        LIMIT ?
      `;try{let m=this.db.prepare(O).all(s,...c,t),n=this.db.prepare(D).all(s,...c,r+1);if(m.length===0&&n.length===0)return{observations:[],sessions:[],prompts:[]};p=m.length>0?m[m.length-1].created_at_epoch:s,l=n.length>0?n[n.length-1].created_at_epoch:s}catch(m){return console.error("[SessionStore] Error getting boundary timestamps:",m.message),{observations:[],sessions:[],prompts:[]}}}let u=`
      SELECT *
      FROM observations
      WHERE created_at_epoch >= ? AND created_at_epoch <= ? ${a}
      ORDER BY created_at_epoch ASC
    `,g=`
      SELECT *
      FROM session_summaries
      WHERE created_at_epoch >= ? AND created_at_epoch <= ? ${a}
      ORDER BY created_at_epoch ASC
    `,I=`
      SELECT up.*, s.project, s.sdk_session_id
      FROM user_prompts up
      JOIN sdk_sessions s ON up.claude_session_id = s.claude_session_id
      WHERE up.created_at_epoch >= ? AND up.created_at_epoch <= ? ${a.replace("project","s.project")}
      ORDER BY up.created_at_epoch ASC
    `;try{let O=this.db.prepare(u).all(p,l,...c),D=this.db.prepare(g).all(p,l,...c),m=this.db.prepare(I).all(p,l,...c);return{observations:O,sessions:D.map(n=>({id:n.id,sdk_session_id:n.sdk_session_id,project:n.project,request:n.request,completed:n.completed,next_steps:n.next_steps,created_at:n.created_at,created_at_epoch:n.created_at_epoch})),prompts:m.map(n=>({id:n.id,claude_session_id:n.claude_session_id,project:n.project,prompt:n.prompt_text,created_at:n.created_at,created_at_epoch:n.created_at_epoch}))}}catch(O){return console.error("[SessionStore] Error querying timeline records:",O.message),{observations:[],sessions:[],prompts:[]}}}createWaitingSession(e,s,t,r,i,a,c=24){let p=new Date,l=p.getTime(),u=l+c*60*60*1e3;return this.db.prepare(`
      INSERT INTO waiting_sessions
      (claude_session_id, project, cwd, question, full_message, transcript_path,
       status, created_at, created_at_epoch, expires_at_epoch)
      VALUES (?, ?, ?, ?, ?, ?, 'waiting', ?, ?, ?)
    `).run(e,s,t,r,i,a,p.toISOString(),l,u).lastInsertRowid}updateWaitingSessionSlackThread(e,s,t){this.db.prepare(`
      UPDATE waiting_sessions
      SET slack_thread_ts = ?, slack_channel_id = ?
      WHERE id = ?
    `).run(s,t,e)}getWaitingSessionBySlackThread(e){return this.db.prepare(`
      SELECT * FROM waiting_sessions
      WHERE slack_thread_ts = ? AND status = 'waiting'
      LIMIT 1
    `).get(e)}getRespondedSessionBySlackThread(e){return this.db.prepare(`
      SELECT * FROM waiting_sessions
      WHERE slack_thread_ts = ? AND status = 'responded'
      ORDER BY responded_at_epoch DESC
      LIMIT 1
    `).get(e)}getWaitingSessionById(e){return this.db.prepare(`
      SELECT * FROM waiting_sessions WHERE id = ?
    `).get(e)}getWaitingSessionsForClaudeSession(e){return this.db.prepare(`
      SELECT * FROM waiting_sessions
      WHERE claude_session_id = ? AND status = 'waiting'
      ORDER BY created_at_epoch DESC
    `).all(e)}getPendingWaitingSessions(){let e=Date.now();return this.db.prepare(`
      SELECT * FROM waiting_sessions
      WHERE status = 'waiting' AND expires_at_epoch > ?
      ORDER BY created_at_epoch DESC
    `).all(e)}markWaitingSessionResponded(e,s,t="slack"){let r=new Date;this.db.prepare(`
      UPDATE waiting_sessions
      SET status = 'responded', responded_at = ?, responded_at_epoch = ?, response_text = ?, response_source = ?
      WHERE id = ?
    `).run(r.toISOString(),r.getTime(),s,t,e)}markWaitingSessionExpired(e){this.db.prepare(`
      UPDATE waiting_sessions SET status = 'expired' WHERE id = ?
    `).run(e)}markWaitingSessionCancelled(e){this.db.prepare(`
      UPDATE waiting_sessions SET status = 'cancelled' WHERE id = ?
    `).run(e)}expireOldWaitingSessions(){let e=Date.now();return this.db.prepare(`
      UPDATE waiting_sessions
      SET status = 'expired'
      WHERE status = 'waiting' AND expires_at_epoch <= ?
    `).run(e).changes}close(){this.db.close()}};var He=$.default.join((0,z.homedir)(),".claude","plugins","marketplaces","thedotmack","plugin",".install-version");function Be(){let d=$.default.join((0,z.homedir)(),".claude-mem","settings.json"),e=x.loadFromFile(d);try{return{totalObservationCount:parseInt(e.CLAUDE_MEM_CONTEXT_OBSERVATIONS,10),fullObservationCount:parseInt(e.CLAUDE_MEM_CONTEXT_FULL_COUNT,10),sessionCount:parseInt(e.CLAUDE_MEM_CONTEXT_SESSION_COUNT,10),showReadTokens:e.CLAUDE_MEM_CONTEXT_SHOW_READ_TOKENS==="true",showWorkTokens:e.CLAUDE_MEM_CONTEXT_SHOW_WORK_TOKENS==="true",showSavingsAmount:e.CLAUDE_MEM_CONTEXT_SHOW_SAVINGS_AMOUNT==="true",showSavingsPercent:e.CLAUDE_MEM_CONTEXT_SHOW_SAVINGS_PERCENT==="true",observationTypes:new Set(e.CLAUDE_MEM_CONTEXT_OBSERVATION_TYPES.split(",").map(s=>s.trim()).filter(Boolean)),observationConcepts:new Set(e.CLAUDE_MEM_CONTEXT_OBSERVATION_CONCEPTS.split(",").map(s=>s.trim()).filter(Boolean)),fullObservationField:e.CLAUDE_MEM_CONTEXT_FULL_FIELD,showLastSummary:e.CLAUDE_MEM_CONTEXT_SHOW_LAST_SUMMARY==="true",showLastMessage:e.CLAUDE_MEM_CONTEXT_SHOW_LAST_MESSAGE==="true"}}catch(s){return k.warn("WORKER","Failed to load context settings, using defaults",{},s),{totalObservationCount:50,fullObservationCount:5,sessionCount:10,showReadTokens:!0,showWorkTokens:!0,showSavingsAmount:!0,showSavingsPercent:!0,observationTypes:new Set(te),observationConcepts:new Set(re),fullObservationField:"narrative",showLastSummary:!0,showLastMessage:!1}}}var Le=4,Ge=1,o={reset:"\x1B[0m",bright:"\x1B[1m",dim:"\x1B[2m",cyan:"\x1B[36m",green:"\x1B[32m",yellow:"\x1B[33m",blue:"\x1B[34m",magenta:"\x1B[35m",gray:"\x1B[90m",red:"\x1B[31m"};function Ie(d){if(!d)return[];try{let e=JSON.parse(d);return Array.isArray(e)?e:[]}catch{return[]}}function je(d){return new Date(d).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}function Ye(d){return new Date(d).toLocaleString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}function Ve(d){return new Date(d).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"})}function Ke(d,e){return $.default.isAbsolute(d)?$.default.relative(e,d):d}function Q(d,e,s,t){return e?t?[`${s}${d}:${o.reset} ${e}`,""]:[`**${d}**: ${e}`,""]:[]}function qe(d){return d.replace(/\//g,"-")}function Je(d){try{if(!(0,B.existsSync)(d))return{userMessage:"",assistantMessage:""};let e=(0,B.readFileSync)(d,"utf-8").trim();if(!e)return{userMessage:"",assistantMessage:""};let s=e.split(`
`).filter(r=>r.trim()),t="";for(let r=s.length-1;r>=0;r--)try{let i=s[r];if(!i.includes('"type":"assistant"'))continue;let a=JSON.parse(i);if(a.type==="assistant"&&a.message?.content&&Array.isArray(a.message.content)){let c="";for(let p of a.message.content)p.type==="text"&&(c+=p.text);if(c=c.replace(/<system-reminder>[\s\S]*?<\/system-reminder>/g,"").trim(),c){t=c;break}}}catch{continue}return{userMessage:"",assistantMessage:t}}catch(e){return k.failure("WORKER","Failed to extract prior messages from transcript",{transcriptPath:d},e),{userMessage:"",assistantMessage:""}}}async function Qe(d,e=!1){let s=Be(),t=d?.cwd??process.cwd(),r=t?$.default.basename(t):"unknown-project",i=null;try{i=new J}catch(N){if(N.code==="ERR_DLOPEN_FAILED"){try{(0,B.unlinkSync)(He)}catch{}return console.error("Native module rebuild needed - restart Claude Code to auto-fix"),""}throw N}let a=Array.from(s.observationTypes),c=a.map(()=>"?").join(","),p=Array.from(s.observationConcepts),l=p.map(()=>"?").join(","),u=i.db.prepare(`
    SELECT
      id, sdk_session_id, type, title, subtitle, narrative,
      facts, concepts, files_read, files_modified, discovery_tokens,
      created_at, created_at_epoch
    FROM observations
    WHERE project = ?
      AND type IN (${c})
      AND EXISTS (
        SELECT 1 FROM json_each(concepts)
        WHERE value IN (${l})
      )
    ORDER BY created_at_epoch DESC
    LIMIT ?
  `).all(r,...a,...p,s.totalObservationCount);if(u.length>0){let N=u.map(R=>R.id);i.logObservationAccessBatch(N,"context_injection",d?.session_id)}let g=i.db.prepare(`
    SELECT id, sdk_session_id, request, investigated, learned, completed, next_steps, created_at, created_at_epoch
    FROM session_summaries
    WHERE project = ?
    ORDER BY created_at_epoch DESC
    LIMIT ?
  `).all(r,s.sessionCount+Ge),I="",O="";if(s.showLastMessage&&u.length>0)try{let N=d?.session_id,R=u.find(h=>h.sdk_session_id!==N);if(R){let h=R.sdk_session_id,y=qe(t),X=$.default.join((0,z.homedir)(),".claude","projects",y,`${h}.jsonl`),G=Je(X);I=G.userMessage,O=G.assistantMessage}}catch{}if(u.length===0&&g.length===0)return i?.close(),e?`
${o.bright}${o.cyan}[${r}] recent context${o.reset}
${o.gray}${"\u2500".repeat(60)}${o.reset}

${o.dim}No previous sessions found for this project yet.${o.reset}
`:`# [${r}] recent context

No previous sessions found for this project yet.`;let D=g.slice(0,s.sessionCount),m=u,n=[];if(e?(n.push(""),n.push(`${o.bright}${o.cyan}[${r}] recent context${o.reset}`),n.push(`${o.gray}${"\u2500".repeat(60)}${o.reset}`),n.push("")):(n.push(`# [${r}] recent context`),n.push("")),m.length>0){e?n.push(`${o.dim}Legend: \u{1F3AF} session-request | \u{1F534} bugfix | \u{1F7E3} feature | \u{1F504} refactor | \u2705 change | \u{1F535} discovery | \u2696\uFE0F  decision${o.reset}`):n.push("**Legend:** \u{1F3AF} session-request | \u{1F534} bugfix | \u{1F7E3} feature | \u{1F504} refactor | \u2705 change | \u{1F535} discovery | \u2696\uFE0F  decision"),n.push(""),e?(n.push(`${o.bright}\u{1F4A1} Column Key${o.reset}`),n.push(`${o.dim}  Read: Tokens to read this observation (cost to learn it now)${o.reset}`),n.push(`${o.dim}  Work: Tokens spent on work that produced this record (\u{1F50D} research, \u{1F6E0}\uFE0F building, \u2696\uFE0F  deciding)${o.reset}`)):(n.push("\u{1F4A1} **Column Key**:"),n.push("- **Read**: Tokens to read this observation (cost to learn it now)"),n.push("- **Work**: Tokens spent on work that produced this record (\u{1F50D} research, \u{1F6E0}\uFE0F building, \u2696\uFE0F  deciding)")),n.push(""),e?(n.push(`${o.dim}\u{1F4A1} Context Index: This semantic index (titles, types, files, tokens) is usually sufficient to understand past work.${o.reset}`),n.push(""),n.push(`${o.dim}When you need implementation details, rationale, or debugging context:${o.reset}`),n.push(`${o.dim}  - Use the mem-search skill to fetch full observations on-demand${o.reset}`),n.push(`${o.dim}  - Critical types (\u{1F534} bugfix, \u2696\uFE0F decision) often need detailed fetching${o.reset}`),n.push(`${o.dim}  - Trust this index over re-reading code for past decisions and learnings${o.reset}`)):(n.push("\u{1F4A1} **Context Index:** This semantic index (titles, types, files, tokens) is usually sufficient to understand past work."),n.push(""),n.push("When you need implementation details, rationale, or debugging context:"),n.push("- Use the mem-search skill to fetch full observations on-demand"),n.push("- Critical types (\u{1F534} bugfix, \u2696\uFE0F decision) often need detailed fetching"),n.push("- Trust this index over re-reading code for past decisions and learnings")),n.push("");let N=u.length,R=u.reduce((_,T)=>{let S=(T.title?.length||0)+(T.subtitle?.length||0)+(T.narrative?.length||0)+JSON.stringify(T.facts||[]).length;return _+Math.ceil(S/Le)},0),h=u.reduce((_,T)=>_+(T.discovery_tokens||0),0),y=h-R,X=h>0?Math.round(y/h*100):0,G=s.showReadTokens||s.showWorkTokens||s.showSavingsAmount||s.showSavingsPercent;if(G)if(e){if(n.push(`${o.bright}${o.cyan}\u{1F4CA} Context Economics${o.reset}`),n.push(`${o.dim}  Loading: ${N} observations (${R.toLocaleString()} tokens to read)${o.reset}`),n.push(`${o.dim}  Work investment: ${h.toLocaleString()} tokens spent on research, building, and decisions${o.reset}`),h>0&&(s.showSavingsAmount||s.showSavingsPercent)){let _="  Your savings: ";s.showSavingsAmount&&s.showSavingsPercent?_+=`${y.toLocaleString()} tokens (${X}% reduction from reuse)`:s.showSavingsAmount?_+=`${y.toLocaleString()} tokens`:_+=`${X}% reduction from reuse`,n.push(`${o.green}${_}${o.reset}`)}n.push("")}else{if(n.push("\u{1F4CA} **Context Economics**:"),n.push(`- Loading: ${N} observations (${R.toLocaleString()} tokens to read)`),n.push(`- Work investment: ${h.toLocaleString()} tokens spent on research, building, and decisions`),h>0&&(s.showSavingsAmount||s.showSavingsPercent)){let _="- Your savings: ";s.showSavingsAmount&&s.showSavingsPercent?_+=`${y.toLocaleString()} tokens (${X}% reduction from reuse)`:s.showSavingsAmount?_+=`${y.toLocaleString()} tokens`:_+=`${X}% reduction from reuse`,n.push(_)}n.push("")}let Ce=g[0]?.id,ve=D.map((_,T)=>{let S=T===0?null:g[T+1];return{..._,displayEpoch:S?S.created_at_epoch:_.created_at_epoch,displayTime:S?S.created_at:_.created_at,shouldShowLink:_.id!==Ce}}),De=new Set(u.slice(0,s.fullObservationCount).map(_=>_.id)),ae=[...m.map(_=>({type:"observation",data:_})),...ve.map(_=>({type:"summary",data:_}))];ae.sort((_,T)=>{let S=_.type==="observation"?_.data.created_at_epoch:_.data.displayEpoch,M=T.type==="observation"?T.data.created_at_epoch:T.data.displayEpoch;return S-M});let j=new Map;for(let _ of ae){let T=_.type==="observation"?_.data.created_at:_.data.displayTime,S=Ve(T);j.has(S)||j.set(S,[]),j.get(S).push(_)}let ye=Array.from(j.entries()).sort((_,T)=>{let S=new Date(_[0]).getTime(),M=new Date(T[0]).getTime();return S-M});for(let[_,T]of ye){e?(n.push(`${o.bright}${o.cyan}${_}${o.reset}`),n.push("")):(n.push(`### ${_}`),n.push(""));let S=null,M="",w=!1;for(let Z of T)if(Z.type==="summary"){w&&(n.push(""),w=!1,S=null,M="");let E=Z.data,F=`${E.request||"Session started"} (${je(E.displayTime)})`,C=E.shouldShowLink?`claude-mem://session-summary/${E.id}`:"";if(e){let f=C?`${o.dim}[${C}]${o.reset}`:"";n.push(`\u{1F3AF} ${o.yellow}#S${E.id}${o.reset} ${F} ${f}`)}else{let f=C?` [\u2192](${C})`:"";n.push(`**\u{1F3AF} #S${E.id}** ${F}${f}`)}n.push("")}else{let E=Z.data,F=Ie(E.files_modified),C=F.length>0&&F[0]?Ke(F[0],t):"General";C!==S&&(w&&n.push(""),e?n.push(`${o.dim}${C}${o.reset}`):n.push(`**${C}**`),e||(n.push("| ID | Time | T | Title | Read | Work |"),n.push("|----|------|---|-------|------|------|")),S=C,w=!0,M="");let f=Ye(E.created_at),Y=E.title||"Untitled",V=le[E.type]||"\u2022",Me=(E.title?.length||0)+(E.subtitle?.length||0)+(E.narrative?.length||0)+JSON.stringify(E.facts||[]).length,W=Math.ceil(Me/Le),P=E.discovery_tokens||0,ee=me[E.type]||"\u{1F50D}",de=P>0?`${ee} ${P.toLocaleString()}`:"-",se=f!==M,_e=se?f:"";if(M=f,De.has(E.id)){let U=s.fullObservationField==="narrative"?E.narrative:E.facts?Ie(E.facts).join(`
`):null;if(e){let L=se?`${o.dim}${f}${o.reset}`:" ".repeat(f.length),K=s.showReadTokens&&W>0?`${o.dim}(~${W}t)${o.reset}`:"",pe=s.showWorkTokens&&P>0?`${o.dim}(${ee} ${P.toLocaleString()}t)${o.reset}`:"";n.push(`  ${o.dim}#${E.id}${o.reset}  ${L}  ${V}  ${o.bright}${Y}${o.reset}`),U&&n.push(`    ${o.dim}${U}${o.reset}`),(K||pe)&&n.push(`    ${K} ${pe}`),n.push("")}else{w&&(n.push(""),w=!1),n.push(`**#${E.id}** ${_e||"\u2033"} ${V} **${Y}**`),U&&(n.push(""),n.push(U),n.push(""));let L=[];s.showReadTokens&&L.push(`Read: ~${W}`),s.showWorkTokens&&L.push(`Work: ${de}`),L.length>0&&n.push(L.join(", ")),n.push(""),S=null}}else if(e){let U=se?`${o.dim}${f}${o.reset}`:" ".repeat(f.length),L=s.showReadTokens&&W>0?`${o.dim}(~${W}t)${o.reset}`:"",K=s.showWorkTokens&&P>0?`${o.dim}(${ee} ${P.toLocaleString()}t)${o.reset}`:"";n.push(`  ${o.dim}#${E.id}${o.reset}  ${U}  ${V}  ${Y} ${L} ${K}`)}else{let U=s.showReadTokens?`~${W}`:"",L=s.showWorkTokens?de:"";n.push(`| #${E.id} | ${_e||"\u2033"} | ${V} | ${Y} | ${U} | ${L} |`)}}w&&n.push("")}let A=g[0],ce=u[0];if(s.showLastSummary&&A&&(A.investigated||A.learned||A.completed||A.next_steps)&&(!ce||A.created_at_epoch>ce.created_at_epoch)&&(n.push(...Q("Investigated",A.investigated,o.blue,e)),n.push(...Q("Learned",A.learned,o.yellow,e)),n.push(...Q("Completed",A.completed,o.green,e)),n.push(...Q("Next Steps",A.next_steps,o.magenta,e))),O&&(n.push(""),n.push("---"),n.push(""),e?(n.push(`${o.bright}${o.magenta}\u{1F4CB} Previously${o.reset}`),n.push(""),n.push(`${o.dim}A: ${O}${o.reset}`)):(n.push("**\u{1F4CB} Previously**"),n.push(""),n.push(`A: ${O}`)),n.push("")),G&&h>0&&y>0){let _=Math.round(h/1e3);n.push(""),e?n.push(`${o.dim}\u{1F4B0} Access ${_}k tokens of past research & decisions for just ${R.toLocaleString()}t. Use the mem-search skill to access memories by ID instead of re-reading files.${o.reset}`):n.push(`\u{1F4B0} Access ${_}k tokens of past research & decisions for just ${R.toLocaleString()}t. Use the mem-search skill to access memories by ID instead of re-reading files.`)}}return i?.close(),n.join(`
`).trimEnd()}0&&(module.exports={generateContext});
