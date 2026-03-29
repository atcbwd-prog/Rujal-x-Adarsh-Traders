import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // auto detect browser language
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // default language

    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translation: {
          home: {
           // badge: "Trusted Textile Partner",
            heroTitle:
              "GLOBAL TEXTILE MACHINERY",
            //heroDesc:
            //  "We supply quality electronic cards, loom spare parts and textile machinery components for weaving and spinning industries.",
            viewProducts: "View Products",
            contactUs: "Contact Us",

            filterTitle: "Deals in all kinds of Pre-owned Textile Machineries Worldwide",
            filterSub:
              "Experienced Machinery – Cost Effective Solution to Your Business",
            searchLabel: "Search your product",
            category: "Category",
            department: "Department",
            make: "Make",
            searchPlaceholder: "Search",
            noProducts: "No products found",
            viewAll: "View All Products",

            aboutTitle: "About Our Company",
            aboutDesc1:
              "We are engaged in supplying textile machinery spare parts, electronic boards, dobby components and loom accessories to textile mills across India and abroad.",
            aboutDesc2:
              "Our focus is on reliability, compatibility and timely support.",

            whyTitle: "Why Choose Us",
            why1: "Quality-tested spare parts",
            why2: "Wide range of loom components",
            why3: "Industry experience & support",
            why4: "Reliable sourcing & supply",

            ctaTitle: "Looking for the right textile spare part?",
            ctaDesc:
              "Get in touch with us for product availability and guidance.",
            talkToUs: "Talk to Us",
          },
          navbar: {
            home: "Home",
            about: "About Us",
            products: "Products",
            services: "Services",
            contact: "Contact",
            dashboard: "Dashboard",
            language: "Language",
          },
          footer: {
            aboutText:
              "Adarsh Trading Company — from machinery trading and consulting to digital transformation — empowering mills to optimize performance and quality.",

            quickLinks: "Quick Links",
            home: "Home",
            about: "About Us",
            products: "Products",
            services: "Services",
            contact: "Contact Us",

            contactInfo: "Contact Info",
            followUs: "Follow Us",

            rights: "All rights reserved.",
          },
          about: {
            heroTitle: "About Adarsh Trading Company",
            heroDesc:
              "GLOBAL TEXTILE MACHINERY",

            whoTitle: "Who We Are",
            whoDesc1:
              "Established in the year 2009 at Bhiwandi, Maharashtra, We Adarsh Trading Company are engaged in offering a wide range of second hand weaving looms. These used weaving looms are sourced from the most trusted vendors of the market. All the machines supplied by us are highly efficient and used in various textile industries for weaving processes. Furthermore, we will check all the spare parts and functions of the looms to ensure only trouble free machines are delivered to the customer end. The used weaving looms can be acquired from us at a comparatively low rate.",
            whoDesc2:
              "Our mission is to empower textile enterprises with sustainable technologies, cost-effective sourcing, and measurable performance improvements — driving long-term growth and global competitiveness.",

            principlesTitle: "Our Guiding Principles",
            missionTitle: "Our Mission",
            missionDesc:
              "To deliver sustainable textile growth by combining technology, expertise, and operational excellence — ensuring long-term value for every client.",
            visionTitle: "Our Vision",
            visionDesc:
              "To be the global leader in textile machinery trading and consulting, known for innovation, reliability, and transformative mill solutions.",
            valuesTitle: "Our Values",
            valuesDesc:
              "Integrity, transparency, and customer focus form the foundation of every partnership we build.",

            expTitle: "Our Experience",
            expDesc:
              "Our core strength lies in our team of textile professionals with over 25 years of hands-on industry experience. We’ve successfully completed more than 2800 projects across 40+ countries — from greenfield setups to modernization programs.",

            exp1: "Comprehensive project consulting and audits",
            exp2: "End-to-end machinery sourcing and installation",
            exp3: "Lean manufacturing and productivity improvements",
            exp4: "After-sales support and technical training",

            globalTitle: "Our Global Presence",
            years: "Years of Experience",
            countries: "Countries Served",
            projects: "Projects Completed",
            clients: "Happy Clients",

            ctaTitle:
              "Partner with Adarsh Trading to Elevate Your Mill’s Performance",
            ctaDesc:
              "Connect with our experts today for machinery sourcing, audits, or digital upgrades.",
            ctaBtn: "Get in Touch",
          },
          products: {
            heroTitle: "Our Products",
            heroDesc:
              "Explore our complete range of textile machinery spare parts and electronic cards.",

            filters: "Filters",
            searchPlaceholder: "Search products...",
            category: "Category",
            brand: "Brand",
            location: "Location",
            clearAll: "Clear all",
            resetAll: "Reset all",

            results: "results",
            enquire: "Enquire",

            page: "Page",
            of: "of",
          },
          services: {
            heroTitle: "Services",
            heroDesc:
              "End-to-end support across the textile value chain—from dismantling and logistics to commissioning and after-sales.",

            label: "Service",
            viewDetails: "View details",

            quote: "Get a Quote",
            backTop: "Back to top",

            ctaTitle: "Planning a relocation or major overhaul?",
            ctaDesc:
              "Talk to our specialists for a phased plan that optimizes cost, safety and downtime.",
            speakExpert: "Speak to an Expert",

            dismantling: "Dismantling",
            commissioning: "Commissioning",
            shipping: "Loading & Shipping",
            station: "Service Station",
            after: "After Sales",
            relocation: "Relocation",
            summaryLabel: "Service",
            viewDetails: "View details",
            getQuote: "Get a Quote",
            backTop: "Back to top",
          },
          contact: {
            heroTitle: "Contact Us",
            heroDesc:
              "Speak with our team about machinery sourcing, audits, relocations, or after-sales support.",

            headOffice: "Head Office",
            phone: "Phone",
            email: "Email",

            formTitle: "Send us a message",
            formDesc: "We'll respond within 1–2 business days.",

            fullName: "Full Name",
            emailField: "Email",
            phoneField: "Phone",
            company: "Company",
            subject: "Subject",
            message: "Message",

            consent:
              "I agree to the processing of my information according to the Privacy Policy",

            send: "Send Message",
            sending: "Sending...",
            success: "Message sent successfully!",
            error: "Could not send message. Try again.",

            quickQuote: "Need a quick quote?",
            quickQuoteDesc:
              "Share your requirement and we’ll respond with availability.",
            backTop: "Back to Top",

            subjects: {
              general: "General Enquiry",
              sourcing: "Machinery Sourcing",
              spares: "After-Sales / Spares",
              relocation: "Relocation / Dismantling",
              consulting: "Consulting / Audit",
            },
          },
        },
      },
      fr: {
        translation: {
          home: {
            badge: "Partenaire textile de confiance",
            heroTitle:
              "Pièces détachées fiables pour machines textiles et solutions électroniques",
            heroDesc:
              "Nous fournissons des cartes électroniques et des composants textiles de haute qualité.",
            viewProducts: "Voir les produits",
            contactUs: "Contactez-nous",
      
            filterTitle: "Machines reconditionnées",
            filterSub:
              "Machines expérimentées – solution économique pour votre entreprise",
            searchLabel: "Recherchez votre produit",
            category: "Catégorie",
            department: "Département",
            make: "Marque",
            searchPlaceholder: "Rechercher",
            noProducts: "Aucun produit trouvé",
            viewAll: "Voir tous les produits",
      
            aboutTitle: "À propos de notre entreprise",
            aboutDesc1:
              "Nous fournissons des pièces détachées pour machines textiles et des composants électroniques aux usines textiles.",
            aboutDesc2:
              "Notre priorité est la fiabilité, la compatibilité et un support rapide.",
      
            whyTitle: "Pourquoi nous choisir",
            why1: "Pièces testées de haute qualité",
            why2: "Large gamme de composants de métier à tisser",
            why3: "Expérience et assistance industrielle",
            why4: "Approvisionnement fiable",
      
            ctaTitle: "Vous recherchez la bonne pièce textile ?",
            ctaDesc:
              "Contactez-nous pour la disponibilité des produits et des conseils.",
            talkToUs: "Parlez-nous",
          },
      
          navbar: {
            home: "Accueil",
            about: "À propos",
            products: "Produits",
            services: "Services",
            contact: "Contact",
            dashboard: "Tableau de bord",
            language: "Langue",
          },
      
          footer: {
            aboutText:
              "Adarsh Trading — du commerce de machines à la transformation digitale — aide les usines à améliorer leurs performances.",
            quickLinks: "Liens rapides",
            home: "Accueil",
            about: "À propos",
            products: "Produits",
            services: "Services",
            contact: "Contact",
            contactInfo: "Informations de contact",
            followUs: "Suivez-nous",
            rights: "Tous droits réservés.",
          },
      
          about: {
            heroTitle: "À propos d’Adarsh Trading Company",
            heroDesc:
              "Offrir une expertise textile mondiale grâce à l’innovation et à l’expérience.",
            whoTitle: "Qui sommes-nous",
            whoDesc1:
              "Fondée en 2009 à Bhiwandi, Adarsh Trading Company fournit une large gamme de métiers à tisser d’occasion.",
            whoDesc2:
              "Notre mission est d’aider les entreprises textiles à croître durablement.",
            principlesTitle: "Nos principes",
            missionTitle: "Notre mission",
            missionDesc:
              "Offrir une croissance textile durable grâce à la technologie et à l’expertise.",
            visionTitle: "Notre vision",
            visionDesc:
              "Devenir leader mondial du commerce de machines textiles.",
            valuesTitle: "Nos valeurs",
            valuesDesc:
              "Intégrité, transparence et orientation client.",
            expTitle: "Notre expérience",
            expDesc:
              "Notre équipe possède plus de 25 ans d’expérience dans l’industrie textile.",
            exp1: "Audit et conseil complets",
            exp2: "Approvisionnement et installation de machines",
            exp3: "Amélioration de la productivité",
            exp4: "Support technique après-vente",
            globalTitle: "Notre présence mondiale",
            years: "Années d’expérience",
            countries: "Pays desservis",
            projects: "Projets réalisés",
            clients: "Clients satisfaits",
            ctaTitle:
              "Associez-vous à Adarsh Trading pour améliorer la performance de votre usine",
            ctaDesc:
              "Contactez nos experts dès aujourd’hui.",
            ctaBtn: "Contactez-nous",
          },
      
          products: {
            heroTitle: "Nos Produits",
            heroDesc:
              "Découvrez notre gamme complète de pièces textiles.",
            filters: "Filtres",
            searchPlaceholder: "Rechercher des produits...",
            category: "Catégorie",
            brand: "Marque",
            location: "Emplacement",
            clearAll: "Effacer",
            resetAll: "Réinitialiser",
            results: "résultats",
            enquire: "Demande",
            page: "Page",
            of: "de",
          },
      
          services: {
            heroTitle: "Services",
            heroDesc:
              "Support complet pour l’industrie textile.",
            label: "Service",
            viewDetails: "Voir les détails",
            quote: "Obtenir un devis",
            backTop: "Retour en haut",
            ctaTitle: "Planifiez-vous une relocalisation ?",
            ctaDesc:
              "Parlez à nos spécialistes pour optimiser les coûts.",
            speakExpert: "Parler à un expert",
            dismantling: "Démantèlement",
            commissioning: "Mise en service",
            shipping: "Chargement & expédition",
            station: "Station de service",
            after: "Après-vente",
            relocation: "Relocalisation",
            summaryLabel: "Service",
            getQuote: "Obtenir un devis",
          },
      
          contact: {
            heroTitle: "Contactez-nous",
            heroDesc:
              "Discutez avec notre équipe pour vos besoins en machines.",
            headOffice: "Siège",
            phone: "Téléphone",
            email: "Email",
            formTitle: "Envoyez-nous un message",
            formDesc: "Nous répondrons sous 1–2 jours.",
            fullName: "Nom complet",
            emailField: "Email",
            phoneField: "Téléphone",
            company: "Entreprise",
            subject: "Sujet",
            message: "Message",
            consent:
              "J’accepte le traitement de mes informations conformément à la politique de confidentialité",
            send: "Envoyer",
            sending: "Envoi...",
            success: "Message envoyé avec succès",
            error: "Impossible d’envoyer le message",
            quickQuote: "Besoin d’un devis rapide ?",
            quickQuoteDesc:
              "Partagez votre besoin et nous répondrons.",
            backTop: "Retour en haut",
            subjects: {
              general: "Demande générale",
              sourcing: "Approvisionnement machines",
              spares: "Après-vente / pièces",
              relocation: "Relocalisation",
              consulting: "Conseil",
            },
          },
        },
      },
      es: {
        translation: {
          home: {
            badge: "Socio textil de confianza",
            heroTitle:
              "Repuestos confiables para maquinaria textil y soluciones electrónicas",
            heroDesc:
              "Suministramos tarjetas electrónicas de calidad, repuestos de telares y componentes de maquinaria textil para industrias de tejido y hilado.",
            viewProducts: "Ver productos",
            contactUs: "Contáctanos",
      
            filterTitle: "Maquinaria reacondicionada",
            filterSub:
              "Maquinaria experimentada – solución rentable para su negocio",
            searchLabel: "Buscar su producto",
            category: "Categoría",
            department: "Departamento",
            make: "Marca",
            searchPlaceholder: "Buscar",
            noProducts: "No se encontraron productos",
            viewAll: "Ver todos los productos",
      
            aboutTitle: "Sobre nuestra empresa",
            aboutDesc1:
              "Nos dedicamos al suministro de repuestos para maquinaria textil, tarjetas electrónicas y accesorios para fábricas textiles en India y en el extranjero.",
            aboutDesc2:
              "Nuestro enfoque está en la fiabilidad, compatibilidad y soporte oportuno.",
      
            whyTitle: "Por qué elegirnos",
            why1: "Repuestos probados de alta calidad",
            why2: "Amplia gama de componentes de telares",
            why3: "Experiencia y soporte industrial",
            why4: "Abastecimiento confiable",
      
            ctaTitle: "¿Busca el repuesto textil adecuado?",
            ctaDesc:
              "Contáctenos para disponibilidad de productos y orientación.",
            talkToUs: "Hablar con nosotros",
          },
      
          navbar: {
            home: "Inicio",
            about: "Sobre nosotros",
            products: "Productos",
            services: "Servicios",
            contact: "Contacto",
            dashboard: "Panel",
            language: "Idioma",
          },
      
          footer: {
            aboutText:
              "Adarsh Trading — desde comercio de maquinaria y consultoría hasta transformación digital — ayudando a las fábricas a optimizar rendimiento y calidad.",
            quickLinks: "Enlaces rápidos",
            home: "Inicio",
            about: "Sobre nosotros",
            products: "Productos",
            services: "Servicios",
            contact: "Contacto",
            contactInfo: "Información de contacto",
            followUs: "Síguenos",
            rights: "Todos los derechos reservados.",
          },
      
          about: {
            heroTitle: "Sobre Adarsh Trading Company",
            heroDesc:
              "Brindando experiencia textil global a través de innovación y excelencia.",
            whoTitle: "Quiénes somos",
            whoDesc1:
              "Establecida en 2009 en Bhiwandi, Maharashtra, Adarsh Trading Company ofrece una amplia gama de telares usados.",
            whoDesc2:
              "Nuestra misión es empoderar a las empresas textiles con tecnologías sostenibles.",
            principlesTitle: "Nuestros principios",
            missionTitle: "Nuestra misión",
            missionDesc:
              "Ofrecer crecimiento textil sostenible combinando tecnología y experiencia.",
            visionTitle: "Nuestra visión",
            visionDesc:
              "Ser líder mundial en comercio de maquinaria textil.",
            valuesTitle: "Nuestros valores",
            valuesDesc:
              "Integridad, transparencia y enfoque en el cliente.",
            expTitle: "Nuestra experiencia",
            expDesc:
              "Nuestro equipo tiene más de 25 años de experiencia en la industria textil.",
            exp1: "Consultoría y auditoría integral",
            exp2: "Suministro e instalación de maquinaria",
            exp3: "Mejora de productividad",
            exp4: "Soporte técnico postventa",
            globalTitle: "Nuestra presencia global",
            years: "Años de experiencia",
            countries: "Países atendidos",
            projects: "Proyectos completados",
            clients: "Clientes satisfechos",
            ctaTitle:
              "Asóciese con Adarsh Trading para mejorar el rendimiento de su fábrica",
            ctaDesc:
              "Contacte a nuestros expertos hoy mismo.",
            ctaBtn: "Contáctanos",
          },
      
          products: {
            heroTitle: "Nuestros productos",
            heroDesc:
              "Explore nuestra gama completa de repuestos textiles y tarjetas electrónicas.",
            filters: "Filtros",
            searchPlaceholder: "Buscar productos...",
            category: "Categoría",
            brand: "Marca",
            location: "Ubicación",
            clearAll: "Limpiar",
            resetAll: "Restablecer",
            results: "resultados",
            enquire: "Consultar",
            page: "Página",
            of: "de",
          },
      
          services: {
            heroTitle: "Servicios",
            heroDesc:
              "Soporte integral en la cadena de valor textil.",
            label: "Servicio",
            viewDetails: "Ver detalles",
            quote: "Solicitar cotización",
            backTop: "Volver arriba",
            ctaTitle: "¿Planea una reubicación o modernización?",
            ctaDesc:
              "Hable con nuestros especialistas para optimizar costos.",
            speakExpert: "Hablar con un experto",
            dismantling: "Desmontaje",
            commissioning: "Puesta en marcha",
            shipping: "Carga y envío",
            station: "Estación de servicio",
            after: "Postventa",
            relocation: "Reubicación",
            summaryLabel: "Servicio",
            getQuote: "Solicitar cotización",
          },
      
          contact: {
            heroTitle: "Contáctanos",
            heroDesc:
              "Hable con nuestro equipo sobre maquinaria o soporte técnico.",
            headOffice: "Oficina principal",
            phone: "Teléfono",
            email: "Correo",
            formTitle: "Envíanos un mensaje",
            formDesc: "Responderemos en 1–2 días hábiles.",
            fullName: "Nombre completo",
            emailField: "Correo",
            phoneField: "Teléfono",
            company: "Empresa",
            subject: "Asunto",
            message: "Mensaje",
            consent:
              "Acepto el procesamiento de mi información según la política de privacidad",
            send: "Enviar mensaje",
            sending: "Enviando...",
            success: "Mensaje enviado correctamente",
            error: "No se pudo enviar el mensaje",
            quickQuote: "¿Necesita una cotización rápida?",
            quickQuoteDesc:
              "Comparta su requerimiento y responderemos pronto.",
            backTop: "Volver arriba",
            subjects: {
              general: "Consulta general",
              sourcing: "Suministro de maquinaria",
              spares: "Postventa / repuestos",
              relocation: "Reubicación",
              consulting: "Consultoría",
            },
          },
        },
      },
      de: {
        translation: {
          home: {
            badge: "Vertrauenswürdiger Textilpartner",
            heroTitle:
              "Zuverlässige Ersatzteile für Textilmaschinen und elektronische Lösungen",
            heroDesc:
              "Wir liefern hochwertige elektronische Karten, Webstuhl-Ersatzteile und Komponenten für Web- und Spinnindustrien.",
            viewProducts: "Produkte ansehen",
            contactUs: "Kontaktieren Sie uns",
      
            filterTitle: "Überholte Maschinen",
            filterSub:
              "Erfahrene Maschinen – kosteneffiziente Lösung für Ihr Unternehmen",
            searchLabel: "Produkt suchen",
            category: "Kategorie",
            department: "Abteilung",
            make: "Marke",
            searchPlaceholder: "Suchen",
            noProducts: "Keine Produkte gefunden",
            viewAll: "Alle Produkte anzeigen",
      
            aboutTitle: "Über unser Unternehmen",
            aboutDesc1:
              "Wir liefern Ersatzteile für Textilmaschinen, elektronische Platinen und Zubehör für Textilfabriken in Indien und weltweit.",
            aboutDesc2:
              "Unser Fokus liegt auf Zuverlässigkeit, Kompatibilität und rechtzeitigem Support.",
      
            whyTitle: "Warum uns wählen",
            why1: "Qualitätsgeprüfte Ersatzteile",
            why2: "Große Auswahl an Webstuhlkomponenten",
            why3: "Branchenerfahrung & Support",
            why4: "Zuverlässige Beschaffung",
      
            ctaTitle: "Suchen Sie das richtige Textilersatzteil?",
            ctaDesc:
              "Kontaktieren Sie uns für Produktverfügbarkeit und Beratung.",
            talkToUs: "Sprechen Sie mit uns",
          },
      
          navbar: {
            home: "Startseite",
            about: "Über uns",
            products: "Produkte",
            services: "Dienstleistungen",
            contact: "Kontakt",
            dashboard: "Dashboard",
            language: "Sprache",
          },
      
          footer: {
            aboutText:
              "Adarsh Trading — von Maschinenhandel und Beratung bis hin zur digitalen Transformation — unterstützt Fabriken bei der Optimierung von Leistung und Qualität.",
            quickLinks: "Schnelllinks",
            home: "Startseite",
            about: "Über uns",
            products: "Produkte",
            services: "Dienstleistungen",
            contact: "Kontakt",
            contactInfo: "Kontaktinformationen",
            followUs: "Folgen Sie uns",
            rights: "Alle Rechte vorbehalten.",
          },
      
          about: {
            heroTitle: "Über Adarsh Trading Company",
            heroDesc:
              "Globale Textilkompetenz durch Innovation und Erfahrung.",
            whoTitle: "Wer wir sind",
            whoDesc1:
              "Gegründet im Jahr 2009 in Bhiwandi, Maharashtra, bietet Adarsh Trading Company eine breite Palette gebrauchter Webstühle an.",
            whoDesc2:
              "Unsere Mission ist es, Textilunternehmen mit nachhaltigen Technologien zu stärken.",
            principlesTitle: "Unsere Leitprinzipien",
            missionTitle: "Unsere Mission",
            missionDesc:
              "Nachhaltiges Wachstum der Textilindustrie durch Technologie und Fachwissen.",
            visionTitle: "Unsere Vision",
            visionDesc:
              "Weltweit führend im Handel mit Textilmaschinen zu sein.",
            valuesTitle: "Unsere Werte",
            valuesDesc:
              "Integrität, Transparenz und Kundenorientierung sind unsere Basis.",
            expTitle: "Unsere Erfahrung",
            expDesc:
              "Unser Team verfügt über mehr als 25 Jahre Erfahrung in der Textilbranche.",
            exp1: "Umfassende Projektberatung und Audits",
            exp2: "Maschinenbeschaffung und Installation",
            exp3: "Produktivitätssteigerung",
            exp4: "Technischer After-Sales-Support",
            globalTitle: "Unsere globale Präsenz",
            years: "Jahre Erfahrung",
            countries: "Bediente Länder",
            projects: "Abgeschlossene Projekte",
            clients: "Zufriedene Kunden",
            ctaTitle:
              "Arbeiten Sie mit Adarsh Trading zusammen, um Ihre Fabrikleistung zu verbessern",
            ctaDesc:
              "Kontaktieren Sie noch heute unsere Experten.",
            ctaBtn: "Kontakt aufnehmen",
          },
      
          products: {
            heroTitle: "Unsere Produkte",
            heroDesc:
              "Entdecken Sie unser komplettes Sortiment an Textilmaschinen-Ersatzteilen und elektronischen Karten.",
            filters: "Filter",
            searchPlaceholder: "Produkte suchen...",
            category: "Kategorie",
            brand: "Marke",
            location: "Standort",
            clearAll: "Alle löschen",
            resetAll: "Zurücksetzen",
            results: "Ergebnisse",
            enquire: "Anfragen",
            page: "Seite",
            of: "von",
          },
      
          services: {
            heroTitle: "Dienstleistungen",
            heroDesc:
              "Umfassende Unterstützung entlang der gesamten textilen Wertschöpfungskette.",
            label: "Service",
            viewDetails: "Details anzeigen",
            quote: "Angebot anfordern",
            backTop: "Nach oben",
            ctaTitle:
              "Planen Sie eine Verlagerung oder größere Modernisierung?",
            ctaDesc:
              "Sprechen Sie mit unseren Spezialisten, um Kosten und Sicherheit zu optimieren.",
            speakExpert: "Mit einem Experten sprechen",
            dismantling: "Demontage",
            commissioning: "Inbetriebnahme",
            shipping: "Verladung & Versand",
            station: "Service-Station",
            after: "After-Sales",
            relocation: "Verlagerung",
            summaryLabel: "Service",
            getQuote: "Angebot anfordern",
          },
      
          contact: {
            heroTitle: "Kontakt",
            heroDesc:
              "Sprechen Sie mit unserem Team über Maschinenbeschaffung oder technischen Support.",
            headOffice: "Hauptsitz",
            phone: "Telefon",
            email: "E-Mail",
            formTitle: "Senden Sie uns eine Nachricht",
            formDesc: "Wir antworten innerhalb von 1–2 Werktagen.",
            fullName: "Vollständiger Name",
            emailField: "E-Mail",
            phoneField: "Telefon",
            company: "Firma",
            subject: "Betreff",
            message: "Nachricht",
            consent:
              "Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzrichtlinie zu",
            send: "Nachricht senden",
            sending: "Wird gesendet...",
            success: "Nachricht erfolgreich gesendet",
            error: "Nachricht konnte nicht gesendet werden",
            quickQuote: "Benötigen Sie ein schnelles Angebot?",
            quickQuoteDesc:
              "Teilen Sie uns Ihre Anforderungen mit – wir antworten schnell.",
            backTop: "Nach oben",
            subjects: {
              general: "Allgemeine Anfrage",
              sourcing: "Maschinenbeschaffung",
              spares: "After-Sales / Ersatzteile",
              relocation: "Verlagerung",
              consulting: "Beratung",
            },
          },
        },
      },

      hi: {
        translation: {
          home: {
            badge: "विश्वसनीय टेक्सटाइल पार्टनर",
            heroTitle:
              "विश्वसनीय टेक्सटाइल मशीनरी स्पेयर पार्ट्स और इलेक्ट्रॉनिक समाधान",
            heroDesc:
              "हम बुनाई और स्पिनिंग उद्योगों के लिए उच्च गुणवत्ता वाले इलेक्ट्रॉनिक कार्ड और मशीनरी पार्ट्स प्रदान करते हैं.",
            viewProducts: "प्रोडक्ट देखें",
            contactUs: "संपर्क करें",

            filterTitle: "रीफर्बिश्ड मशीनरी",
            filterSub: "आपके व्यवसाय के लिए किफायती समाधान",
            searchLabel: "अपना प्रोडक्ट खोजें",
            category: "कैटेगरी",
            department: "डिपार्टमेंट",
            make: "ब्रांड",
            searchPlaceholder: "खोजें",
            noProducts: "कोई प्रोडक्ट नहीं मिला",
            viewAll: "सभी प्रोडक्ट देखें",

            aboutTitle: "हमारे बारे में",
            aboutDesc1:
              "हम टेक्सटाइल मिलों के लिए मशीनरी स्पेयर पार्ट्स और इलेक्ट्रॉनिक बोर्ड की आपूर्ति करते हैं.",
            aboutDesc2: "हमारा फोकस विश्वसनीयता और समय पर सहायता पर है.",

            whyTitle: "हमें क्यों चुनें",
            why1: "क्वालिटी टेस्टेड पार्ट्स",
            why2: "लूम कंपोनेंट्स की विस्तृत रेंज",
            why3: "इंडस्ट्री अनुभव",
            why4: "विश्वसनीय सप्लाई",

            ctaTitle: "क्या आप सही टेक्सटाइल पार्ट ढूंढ रहे हैं?",
            ctaDesc: "उपलब्धता और मार्गदर्शन के लिए हमसे संपर्क करें.",
            talkToUs: "हमसे बात करें",
          },
          navbar: {
            home: "होम",
            about: "हमारे बारे में",
            products: "प्रोडक्ट",
            services: "सेवाएं",
            contact: "संपर्क",
            dashboard: "डैशबोर्ड",
            language: "भाषा",
          },
          footer: {
            aboutText:
              "आदर्श ट्रेडिंग — मशीनरी ट्रेडिंग और कंसल्टिंग से लेकर डिजिटल ट्रांसफॉर्मेशन तक — मिलों को प्रदर्शन और गुणवत्ता बेहतर करने में सहायता करता है.",

            quickLinks: "त्वरित लिंक",
            home: "होम",
            about: "हमारे बारे में",
            products: "प्रोडक्ट",
            services: "सेवाएं",
            contact: "संपर्क",

            contactInfo: "संपर्क जानकारी",
            followUs: "हमें फॉलो करें",

            rights: "सर्वाधिकार सुरक्षित.",
          },
          about: {
            heroTitle: "आदर्श ट्रेडिंग कंपनी के बारे में",
            heroDesc:
              "नवाचार, अनुभव और उत्कृष्टता के माध्यम से वैश्विक टेक्सटाइल विशेषज्ञता प्रदान करना।",

            whoTitle: "हम कौन हैं",
            whoDesc1:
              "वर्ष 2009 में भिवंडी, महाराष्ट्र में स्थापित, आदर्श ट्रेडिंग कंपनी सेकंड हैंड वीविंग लूम्स की विस्तृत रेंज प्रदान करती है। ये मशीनें विश्वसनीय विक्रेताओं से प्राप्त की जाती हैं और विभिन्न टेक्सटाइल उद्योगों में उपयोग होती हैं। हम सभी स्पेयर पार्ट्स और मशीन फंक्शन की जांच करते हैं ताकि ग्राहकों को परेशानी मुक्त मशीनें मिलें।",
            whoDesc2:
              "हमारा मिशन टेक्सटाइल उद्योगों को टिकाऊ तकनीक, किफायती सोर्सिंग और बेहतर प्रदर्शन के माध्यम से सशक्त बनाना है।",

            principlesTitle: "हमारे मार्गदर्शक सिद्धांत",
            missionTitle: "हमारा मिशन",
            missionDesc:
              "तकनीक और विशेषज्ञता के संयोजन से टेक्सटाइल उद्योग को दीर्घकालिक विकास प्रदान करना।",
            visionTitle: "हमारी दृष्टि",
            visionDesc:
              "नवाचार और विश्वसनीयता के साथ टेक्सटाइल मशीनरी ट्रेडिंग में वैश्विक नेता बनना।",
            valuesTitle: "हमारे मूल्य",
            valuesDesc:
              "ईमानदारी, पारदर्शिता और ग्राहक संतुष्टि हमारे हर सहयोग की नींव है।",

            expTitle: "हमारा अनुभव",
            expDesc:
              "हमारी टीम के पास 25 वर्षों से अधिक का टेक्सटाइल उद्योग अनुभव है और हमने 40+ देशों में 2800 से अधिक प्रोजेक्ट पूरे किए हैं।",

            exp1: "पूर्ण प्रोजेक्ट कंसल्टिंग और ऑडिट",
            exp2: "मशीनरी सोर्सिंग और इंस्टॉलेशन",
            exp3: "उत्पादन दक्षता में सुधार",
            exp4: "बिक्री के बाद तकनीकी सहायता",

            globalTitle: "हमारी वैश्विक उपस्थिति",
            years: "अनुभव के वर्ष",
            countries: "सेवित देश",
            projects: "पूर्ण प्रोजेक्ट",
            clients: "संतुष्ट ग्राहक",

            ctaTitle:
              "अपने मिल के प्रदर्शन को बेहतर बनाने के लिए आदर्श ट्रेडिंग के साथ साझेदारी करें",
            ctaDesc:
              "मशीनरी सोर्सिंग या तकनीकी मार्गदर्शन के लिए आज ही हमारे विशेषज्ञों से संपर्क करें।",
            ctaBtn: "संपर्क करें",
          },
          products: {
            heroTitle: "हमारे प्रोडक्ट",
            heroDesc:
              "हमारी टेक्सटाइल मशीनरी स्पेयर पार्ट्स और इलेक्ट्रॉनिक कार्ड की पूरी रेंज देखें।",

            filters: "फिल्टर",
            searchPlaceholder: "प्रोडक्ट खोजें...",
            category: "कैटेगरी",
            brand: "ब्रांड",
            location: "लोकेशन",
            clearAll: "साफ करें",
            resetAll: "रीसेट करें",

            results: "परिणाम",
            enquire: "पूछताछ करें",

            page: "पेज",
            of: "का",
          },
          services: {
            heroTitle: "सेवाएं",
            heroDesc:
              "टेक्सटाइल उद्योग के लिए डिस्मेंटलिंग से लेकर कमीशनिंग और आफ्टर सेल्स तक पूर्ण सहायता।",

            label: "सेवा",
            viewDetails: "विवरण देखें",

            quote: "कोटेशन प्राप्त करें",
            backTop: "ऊपर जाएं",

            ctaTitle:
              "क्या आप फैक्ट्री स्थानांतरण या बड़े ओवरहॉल की योजना बना रहे हैं?",
            ctaDesc:
              "लागत और सुरक्षा को बेहतर बनाने के लिए हमारे विशेषज्ञों से संपर्क करें।",
            speakExpert: "विशेषज्ञ से बात करें",

            dismantling: "डिस्मेंटलिंग",
            commissioning: "कमीशनिंग",
            shipping: "लोडिंग और शिपिंग",
            station: "सर्विस स्टेशन",
            after: "आफ्टर सेल्स",
            relocation: "रिलोकेशन",
            summaryLabel: "सेवा",
            viewDetails: "विवरण देखें",
            getQuote: "कोटेशन प्राप्त करें",
            backTop: "ऊपर जाएं",
          },
          contact: {
            heroTitle: "संपर्क करें",
            heroDesc:
              "मशीनरी सोर्सिंग, ऑडिट, रिलोकेशन या आफ्टर सेल्स सपोर्ट के लिए हमारी टीम से बात करें।",

            headOffice: "मुख्य कार्यालय",
            phone: "फोन",
            email: "ईमेल",

            formTitle: "हमें संदेश भेजें",
            formDesc: "हम 1–2 कार्य दिवसों में जवाब देंगे।",

            fullName: "पूरा नाम",
            emailField: "ईमेल",
            phoneField: "फोन",
            company: "कंपनी",
            subject: "विषय",
            message: "संदेश",

            consent:
              "मैं अपनी जानकारी के उपयोग के लिए सहमत हूँ (प्राइवेसी पॉलिसी के अनुसार)",

            send: "संदेश भेजें",
            sending: "भेजा जा रहा है...",
            success: "संदेश सफलतापूर्वक भेजा गया!",
            error: "संदेश भेजा नहीं जा सका। पुनः प्रयास करें।",

            quickQuote: "क्या आपको तुरंत कोटेशन चाहिए?",
            quickQuoteDesc:
              "अपनी आवश्यकता साझा करें — हम उपलब्धता के साथ उत्तर देंगे।",
            backTop: "ऊपर जाएं",

            subjects: {
              general: "सामान्य पूछताछ",
              sourcing: "मशीनरी सोर्सिंग",
              spares: "आफ्टर सेल्स / स्पेयर",
              relocation: "रिलोकेशन / डिस्मेंटलिंग",
              consulting: "कंसल्टिंग / ऑडिट",
            },
          },
        },
      },
    },
  });

export default i18n;
