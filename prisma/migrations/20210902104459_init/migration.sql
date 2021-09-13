--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4
-- Dumped by pg_dump version 13.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: bachelor
--

CREATE TABLE public._prisma_migrations (
                                         id character varying(36) NOT NULL,
                                         checksum character varying(64) NOT NULL,
                                         finished_at timestamp with time zone,
                                         migration_name character varying(255) NOT NULL,
                                         logs text,
                                         rolled_back_at timestamp with time zone,
                                         started_at timestamp with time zone DEFAULT now() NOT NULL,
                                         applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO bachelor;

--
-- Name: group; Type: TABLE; Schema: public; Owner: bachelor
--

CREATE TABLE public."group" (
                              id text NOT NULL,
                              "tunierId" text
);


ALTER TABLE public."group" OWNER TO bachelor;

--
-- Name: half_finals; Type: TABLE; Schema: public; Owner: bachelor
--

CREATE TABLE public.half_finals (
  id text NOT NULL
);


ALTER TABLE public.half_finals OWNER TO bachelor;

--
-- Name: match; Type: TABLE; Schema: public; Owner: bachelor
--

CREATE TABLE public.match (
                            id text NOT NULL,
                            "teamOneGoals" integer DEFAULT 0 NOT NULL,
                            "teamTwoGoals" integer DEFAULT 0 NOT NULL,
                            "hasPlayed" boolean DEFAULT false NOT NULL,
                            "groupId" text,
                            "quaterFinalsId" text,
                            "halfFinalsId" text,
                            team_one_id text NOT NULL,
                            team_two_id text NOT NULL
);


ALTER TABLE public.match OWNER TO bachelor;

--
-- Name: quater_finals; Type: TABLE; Schema: public; Owner: bachelor
--

CREATE TABLE public.quater_finals (
  id text NOT NULL
);


ALTER TABLE public.quater_finals OWNER TO bachelor;

--
-- Name: team; Type: TABLE; Schema: public; Owner: bachelor
--

CREATE TABLE public.team (
                           id text NOT NULL,
                           name text NOT NULL,
                           trainer text NOT NULL,
                           ort text NOT NULL,
                           "groupId" text
);


ALTER TABLE public.team OWNER TO bachelor;

--
-- Name: tunier; Type: TABLE; Schema: public; Owner: bachelor
--

CREATE TABLE public.tunier (
                             id text NOT NULL,
                             "quaterFinalsId" text,
                             "halfFinalsId" text,
                             "matchId" text
);


ALTER TABLE public.tunier OWNER TO bachelor;

--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: bachelor
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
8eb8d46c-10b4-44a3-b0b8-561fa7c39f66	fa81c6f5c48e7d6e8ba704ddf22b51793dd873acb78cf8ff4c8cccdf6c097113	2021-09-02 10:44:59.774712+00	20210902104459_init	\N	\N	2021-09-02 10:44:59.714715+00	1
6adf00d8-14d7-4e3e-a0ca-9f854f352f10	f20a8865f7eca93ec2fa4e58274321947b3c0fbca96ec96664d014656a5200e4	2021-09-02 11:22:09.948394+00	20210902112209_init_fixes	\N	\N	2021-09-02 11:22:09.928804+00	1
ffcbc61b-705e-42cd-acde-038ca1d83570	151d11d4805ff8dd5beb906fa99e8b78b4c653ca8a0b37d3a0183726cf17d8d4	2021-09-02 11:52:52.102337+00	20210902115252_	\N	\N	2021-09-02 11:52:52.080235+00	1
\.


--
-- Data for Name: group; Type: TABLE DATA; Schema: public; Owner: bachelor
--

COPY public."group" (id, "tunierId") FROM stdin;
0ce0dc64-8284-4eed-813e-b044d2cafcee	C9074D7F-8847-4B17-B36B-13010EE29C90
2a0b64e7-5ffa-463e-b2db-ee4c0901e99e	C9074D7F-8847-4B17-B36B-13010EE29C90
\.


--
-- Data for Name: half_finals; Type: TABLE DATA; Schema: public; Owner: bachelor
--

COPY public.half_finals (id) FROM stdin;
B8A7768C-CFA9-40B2-B542-DE1D94C5662B
\.


--
-- Data for Name: match; Type: TABLE DATA; Schema: public; Owner: bachelor
--

COPY public.match (id, "teamOneGoals", "teamTwoGoals", "hasPlayed", "groupId", "quaterFinalsId", "halfFinalsId", team_one_id, team_two_id) FROM stdin;
77FFFF73-6279-4DC2-9867-7EA5F3C8FC0F	0	0	f	\N	\N	\N	2b7a5520-8ebf-4a59-ab66-0da2316d39d4	cd0f345b-52b1-4f49-8dcb-8c98d28be1f1
365c2827-3f08-4d40-b5ef-155260fc8285	4	0	t	0ce0dc64-8284-4eed-813e-b044d2cafcee	\N	\N	2b7a5520-8ebf-4a59-ab66-0da2316d39d4	0a7ff306-4e35-48b3-b704-f8dd667e2f9c
d04e6793-6358-4595-afeb-594303b8f4f3	1	2	t	0ce0dc64-8284-4eed-813e-b044d2cafcee	\N	\N	9ae4206a-68aa-433c-9070-bd1483bc33d7	cb9aa6a3-34c7-43c6-a18d-72c764261e3a
2ed6d965-6d31-490d-9d62-57b7ab9914a4	5	0	t	0ce0dc64-8284-4eed-813e-b044d2cafcee	\N	\N	9ae4206a-68aa-433c-9070-bd1483bc33d7	0a7ff306-4e35-48b3-b704-f8dd667e2f9c
ff3cad55-f865-4f95-91c9-82573eb6074f	0	0	t	2a0b64e7-5ffa-463e-b2db-ee4c0901e99e	\N	\N	c228ed64-f683-42c3-a1d6-6c08106c10e4	6d00990f-4c23-48fd-bb0b-37da718350fc
fa86f2b9-6e11-488e-b392-6c21d11dd21d	1	0	t	2a0b64e7-5ffa-463e-b2db-ee4c0901e99e	\N	\N	5eec91d2-184e-4763-b2b0-6c118edb6cb0	6d00990f-4c23-48fd-bb0b-37da718350fc
9e76acdf-c19c-4ae4-a5fc-4b04eb89362e	2	0	t	2a0b64e7-5ffa-463e-b2db-ee4c0901e99e	\N	\N	c228ed64-f683-42c3-a1d6-6c08106c10e4	5eec91d2-184e-4763-b2b0-6c118edb6cb0
7d99ff09-3b32-43b6-8e32-df5f4e75adee	3	0	t	2a0b64e7-5ffa-463e-b2db-ee4c0901e99e	\N	\N	c228ed64-f683-42c3-a1d6-6c08106c10e4	cd0f345b-52b1-4f49-8dcb-8c98d28be1f1
74d157ed-0276-4b44-bd0e-906ce19e8655	4	0	t	2a0b64e7-5ffa-463e-b2db-ee4c0901e99e	\N	\N	5eec91d2-184e-4763-b2b0-6c118edb6cb0	cd0f345b-52b1-4f49-8dcb-8c98d28be1f1
142b1a0c-95fd-4677-af06-bb0bf24e89da	3	0	t	2a0b64e7-5ffa-463e-b2db-ee4c0901e99e	\N	\N	6d00990f-4c23-48fd-bb0b-37da718350fc	cd0f345b-52b1-4f49-8dcb-8c98d28be1f1
8e82bdf5-7154-47df-8522-7b6f4181db55	0	0	f	0ce0dc64-8284-4eed-813e-b044d2cafcee	\N	\N	2b7a5520-8ebf-4a59-ab66-0da2316d39d4	cb9aa6a3-34c7-43c6-a18d-72c764261e3a
7a710152-0931-4cb6-8c3a-4c2bd03f5ae0	0	0	f	0ce0dc64-8284-4eed-813e-b044d2cafcee	\N	\N	9ae4206a-68aa-433c-9070-bd1483bc33d7	2b7a5520-8ebf-4a59-ab66-0da2316d39d4
4b20964e-02cc-47b0-bcd9-3387deb2745c	0	0	f	0ce0dc64-8284-4eed-813e-b044d2cafcee	\N	\N	cb9aa6a3-34c7-43c6-a18d-72c764261e3a	0a7ff306-4e35-48b3-b704-f8dd667e2f9c
\.


--
-- Data for Name: quater_finals; Type: TABLE DATA; Schema: public; Owner: bachelor
--

COPY public.quater_finals (id) FROM stdin;
BBAD9BEF-E108-465E-9F09-88A14A2E5E5C
\.


--
-- Data for Name: team; Type: TABLE DATA; Schema: public; Owner: bachelor
--

COPY public.team (id, name, trainer, ort, "groupId") FROM stdin;
c228ed64-f683-42c3-a1d6-6c08106c10e4	Test1	Trainer1	TestOrt1	2a0b64e7-5ffa-463e-b2db-ee4c0901e99e
5eec91d2-184e-4763-b2b0-6c118edb6cb0	Test2	Trainer2	TestOrt2	2a0b64e7-5ffa-463e-b2db-ee4c0901e99e
6d00990f-4c23-48fd-bb0b-37da718350fc	Test3	Trainer3	TestOrt3	2a0b64e7-5ffa-463e-b2db-ee4c0901e99e
cd0f345b-52b1-4f49-8dcb-8c98d28be1f1	Test4	Trainer4	TestOrt4	2a0b64e7-5ffa-463e-b2db-ee4c0901e99e
9ae4206a-68aa-433c-9070-bd1483bc33d7	Test5	Trainer5	TestOrt5	0ce0dc64-8284-4eed-813e-b044d2cafcee
2b7a5520-8ebf-4a59-ab66-0da2316d39d4	Test6	Trainer6	TestOrt6	0ce0dc64-8284-4eed-813e-b044d2cafcee
cb9aa6a3-34c7-43c6-a18d-72c764261e3a	Test7	Trainer7	TestOrt7	0ce0dc64-8284-4eed-813e-b044d2cafcee
0a7ff306-4e35-48b3-b704-f8dd667e2f9c	Test8	Trainer8	TestOrt8	0ce0dc64-8284-4eed-813e-b044d2cafcee
\.


--
-- Data for Name: tunier; Type: TABLE DATA; Schema: public; Owner: bachelor
--

COPY public.tunier (id, "quaterFinalsId", "halfFinalsId", "matchId") FROM stdin;
C9074D7F-8847-4B17-B36B-13010EE29C90	BBAD9BEF-E108-465E-9F09-88A14A2E5E5C	B8A7768C-CFA9-40B2-B542-DE1D94C5662B	\N
\.


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: bachelor
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: group group_pkey; Type: CONSTRAINT; Schema: public; Owner: bachelor
--

ALTER TABLE ONLY public."group"
  ADD CONSTRAINT group_pkey PRIMARY KEY (id);


--
-- Name: half_finals half_finals_pkey; Type: CONSTRAINT; Schema: public; Owner: bachelor
--

ALTER TABLE ONLY public.half_finals
  ADD CONSTRAINT half_finals_pkey PRIMARY KEY (id);


--
-- Name: match match_pkey; Type: CONSTRAINT; Schema: public; Owner: bachelor
--

ALTER TABLE ONLY public.match
  ADD CONSTRAINT match_pkey PRIMARY KEY (id);


--
-- Name: quater_finals quater_finals_pkey; Type: CONSTRAINT; Schema: public; Owner: bachelor
--

ALTER TABLE ONLY public.quater_finals
  ADD CONSTRAINT quater_finals_pkey PRIMARY KEY (id);


--
-- Name: team team_pkey; Type: CONSTRAINT; Schema: public; Owner: bachelor
--

ALTER TABLE ONLY public.team
  ADD CONSTRAINT team_pkey PRIMARY KEY (id);


--
-- Name: tunier tunier_pkey; Type: CONSTRAINT; Schema: public; Owner: bachelor
--

ALTER TABLE ONLY public.tunier
  ADD CONSTRAINT tunier_pkey PRIMARY KEY (id);


--
-- Name: group_teams_uix; Type: INDEX; Schema: public; Owner: bachelor
--

CREATE UNIQUE INDEX group_teams_uix ON public.match USING btree ("groupId", team_one_id, team_two_id);


--
-- Name: group group_tunierId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bachelor
--

ALTER TABLE ONLY public."group"
  ADD CONSTRAINT "group_tunierId_fkey" FOREIGN KEY ("tunierId") REFERENCES public.tunier(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: match match_groupId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bachelor
--

ALTER TABLE ONLY public.match
  ADD CONSTRAINT "match_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES public."group"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: match match_halfFinalsId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bachelor
--

ALTER TABLE ONLY public.match
  ADD CONSTRAINT "match_halfFinalsId_fkey" FOREIGN KEY ("halfFinalsId") REFERENCES public.half_finals(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: match match_quaterFinalsId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bachelor
--

ALTER TABLE ONLY public.match
  ADD CONSTRAINT "match_quaterFinalsId_fkey" FOREIGN KEY ("quaterFinalsId") REFERENCES public.quater_finals(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: match match_team_one_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bachelor
--

ALTER TABLE ONLY public.match
  ADD CONSTRAINT match_team_one_id_fkey FOREIGN KEY (team_one_id) REFERENCES public.team(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: match match_team_two_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bachelor
--

ALTER TABLE ONLY public.match
  ADD CONSTRAINT match_team_two_id_fkey FOREIGN KEY (team_two_id) REFERENCES public.team(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: team team_groupId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bachelor
--

ALTER TABLE ONLY public.team
  ADD CONSTRAINT "team_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES public."group"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: tunier tunier_halfFinalsId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bachelor
--

ALTER TABLE ONLY public.tunier
  ADD CONSTRAINT "tunier_halfFinalsId_fkey" FOREIGN KEY ("halfFinalsId") REFERENCES public.half_finals(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: tunier tunier_matchId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bachelor
--

ALTER TABLE ONLY public.tunier
  ADD CONSTRAINT "tunier_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES public.match(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: tunier tunier_quaterFinalsId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bachelor
--

ALTER TABLE ONLY public.tunier
  ADD CONSTRAINT "tunier_quaterFinalsId_fkey" FOREIGN KEY ("quaterFinalsId") REFERENCES public.quater_finals(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

