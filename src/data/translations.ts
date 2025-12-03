export const translations = {
    ja: {
        header: {
            top: "TOP",
            about: "ABOUT US",
            projects: "PROJECTS",
            tech: "TECH",
            fund: "FUND&SPONSORS",
            contact: "CONTACT",
            captions: {
                top: "トップページ",
                about: "活動概要",
                projects: "プロジェクト一覧",
                tech: "技術・ブログ",
                fund: "資金・スポンサー",
                contact: "リンク・お問い合わせ",
            }
        },
        fundPage: {
            banner: {
                mission: "MISSION ACCOMPLISHED",
                title: "CROWDFUNDING",
                success: "SUCCESS",
                description: "12月15日をもって、クラウドファンディングは終了いたしました。多大なるご支援、誠にありがとうございました。",
                totalFunds: "総支援額",
                supporters: "支援者数",
                message: "皆様の温かいご支援により、C-83Lプロジェクトは大きく前進しました。117名の支援者の皆様に心より感謝申し上げます。",
                archiveLink: "プロジェクトページを見る"
            },
            sponsors: {
                title: "SPONSORS",
                subtitle: "スポンサー企業の皆様",
                description: "私たちの活動をご支援いただいている企業の皆様です。",
                active: "ACTIVE PARTNERS",
                supporting: "SUPPORTING ORGS",
                archived: "ARCHIVED ALLIES",
                protocols: "PARTNERSHIP PROTOCOLS",
                sponsorship: {
                    title: "SPONSORS",
                    desc: "資金・物品・技術支援をいただける企業様",
                    benefits: [
                        "機体へのロゴ掲載",
                        "Webサイト・SNSでの紹介",
                        "活動報告書の送付"
                    ]
                },
                support: {
                    title: "SUPPORT",
                    desc: "イベントやキャンペーンをご支援いただける企業様",
                    benefits: [
                        "Webサイトでのロゴ掲載",
                        "キャンペーンごとの特典",
                        "活動報告書の送付"
                    ]
                },
                becomePartner: "パートナーになる"
            },
            support: {
                title: "SUPPORT US",
                subtitle: "ご支援のお願い",
                description: "CREATEはハイブリッドロケットの設計・開発を行っています。東工大基金を通じたご支援をお願いいたします。",
                jpForm: "日本語フォーム",
                enForm: "英語フォーム",
                allocation: {
                    title: "資金の使い道",
                    desc: "ハイブリッドロケットの製造費、打ち上げ実験の旅費・輸送費、および次世代への技術継承のための活動費として活用させていただきます。"
                },
                protocol: {
                    title: "寄付の方法",
                    desc: "フォームより「クレジットカード」「インターネットバンキング」「コンビニ決済」などが選択可能です。振込用紙をご希望の場合はお問い合わせください。",
                    purposeCode: "使途コード: 「CREATE支援基金」"
                },
                rewards: {
                    title: "特典",
                    standard: {
                        title: "標準特典",
                        items: [
                            "- 活動報告書の送付",
                            "- 打ち上げ実験報告会の招待",
                            "- 機体見学会への招待 (打ち上げ後)"
                        ]
                    },
                    elite: {
                        title: "高額寄付特典",
                        items: [
                            "- 感謝の集いへの招待 (全員)",
                            "- 大学銘板への芳名 (30万円以上 / 法人100万円以上)",
                            "- 紺綬褒章への推薦 (500万円以上 / 法人1000万円以上)"
                        ]
                    }
                }
            }
        },
        topPage: {
            hero: {
                title: "CREATE",
                subtitle: "Student Rocket Project",
                coordinates: "34°43'N 139°24'E",
                status: "OPERATIONAL",
                scroll: "Scroll",
                galleryTitle: "未来を創る。CREATE",
                gallerySubtitle: "17年の軌跡"
            },
            ongoing: {
                title: "ONGOING MISSIONS",
                description: "現在進行中のプロジェクトと今後の打ち上げスケジュール。学生ロケットの限界を押し広げる。",
                stats: {
                    active: "Active Projects",
                    launches: "Total Launches"
                },
                missions: [
                    {
                        name: "C-103J MISSION",
                        time: "MAR 2026",
                        caption: "2025年度新入生機体。新型分離機構に挑戦。"
                    },
                    {
                        name: "C-97J MISSION",
                        time: "AUG 2026",
                        caption: "次世代バルブシステム＋自作エンジン搭載機体。"
                    },
                    {
                        name: "C-101J MISSION",
                        time: "NOV 2026",
                        caption: "新姿勢制御システム/リアルタイム映像伝送の検証。"
                    }
                ]
            },
            completed: {
                archiveLabel: "ARCHIVE DATABASE",
                title: "COMPLETED MISSIONS",
                searchPlaceholder: "SEARCH ARCHIVE...",
                tableHeaders: {
                    mission: "MISSION ID",
                    site: "LAUNCH SITE",
                    date: "DATE",
                    status: "STATUS"
                },
                footer: {
                    version: "DATABASE_V2.0",
                    displaying: "DISPLAYING"
                }
            },
            rocket: {
                specsLabel: "TECHNICAL SPECIFICATIONS",
                modelName: "C-83LM",
                codeName: "CODE: KEY-CHAN",
                description: "過去最大の自作エンジンLM5-i・史上初のリーフィング機構搭載機体",
                specs: {
                    altitude: "MAX ALTITUDE",
                    length: "TOTAL LENGTH",
                    mass: "WET MASS"
                },
                status: "OPERATIONAL"
            },
            social: {
                youtubeTitle: "TRANSMISSIONS",
                twitterTitle: "COMMS FEED",
                views: "VIEWS"
            }
        },
        aboutUs: {
            mission: {
                label: "MISSION BRIEFING",
                title: "OUR MISSION",
                description1: "CREATEは東京科学大学の公認技術サークルであり、ハイブリッドロケットの開発、製造、打ち上げに専念しています。私たちは、エンジニア、デザイナー、そして夢想家の集団であり、学生ロケットの限界に挑戦しています。",
                description2: "高高度軌道解析から独自の推進システムまで、メンバーは厳格な研究開発に取り組んでいます。工学、理学、バイオテクノロジーなど、あらゆる分野の学生を歓迎し、航空宇宙と革新への情熱で結ばれています。"
            },
            team: {
                title: "CREW ROSTER",
                roles: [
                    {
                        name: "STRUCTURE",
                        jpName: "構造班",
                        description: "機体の力学と製造プロセスを担当。",
                        tasks: ["放出機構", "パラシュート", "ノーズコーン"]
                    },
                    {
                        name: "AVIONICS",
                        jpName: "電装班",
                        description: "内部電子回路と飛行ソフトウェアを開発。",
                        tasks: ["センサー", "回路設計", "組み込みシステム"]
                    },
                    {
                        name: "SIMULATION",
                        jpName: "シミュレーション班",
                        description: "独自のシステムで飛行軌道解析を実施。",
                        tasks: ["フライトシム", "SPICA", "数値解析"]
                    },
                    {
                        name: "PROPULSION",
                        jpName: "推進班",
                        description: "ロケットモーターの開発と点火システムを管理。",
                        tasks: ["ハイブリッドエンジン", "点火システム", "配管"]
                    }
                ],
                assignedTasks: "Assigned Tasks"
            },
            protocols: {
                title: "DISCLOSURE PROTOCOLS",
                intro: "このアーカイブ内のデータへのアクセスおよび利用は、以下の条件への同意を意味します：",
                items: [
                    {
                        title: "Open Knowledge:",
                        text: "CREATEは技術交流のためのオープンな環境を目指しています。公開データの引用および利用を推奨します。"
                    },
                    {
                        title: "Accuracy Disclaimer:",
                        text: "正確性を期していますが、データの完全性は保証されません。"
                    },
                    {
                        title: "Release Schedule:",
                        text: "プロジェクトレポートはミッション完了の6ヶ月後に機密解除されます。"
                    },
                    {
                        title: "Liability:",
                        text: "CREATEはデータの利用に起因する損害について一切の責任を負いません。"
                    }
                ]
            },
            external: {
                label: "EXTERNAL DATABASE",
                linkText: "Public Reports Archive"
            }
        },
        contactPage: {
            header: {
                status: "SECURE CONNECTION ESTABLISHED",
                title: "CONTACT CENTER",
                description: "CREATEの活動に関するお問い合わせ、取材依頼、技術提携のご相談はこちらから。"
            },
            form: {
                title: "INQUIRY FORM",
                name: "NAME",
                namePlaceholder: "お名前",
                email: "EMAIL",
                emailPlaceholder: "メールアドレス",
                subject: "SUBJECT",
                subjectPlaceholder: "件名",
                message: "MESSAGE",
                messagePlaceholder: "お問い合わせ内容",
                submit: "SEND MESSAGE",
                googleFormDescription: "お問い合わせは以下のGoogleフォームよりお願いいたします。",
                googleFormButton: "Googleフォームへ移動"
            },
            network: {
                title: "NETWORK",
                description: "CREATEは、志を同じくする団体や企業との相互リンクを歓迎しています。"
            }
        },
        common: {
            readMore: "詳しく見る",
            loading: "読み込み中..."
        },
        techPage: {
            maintenance: {
                title: "MAINTENANCE",
                description: "現在、技術ブログのシステム移行作業を行っております。公開まで今しばらくお待ちください。",
                backToTop: "トップページに戻る"
            }
        },
        projectsPage: {
            title: "PROJECT ARCHIVE",
            scroll: "SCROLL TO EXPLORE ///",
            archive: "CREATE ARCHIVE 2016-2025",
            categories: {
                all: "ALL",
                rocket: "ROCKET",
                engine: "ENGINE",
                cansat: "CANSAT"
            },
            specs: {
                altitude: "ALTITUDE",
                length: "LENGTH",
                weight: "WEIGHT",
                thrust: "THRUST",
                burnCount: "BURN COUNT",
                status: "STATUS",
                inProgress: "IN PROGRESS",
                terminated: "TERMINATED",
                completed: "COMPLETED"
            }
        }
    },
    en: {
        header: {
            top: "TOP",
            about: "ABOUT US",
            projects: "PROJECTS",
            tech: "TECH",
            fund: "FUND&SPONSORS",
            contact: "CONTACT",
            captions: {
                top: "Home",
                about: "About Us",
                projects: "Projects",
                tech: "Technology",
                fund: "Fund & Sponsors",
                contact: "Contact",
            }
        },
        contactPage: {
            header: {
                status: "SECURE CONNECTION ESTABLISHED",
                title: "CONTACT CENTER",
                description: "Direct line to CREATE operations. For inquiries regarding projects, partnerships, or recruitment."
            },
            form: {
                title: "INQUIRY FORM",
                name: "NAME",
                namePlaceholder: "John Doe",
                email: "EMAIL",
                emailPlaceholder: "john@example.com",
                subject: "SUBJECT",
                subjectPlaceholder: "Regarding Partnership",
                message: "MESSAGE",
                messagePlaceholder: "Enter your message...",
                submit: "SEND MESSAGE",
                googleFormDescription: "Please contact us via the Google Form below.",
                googleFormButton: "Go to Google Form"
            },
            network: {
                title: "NETWORK",
                description: "We welcome mutual link exchanges with aspiring enterprises and organizations."
            }
        },
        fundPage: {
            banner: {
                mission: "MISSION ACCOMPLISHED",
                title: "CROWDFUNDING",
                success: "SUCCESS",
                description: "The crowdfunding campaign concluded on Dec 15th with overwhelming support. Thank you very much.",
                totalFunds: "TOTAL FUNDS",
                supporters: "SUPPORTERS",
                message: "Thanks to your warm support, the C-83L project has made great progress. We extend our deepest gratitude to all 117 supporters.",
                archiveLink: "VIEW CAMPAIGN ARCHIVE"
            },
            sponsors: {
                title: "SPONSORS",
                subtitle: "Our Sponsors",
                description: "We are proudly supported by these companies.",
                active: "ACTIVE PARTNERS",
                supporting: "SUPPORTING ORGS",
                archived: "ARCHIVED ALLIES",
                protocols: "PARTNERSHIP PROTOCOLS",
                sponsorship: {
                    title: "SPONSORS",
                    desc: "For partners providing financial, material, or service support.",
                    benefits: [
                        "Logo placement on mission hardware",
                        "Digital presence on comms channels",
                        "Access to mission reports"
                    ]
                },
                support: {
                    title: "SUPPORT",
                    desc: "For partners supporting via campaigns or specific events.",
                    benefits: [
                        "Logo acknowledgment on website",
                        "Campaign-specific deliverables",
                        "Mission report access"
                    ]
                },
                becomePartner: "BECOME A PARTNER"
            },
            support: {
                title: "SUPPORT US",
                subtitle: "Support Our Mission",
                description: "CREATE is designing and developing hybrid rockets. To support our mission via the Tokyo Institute of Technology Fund, please initiate the support protocol below.",
                jpForm: "JP FORM",
                enForm: "EN FORM",
                allocation: {
                    title: "RESOURCE ALLOCATION",
                    desc: "Funds will be deployed for: Hybrid rocket manufacturing, launch experiment logistics, transport costs, and continuity of operations for future mission cycles."
                },
                protocol: {
                    title: "CONTRIBUTION PROTOCOL",
                    desc: "Select \"Credit Card\", \"Internet Banking\", or \"Convenience Store\" via the form. Alternatively, contact us for a direct transfer slip.",
                    purposeCode: "PURPOSE CODE: \"CREATE SUPPORT FUND\""
                },
                rewards: {
                    title: "MISSION REWARDS",
                    standard: {
                        title: "STANDARD ACKNOWLEDGMENT",
                        items: [
                            "- Mission progress updates via secure comms",
                            "- Post-launch mission report",
                            "- Invitation to inspect flight hardware (post-launch)"
                        ]
                    },
                    elite: {
                        title: "ELITE RECOGNITION",
                        items: [
                            "- Invitation to \"Gratitude Gathering\" (All Donors)",
                            "- Name engraved on University Brick (¥300k+ / Corp ¥1M+)",
                            "- Recommendation for Medal with Dark Blue Ribbon (¥5M+ / Corp ¥10M+)"
                        ]
                    }
                }
            }
        },
        topPage: {
            hero: {
                title: "CREATE",
                subtitle: "Student Rocket Project",
                coordinates: "34°43'N 139°24'E",
                status: "OPERATIONAL",
                scroll: "Scroll",
                galleryTitle: "CREATE THE FUTURE",
                gallerySubtitle: "17 YEARS TRAJECTORY"
            },
            ongoing: {
                title: "ONGOING MISSIONS",
                description: "Current active projects and upcoming launch schedules. Pushing the boundaries of student rocketry.",
                stats: {
                    active: "Active Projects",
                    launches: "Total Launches"
                },
                missions: [
                    {
                        name: "C-103J MISSION",
                        time: "MAR 2026",
                        caption: "2025 Freshman Project. Challenging a new separation mechanism."
                    },
                    {
                        name: "C-97J MISSION",
                        time: "AUG 2026",
                        caption: "Equipped with next-gen valve system & custom engine."
                    },
                    {
                        name: "C-101J MISSION",
                        time: "NOV 2026",
                        caption: "Verification of new attitude control system / real-time video transmission."
                    }
                ]
            },
            completed: {
                archiveLabel: "ARCHIVE DATABASE",
                title: "COMPLETED MISSIONS",
                searchPlaceholder: "SEARCH ARCHIVE...",
                tableHeaders: {
                    mission: "MISSION ID",
                    site: "LAUNCH SITE",
                    date: "DATE",
                    status: "STATUS"
                },
                footer: {
                    version: "DATABASE_V2.0",
                    displaying: "DISPLAYING"
                }
            },
            rocket: {
                specsLabel: "TECHNICAL SPECIFICATIONS",
                modelName: "C-83LM",
                codeName: "CODE: KEY-CHAN",
                description: "Equipped with our largest custom engine LM5-i and first-ever reefing mechanism.",
                specs: {
                    altitude: "MAX ALTITUDE",
                    length: "TOTAL LENGTH",
                    mass: "WET MASS"
                },
                status: "OPERATIONAL"
            },
            social: {
                youtubeTitle: "TRANSMISSIONS",
                twitterTitle: "COMMS FEED",
                views: "VIEWS"
            }
        },
        aboutUs: {
            mission: {
                label: "MISSION BRIEFING",
                title: "OUR MISSION",
                description1: "CREATE is the official technical circle of Science Tokyo, dedicated to the development, manufacturing, and launch of hybrid rockets. We are a collective of engineers, designers, and dreamers pushing the boundaries of student rocketry.",
                description2: "From high-altitude trajectory analysis to custom propulsion systems, our members engage in rigorous R&D. We welcome students from all disciplines—Engineering, Science, and Bio-tech—united by a passion for aerospace and innovation."
            },
            team: {
                title: "CREW ROSTER",
                roles: [
                    {
                        name: "STRUCTURE",
                        jpName: "Structure Team",
                        description: "Responsible for airframe mechanics and manufacturing processes.",
                        tasks: ["Release Mechanism", "Parachute", "Nose Cone"]
                    },
                    {
                        name: "AVIONICS",
                        jpName: "Avionics Team",
                        description: "Develops internal electronic circuits and flight software.",
                        tasks: ["Sensors", "Circuit Design", "Embedded Systems"]
                    },
                    {
                        name: "SIMULATION",
                        jpName: "Simulation Team",
                        description: "Conducts flight trajectory analysis with proprietary systems.",
                        tasks: ["Flight Sim", "SPICA", "Mathematical Analysis"]
                    },
                    {
                        name: "PROPULSION",
                        jpName: "Propulsion Team",
                        description: "Manages rocket motor development and ignition systems.",
                        tasks: ["Hybrid Engine", "Ignition System", "Plumbing"]
                    }
                ],
                assignedTasks: "Assigned Tasks"
            },
            protocols: {
                title: "DISCLOSURE PROTOCOLS",
                intro: "Access and utilization of data within this archive implies acceptance of the following terms:",
                items: [
                    {
                        title: "Open Knowledge:",
                        text: "CREATE aims to foster an open environment for technical exchange. Citation and utilization of our public data is encouraged."
                    },
                    {
                        title: "Accuracy Disclaimer:",
                        text: "While we strive for precision, data integrity is not guaranteed."
                    },
                    {
                        title: "Release Schedule:",
                        text: "Project reports are declassified 6 months post-mission completion."
                    },
                    {
                        title: "Liability:",
                        text: "CREATE assumes no responsibility for damages resulting from data usage."
                    }
                ]
            },
            external: {
                label: "EXTERNAL DATABASE",
                linkText: "Public Reports Archive"
            }
        },
        common: {
            readMore: "Read More",
            loading: "Loading..."
        },
        techPage: {
            maintenance: {
                title: "MAINTENANCE",
                description: "We are currently migrating our technical blog system. Please check back later.",
                backToTop: "Back to Top"
            }
        },
        projectsPage: {
            title: "PROJECT ARCHIVE",
            scroll: "SCROLL TO EXPLORE ///",
            archive: "CREATE ARCHIVE 2016-2025",
            categories: {
                all: "ALL",
                rocket: "ROCKET",
                engine: "ENGINE",
                cansat: "CANSAT"
            },
            specs: {
                altitude: "ALTITUDE",
                length: "LENGTH",
                weight: "WEIGHT",
                thrust: "THRUST",
                burnCount: "BURN COUNT",
                status: "STATUS",
                inProgress: "IN PROGRESS",
                terminated: "TERMINATED",
                completed: "COMPLETED"
            }
        }
    }
};

export type Language = 'ja' | 'en';
export type TranslationKey = keyof typeof translations.ja;
