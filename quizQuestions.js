// quizQuestions.js
// This file contains the complete quiz data, updated to match the “Examen en blanc 2025” PDF exactly.

const allQuizData = [
  // Page 1 (Q1–10)
  {
    qNum: 1,
    text: {
      fr:
        "L’utilisation des indices de persuasion est plus efficace lorsque l’interlocuteur est fatigué.",
      en:
        "The use of persuasive cues is more effective when the interlocutor is tired."
    },
    answer: 'true'
  },
  {
    qNum: 2,
    text: {
      fr:
        "Le biais rétrospectif s’explique par le fait que les individus surestiment rétrospectivement l’apparition d’un événement une fois que l’événement est survenu.",
      en:
        "Hindsight bias is explained by the fact that individuals retrospectively overestimate the occurrence of an event once it has taken place."
    },
    answer: 'false'
  },
  {
    qNum: 3,
    text: {
      fr:
        "Une des principales caractéristiques de la méthode scientifique est que les résultats d’une étude ne doivent pas être falsifiables.",
      en:
        "One of the main characteristics of the scientific method is that the results of a study should not be falsifiable."
    },
    answer: 'false'
  },
  {
    qNum: 4,
    text: {
      fr:
        "La diffusion de la responsabilité survient fréquemment dans les structures holacratiques.",
      en:
        "Diffusion of responsibility frequently occurs in holacratic structures."
    },
    answer: 'true'
  },
  {
    qNum: 5,
    text: {
      fr:
        "Avoir un comportement de dominance permet d’influencer autrui et ce type de pouvoir s’appelle pouvoir légitime.",
      en:
        "Dominant behavior allows one to influence others, and this type of power is called legitimate power."
    },
    answer: 'false'
  },
  {
    qNum: 6,
    text: {
      fr:
        "Les deux éléments essentiels qui composent les théories comportementales du leadership sont la production de l’employé et sa considération.",
      en:
        "The two essential elements in behavioral leadership theories are employee production and employee consideration."
    },
    answer: 'false'
  },
  {
    qNum: 7,
    text: {
      fr:
        "Au sein d’une entreprise, une hiérarchie stable favorise la performance du groupe dans toutes les situations.",
      en:
        "Within a company, a stable hierarchy promotes group performance in all situations."
    },
    answer: 'false'
  },
  {
    qNum: 8,
    text: {
      fr:
        "Si votre supérieur vous offre un bonus de fin d’année pour votre excellente performance, on dira qu’il a un pouvoir légitime.",
      en:
        "If your superior offers you a year-end bonus for your excellent performance, we would say he has legitimate power."
    },
    answer: 'false'
  },
  {
    qNum: 9,
    text: {
      fr:
        "La renaissance des théories des traits de personnalité dans les années 2000 n’a été possible que grâce au développement d’une nouvelle technique statistique, la méta-analyse.",
      en:
        "The resurgence of personality trait theories in the 2000s was only made possible by the development of the meta-analysis technique."
    },
    answer: 'false'
  },
  {
    qNum: 10,
    text: {
      fr:
        "Les dirigeants peuvent être à la fois orientés vers les tâches et vers les personnes. Ces deux catégories ne s’excluent pas mutuellement et il est donc possible d’être à la fois l’un et l’autre.",
      en:
        "Leaders can be both task-oriented and people-oriented. These two categories are not mutually exclusive, so it is possible to be both."
    },
    answer: 'true'
  },

  // Page 2 (Q11–20)
  {
    qNum: 11,
    text: {
      fr:
        "Vous êtes à la tête d’un groupe de travail qui cherche des solutions pour le réchauffement climatique. Vous proposez à vos collègues de faire une activité afin de remettre en question les stratégies précédemment utilisées. En faisant cela, vous utilisez un style de leadership transformationnel basé sur la stimulation intellectuelle.",
      en:
        "You are leading a task force looking for solutions to global warming. You suggest your colleagues carry out an activity to challenge previously used strategies. In doing so, you use a transformational leadership style based on intellectual stimulation."
    },
    answer: 'true'
  },
  {
    qNum: 12,
    text: {
      fr:
        "Un leader qui montre de l’optimisme et de l’enthousiasme peut être catégorisé comme utilisant l’influence idéalisée du leadership transformationnel.",
      en:
        "A leader who shows optimism and enthusiasm can be categorized as using the idealized influence of transformational leadership."
    },
    answer: 'false'
  },
  {
    qNum: 13,
    text: {
      fr:
        "Un style de leadership laisser-faire est moins efficace qu’un style de leadership transactionnel actif.",
      en:
        "A laissez-faire leadership style is less effective than an active transactional leadership style."
    },
    answer: 'true'
  },
  {
    qNum: 14,
    text: {
      fr:
        "La validité incrémentielle permet d’améliorer la prédiction des performances du leader.",
      en:
        "Incremental validity improves the prediction of a leader’s performance."
    },
    answer: 'false'
  },
  {
    qNum: 15,
    text: {
      fr:
        "Une leader qui formule une stratégie claire, visionnaire, et dont les objectifs sont ambitieux fait preuve d’un leadership transformationnel.",
      en:
        "A leader who formulates a clear, visionary strategy with ambitious goals demonstrates transformational leadership."
    },
    answer: 'false'
  },
  {
    qNum: 16,
    text: {
      fr:
        "Le leadership instrumental nécessite une attention particulière à l’environnement et aux résultats des subordonnés.",
      en:
        "Instrumental leadership requires close attention to the environment and subordinates’ outcomes."
    },
    answer: 'true'
  },
  {
    qNum: 17,
    text: {
      fr:
        "Le leadership instrumental n’ajoute pas de validité supplémentaire au lien entre le leadership transformationnel et les performances du dirigeant.",
      en:
        "Instrumental leadership does not add incremental validity to the link between transformational leadership and leader performance."
    },
    answer: 'false'
  },
  {
    qNum: 18,
    text: {
      fr:
        "L’efficacité d’un leader est plus élevée lorsqu’il utilise les récompenses contingentes comparé à un style de leadership transformationnel.",
      en:
        "A leader’s effectiveness is higher when using contingent rewards compared to a transformational leadership style."
    },
    answer: 'false'
  },
  {
    qNum: 19,
    text: {
      fr:
        "Lors de l’évaluation des performances d’un leader, il est toujours préférable d’utiliser une évaluation objective plutôt qu’une évaluation subjective.",
      en:
        "When evaluating a leader’s performance, it is always preferable to use an objective assessment rather than a subjective one."
    },
    answer: 'false'
  },
  {
    qNum: 20,
    text: {
      fr:
        "Quand un leader dit : « Si vous gagnez ce client, je vais vous donner la responsabilité du projet… », il utilise les récompenses contingentes dans son style de leadership.",
      en:
        "When a leader says, “If you win this client, I will give you responsibility for the project…,” he is using contingent rewards in his leadership style."
    },
    answer: 'true'
  },

  // Page 3 (Q21–30)
  {
    qNum: 21,
    text: {
      fr:
        "« Je pense que, je pense que, pardon mais euh…, sur le sujet des engrais, l'approche qu'on a, et j'entends ce que vous dites et c'est très juste… » Ceci est un exemple du doute selon le langage impuissant.",
      en:
        "\"I think that, I think that, sorry but um…, on the subject of fertilizers, our approach, and I hear what you’re saying and it’s very true…\" This is an example of doubt in powerless language."
    },
    answer: 'false'
  },
  {
    qNum: 22,
    text: {
      fr:
        "« Si l'on recherche un peu plus d'information, on pourrait peut-être y arriver même si je ne suis pas certain du résultat. » Ceci est un exemple de clause de non-responsabilité selon le langage impuissant.",
      en:
        "\"If we look for a bit more information, we might get there even if I’m not sure of the result.\" This is an example of a disclaimer in powerless language."
    },
    answer: 'true'
  },
  {
    qNum: 23,
    text: {
      fr:
        "Le modèle interactionnel de la communication permet d'expliquer que certaines blagues ne produisent pas du rire chez tous les spectateurs, surtout chez ceux dont l'origine n'est pas similaire à celle de l'oratrice.",
      en:
        "The interactional model of communication explains why some jokes don’t produce laughter in all spectators, especially those whose background isn’t similar to the speaker’s."
    },
    answer: 'false'
  },
  {
    qNum: 24,
    text: {
      fr:
        "Les leaders à succès passent une proportion de leur temps plus grande à prendre des décisions que les leaders ayant le moins de succès.",
      en:
        "Successful leaders spend a larger proportion of their time making decisions than less successful leaders."
    },
    answer: 'true'
  },
  {
    qNum: 25,
    text: {
      fr:
        "Dans une culture à forte contextualisation, un même énoncé a besoin d'indices supplémentaires pour être compris par le récepteur.",
      en:
        "In a high-context culture, the same statement needs additional cues to be understood by the receiver."
    },
    answer: 'true'
  },
  {
    qNum: 26,
    text: {
      fr:
        "« Pour améliorer le quotidien de nombreuses personnes dans le besoin, il faut mettre en place des mesures drastiques. Il faut améliorer la quantité de ressources allouées à cette problématique. Il faut aussi sensibiliser la population et favoriser l'intégration de ces personnes. » Ceci est un exemple de répétition.",
      en:
        "\"To improve the daily lives of many people in need, drastic measures must be put in place. We need to increase the quantity of resources allocated to this issue. We must also raise awareness and promote integration of these people.\" This is an example of repetition."
    },
    answer: 'false'
  },
  {
    qNum: 27,
    text: {
      fr:
        "« Souvenez-vous, souvenez-vous du 5 novembre, de la poudre à canon, des trahisons et conspirations. » Ceci est un exemple d'anecdote.",
      en:
        "\"Remember, remember the 5th of November, gunpowder, treason and plot.\" This is an example of an anecdote."
    },
    answer: 'false'
  },
  {
    qNum: 28,
    text: {
      fr:
        "« Lors de mes voyages au travers des Caraïbes, j'ai rencontré des populations qui n'avaient que très peu de ressources. Pourtant, ces populations parviennent à survivre. Ce n'est pas la quantité qui permet de se développer, mais l'efficience dans l'utilisation des ressources. Si eux y sont arrivés, nous y arriverons aussi. » Ceci est un exemple de confiance vis-à-vis des objectifs.",
      en:
        "\"During my travels across the Caribbean, I met populations with very few resources. Yet those populations manage to survive. It’s not quantity that enables development but efficiency in resource usage. If they succeeded, we can too.\" This is an example of confidence in objectives."
    },
    answer: 'true'
  },
  {
    qNum: 29,
    text: {
      fr:
        "Les suiveurs adoptent la vision du leader dans le cadre d'un leadership charismatique ou transformationnel.",
      en:
        "Followers adopt the leader’s vision under both charismatic and transformational leadership."
    },
    answer: 'true'
  },
  {
    qNum: 30,
    text: {
      fr:
        "Lors de la structuration d'un discours, l'introduction doit comprendre un “appel à l'action”.",
      en:
        "When structuring a speech, the introduction should include a “call to action.”"
    },
    answer: 'false'
  },

  // Page 4 (Q31–40)
  {
    qNum: 31,
    text: {
      fr:
        "Demander une grande faveur puis demander une plus petite faveur est un exemple de la technique du pied dans la porte.",
      en:
        "Asking for a large favor and then requesting a smaller one is an example of the foot-in-the-door technique."
    },
    answer: 'false'
  },
  {
    qNum: 32,
    text: {
      fr:
        "Un employé vient d'apprendre que son département informatique lui fournira un ordinateur pour ses tâches administratives. Il a le choix entre trois modèles dont l'un est recommandé par le département pour sa facilité d'utilisation. Il décide de choisir cet ordinateur sur la base de cette recommandation. L'employé a utilisé une heuristique pour faire son choix.",
      en:
        "An employee just learned that his IT department will provide him with a computer for administrative tasks. He has a choice of three models, one of which is recommended by the department for its ease of use. He chooses that computer based on the department’s recommendation. The employee used a heuristic to make his decision."
    },
    answer: 'true'
  },
  {
    qNum: 33,
    text: {
      fr:
        "Flatter un individu augmente sa propension à coopérer grâce au mécanisme de la voie centrale.",
      en:
        "Flattering an individual increases their propensity to cooperate via the central route of persuasion."
    },
    answer: 'false'
  },
  {
    qNum: 34,
    text: {
      fr:
        "Pour des thématiques qui vous sont importantes, la qualité des arguments est un facteur qui va influencer votre manière de penser.",
      en:
        "For topics that are important to you, argument quality is a factor that will influence your thinking."
    },
    answer: 'true'
  },
  {
    qNum: 35,
    text: {
      fr:
        "Les sites de vente en ligne utilisant une politique de premier arrivé-premier servi utilisent le principe de persuasion du côté unique du produit.",
      en:
        "First-come, first-served online retailers use the principle of product uniqueness to persuade customers to buy."
    },
    answer: 'false'
  },
  {
    qNum: 36,
    text: {
      fr:
        "La technique de persuasion du pied dans la porte se base sur le principe de réciprocité.",
      en:
        "The foot-in-the-door persuasion technique is based on the principle of reciprocity."
    },
    answer: 'false'
  },
  {
    qNum: 37,
    text: {
      fr:
        "Selon le modèle de probabilité d'élaboration, la voie centrale de persuasion est utilisée lorsque les individus ne sont pas motivés ou ne sont pas en mesure de comprendre.",
      en:
        "According to the Elaboration Likelihood Model, the central route of persuasion is used when individuals are motivated and able to process the message. (If they’re not, the peripheral route is used.)"
    },
    answer: 'false'
  },
  {
    qNum: 38,
    text: {
      fr:
        "Selon les principes de la persuasion, la preuve par la masse se base sur les effets de l'obéissance.",
      en:
        "According to persuasion principles, social proof is based on normative influences, not obedience."
    },
    answer: 'false'
  },
  {
    qNum: 39,
    text: {
      fr:
        "Le pouvoir d'autorité est une heuristique de persuasion.",
      en:
        "Authority power is a heuristic of persuasion."
    },
    answer: 'false'
  },
  {
    qNum: 40,
    text: {
      fr:
        "Un style de leadership authentique est en général plus efficace que les autres styles de leadership vu en cours.",
      en:
        "An authentic leadership style is generally more effective than other leadership styles discussed in class."
    },
    answer: 'false'
  },

  // Page 5 (Q41–50)
  {
    qNum: 41,
    text: {
      fr:
        "L’évaluation défavorable dans un feedback est facilement acceptée lorsque les subordonnés choisissent le candidat.",
      en:
        "Unfavorable feedback is more readily accepted when subordinates choose the candidate."
    },
    answer: 'false'
  },
  {
    qNum: 42,
    text: {
      fr:
        "Le « management by objectives » récompense et sanctionne l'avancée des collaborateurs vers l'objectif.",
      en:
        "\"Management by Objectives\" rewards and sanctions employees’ progress toward goals."
    },
    answer: 'true'
  },
  {
    qNum: 43,
    text: {
      fr:
        "Afin de faciliter un entretien de feedback, on proposera aux collaborateurs d'agender la réunion en amont afin de lui fournir du temps pour se préparer.",
      en:
        "To facilitate a feedback interview, we suggest employees schedule the meeting in advance so they have time to prepare."
    },
    answer: 'true'
  },
  {
    qNum: 44,
    text: {
      fr:
        "La conscience de soi n'existe que chez l'homme et n'est pas possible chez les animaux.",
      en:
        "Self-awareness only exists in humans and is not possible in animals."
    },
    answer: 'false'
  },
  {
    qNum: 45,
    text: {
      fr:
        "Pour un feedback à 360 degrés, le contenu du questionnaire que vous remplissez à votre sujet doit contenir des questions différentes de celles posées aux personnes qui vous évaluent.",
      en:
        "For 360-degree feedback, the questionnaire you fill out about yourself must contain different questions than those asked to people evaluating you."
    },
    answer: 'false'
  },
  {
    qNum: 46,
    text: {
      fr:
        "Dans le cas d'un feedback à 360 degrés, le candidat choisit généralement la personne qui l'évalue.",
      en:
        "In the case of 360-degree feedback, the candidate typically chooses who evaluates them."
    },
    answer: 'true'
  },
  {
    qNum: 47,
    text: {
      fr:
        "L'entretien annuel de collaboration est souvent plus négatif que ce que pensent réellement les supérieurs.",
      en:
        "Annual performance reviews are often more negative than what supervisors actually think."
    },
    answer: 'false'
  },
  {
    qNum: 48,
    text: {
      fr:
        "Lorsque vous donnez un feedback négatif, il est bon de se concentrer sur les intentions de la personne plutôt que sur son comportement.",
      en:
        "When giving negative feedback, it’s better to focus on the person’s intentions rather than their behavior."
    },
    answer: 'false'
  },
  {
    qNum: 49,
    text: {
      fr:
        "C'est le niveau de stress subjectif qui détermine les conséquences négatives, et non le stress objectif.",
      en:
        "It is subjective stress levels that determine negative consequences, not objective stress."
    },
    answer: 'true'
  },
  {
    qNum: 50,
    text: {
      fr:
        "Une employée vient d'être embauchée dans une entreprise. Elle fait face à une charge de travail importante pour laquelle elle n'est pas encore totalement préparée. Elle a l'impression qu'elle gère la situation et n'est pas impactée par la charge de travail. Cette employée ressent donc un stress objectif, mais pas subjectif.",
      en:
        "An employee was just hired. She faces a heavy workload for which she’s not yet prepared. She feels she’s handling it and is not affected by the workload. Therefore, she experiences objective stress but not subjective stress."
    },
    answer: 'false'
  },

  // Page 6 (Q51–60)
  {
    qNum: 51,
    text: {
      fr:
        "Le grit est une compétence qui se développe au cours du temps et permet aux leaders de devenir plus charismatiques si c'est un de leurs buts.",
      en:
        "Grit is a skill that develops over time and allows leaders to become more charismatic if it’s one of their goals."
    },
    answer: 'true'
  },
  {
    qNum: 52,
    text: {
      fr:
        "Considérer que l'apprentissage est une composante essentielle de la progression favorise le développement du grit chez les leaders.",
      en:
        "Believing that learning is essential to progress fosters development of grit in leaders."
    },
    answer: 'true'
  },
  {
    qNum: 53,
    text: {
      fr:
        "Dans des hiérarchies stables, des études montrent que les leaders ressentent moins de stress que les non-leaders et que leurs niveaux de stress physiologique, tels que l'hormone cortisol, sont moins élevés.",
      en:
        "In stable hierarchies, studies show that leaders feel less stress than non-leaders and have lower physiological stress levels (e.g., cortisol)."
    },
    answer: 'true'
  },
  {
    qNum: 54,
    text: {
      fr:
        "Il existe une corrélation entre le « Grit » et l'intelligence.",
      en:
        "There is a correlation between grit and intelligence."
    },
    answer: 'false'
  },
  {
    qNum: 55,
    text: {
      fr:
        "Un orateur qui voit un modèle du même sexe augmentera son temps de parole. Cela est vrai pour les hommes comme pour les femmes.",
      en:
        "A speaker who sees a same-gender role model will increase their speaking time. This is true for both men and women."
    },
    answer: 'false'
  },
  {
    qNum: 56,
    text: {
      fr:
        "Le self-leadership est une composante du leadership charismatique, car elle permet au leader de motiver les subordonnés.",
      en:
        "Self-leadership is a component of charismatic leadership because it helps the leader motivate subordinates."
    },
    answer: 'false'
  },
  {
    qNum: 57,
    text: {
      fr:
        "Si un individu parvient à reconnaître correctement les traits et états d’autrui, on peut dire qu’il a de la sensibilité interpersonnelle.",
      en:
        "If an individual correctly recognizes others’ traits and states, we say they have interpersonal sensitivity."
    },
    answer: 'true'
  },
  {
    qNum: 58,
    text: {
      fr:
        "Une personne qui parle plus vite, a une voix plus grave, et fait plus d’interruptions est perçue comme quelqu’un avec plus de pouvoir.",
      en:
        "A person who speaks faster, has a deeper voice, and interrupts more is perceived as having more power."
    },
    answer: 'true'
  },
  {
    qNum: 59,
    text: {
      fr:
        "Lors d’une réunion de travail dans votre nouvelle équipe, vous observez qu’une collègue a des contacts visuels fréquents avec les autres participants. D’ailleurs, lorsqu’elle parle, sa voix n’est pas du tout monotone. Vous en concluez qu’elle a du pouvoir dans l’équipe. Vous avez fait preuve de sensibilité interpersonnelle.",
      en:
        "During a team meeting, you notice a colleague making frequent eye contact and using a non-monotone voice. You conclude she has power in the team. That demonstrates interpersonal sensitivity."
    },
    answer: 'false'
  },
  {
    qNum: 60,
    text: {
      fr:
        "L’attractivité, la taille, la voix et la marque des vêtements portés sont utilisés comme indices de statut.",
      en:
        "Attractiveness, size, voice, and brand of clothing worn are used as status indicators."
    },
    answer: 'false'
  },

  // Page 7 (Q61–70)
  {
    qNum: 61,
    text: {
      fr:
        "Selon le modèle de lentille de Brunswick (1956), les premières impressions sont généralement correctes.",
      en:
        "According to Brunswick’s lens model (1956), first impressions are generally accurate."
    },
    answer: 'false'
  },
  {
    qNum: 62,
    text: {
      fr:
        "La tâche de perception interpersonnelle (IPT) et la tâche WIPS sont des tests de performance utilisés pour mesurer le niveau de sensibilité interpersonnelle d'un individu.",
      en:
        "The Interpersonal Perception Task (IPT) and the WIPS task are performance tests used to measure an individual’s level of interpersonal sensitivity."
    },
    answer: 'true'
  },
  {
    qNum: 63,
    text: {
      fr:
        "Selon la théorie des attentes de statut (EST), les attentes concernant la contribution de chaque membre du groupe peuvent créer une prophétie auto-réalisatrice.",
      en:
        "According to Expectation States Theory (EST), expectations about each group member’s contribution can create a self-fulfilling prophecy."
    },
    answer: 'true'
  },
  {
    qNum: 64,
    text: {
      fr:
        "Selon la théorie des attentes de statut (EST), les groupes homogènes forment des hiérarchies en fonction d'indices de statut externes.",
      en:
        "According to EST, homogeneous groups form hierarchies based on external status cues."
    },
    answer: 'false'
  },
  {
    qNum: 65,
    text: {
      fr:
        "Dans un groupe de personnes qui ne se connaissent pas, chaque personne reçoit aléatoirement une casquette avec un trait de personnalité marqué sur la casquette (p.ex. timide, maladroit). Les personnes ne connaissent pas le trait qui est marqué sur leur casquette, mais les autres membres du groupe le voient. Les traits de personnalité marqués sur les casquettes vont amener les membres du groupe à avoir des attentes différentes concernant le comportement de chaque membre du groupe.",
      en:
        "In a group of strangers, each person is randomly given a cap with a personality trait (e.g. shy, awkward). They don’t know their own trait, but the others do. Those traits cause group members to have different expectations about each member’s behavior."
    },
    answer: 'true'
  },
  {
    qNum: 66,
    text: {
      fr:
        "En réalisant un entretien structuré, c’est-à-dire qui respecte la même structure, quels que soient les candidats, on minimise les probabilités d’apparition de biais implicites.",
      en:
        "By conducting a structured interview—using the same structure for every candidate—we minimize the likelihood of implicit bias."
    },
    answer: 'true'
  },
  {
    qNum: 67,
    text: {
      fr:
        "Le racisme est un problème majeur qui s’explique par l’effet d’homogénéisation. Les personnes racistes pensent de la même manière et leur perception de l’exogroupe est homogène.",
      en:
        "Racism is a major problem caused by the homogenization effect. Racist people think similarly and perceive the out-group as homogeneous."
    },
    answer: 'false'
  },
  {
    qNum: 68,
    text: {
      fr:
        "Une perception réduite de la variabilité exogroupe limite le chevauchement réel entre la variabilité exogroupe et endogroupe.",
      en:
        "A reduced perception of out-group variability limits the actual overlap between in-group and out-group variability."
    },
    answer: 'true'
  },
  {
    qNum: 69,
    text: {
      fr:
        "La valence des caractéristiques de l’endogroupe est négative.",
      en:
        "The valence of in-group characteristics is negative."
    },
    answer: 'false'
  },
  {
    qNum: 70,
    text: {
      fr:
        "Un stéréotype est différent d’un préjugé car les réactions sont différentes : l’une est émotionnelle et l’autre comportementale.",
      en:
        "A stereotype is different from a prejudice because the reactions are different: one is emotional, the other behavioral."
    },
    answer: 'false'
  },

  // Page 8 (Q71–80)
  {
    qNum: 71,
    text: {
      fr:
        "Les stéréotypes sont une heuristique utilisée pour la sélection du personnel lors d’un premier entretien d’embauche.",
      en:
        "Stereotypes are a heuristic used in personnel selection during an initial job interview."
    },
    answer: 'true'
  },
  {
    qNum: 72,
    text: {
      fr:
        "Selon la théorie de l'identité sociale, les stéréotypes peuvent provenir de la catégorisation sociale et de l'identité sociale.",
      en:
        "According to Social Identity Theory, stereotypes can stem from social categorization and social identity."
    },
    answer: 'true'
  },
  {
    qNum: 73,
    text: {
      fr:
        "Il ne suffit pas de connaître les stéréotypes de genre dans notre culture pour qu'ils influencent nos perceptions et nos comportements.",
      en:
        "Merely knowing gender stereotypes in our culture is not enough for them to influence our perceptions and behaviors."
    },
    answer: 'false'
  },
  {
    qNum: 74,
    text: {
      fr:
        "L'exagération et la valence sont des caractéristiques clés des stéréotypes.",
      en:
        "Exaggeration and valence are key characteristics of stereotypes."
    },
    answer: 'true'
  },
  {
    qNum: 75,
    text: {
      fr:
        "Selon la théorie des stéréotypes, les gens perçoivent leur propre groupe comme moins diversifié que d'autres groupes auxquels ils n'appartiennent pas.",
      en:
        "According to stereotype theory, people perceive their own group as less diverse than other groups they don’t belong to."
    },
    answer: 'false'
  },
  {
    qNum: 76,
    text: {
      fr:
        "Il y a toujours une part de vérité derrière les stéréotypes.",
      en:
        "There is always some truth behind stereotypes."
    },
    answer: 'false'
  },
  {
    qNum: 77,
    text: {
      fr:
        "L'une des manifestations des préjugés implicites est que nous percevons et évaluons le même comportement différemment, en fonction de la personne qui le manifeste.",
      en:
        "One manifestation of implicit bias is that we perceive and evaluate the same behavior differently depending on who displays it."
    },
    answer: 'true'
  },
  {
    qNum: 78,
    text: {
      fr:
        "Le test d'association implicite est une méthode basée sur un questionnaire pour mesurer les préjugés implicites.",
      en:
        "The Implicit Association Test is a questionnaire-based method for measuring implicit biases."
    },
    answer: 'false'
  },
  {
    qNum: 79,
    text: {
      fr:
        "La désindividualisation est un moyen de briser les associations stéréotypées et habituelles et donc de surmonter les préjugés.",
      en:
        "Deindividuation is a way to break stereotypical and habitual associations, thereby overcoming biases."
    },
    answer: 'false'
  },
  {
    qNum: 80,
    text: {
      fr:
        "Au cours du temps, la proportion de répondants considérant les femmes et hommes égaux en termes de compétence a largement augmenté.",
      en:
        "Over time, the proportion of respondents who consider women and men equal in competence has increased significantly."
    },
    answer: 'true'
  },

  // Page 9 (Q81–90)
  {
    qNum: 81,
    text: {
      fr:
        "La proportion de répondants dont l’évaluation de la caractéristique “agency” est stéréotypique des hommes est plus faible en 2020 que celle associée aux femmes en 1945.",
      en:
        "The proportion of respondents whose assessment of the characteristic “agency” is stereotypically male is lower in 2020 than that associated with women in 1945."
    },
    answer: 'false'
  },
  {
    qNum: 82,
    text: {
      fr:
        "Le modèle du lack of fit permet d’expliquer pourquoi une femme serait sous-évaluée lors d’un entretien d’embauche lorsque ce poste concerne une position de manager.",
      en:
        "The Lack-of-Fit model explains why a woman would be undervalued in a job interview when the position is managerial."
    },
    answer: 'true'
  },
  {
    qNum: 83,
    text: {
      fr:
        "La menace du stéréotype influence la catégorie auto-évaluation dans le modèle du lack of fit.",
      en:
        "Stereotype threat influences self-evaluation in the Lack-of-Fit model."
    },
    answer: 'false'
  },
  {
    qNum: 84,
    text: {
      fr:
        "L'explication la plus plausible de l'écart salarial entre les hommes et les femmes est que les femmes ne demandent pas autant d'argent que les hommes.",
      en:
        "The most plausible explanation for the gender wage gap is that women do not negotiate for as much money as men."
    },
    answer: 'false'
  },
  {
    qNum: 85,
    text: {
      fr:
        "Les femmes dirigeantes sont évaluées de manière particulièrement positive lorsqu'elles adoptent un style de leadership masculin.",
      en:
        "Female leaders are evaluated especially positively when they adopt a male leadership style."
    },
    answer: 'false'
  },
  {
    qNum: 86,
    text: {
      fr:
        "Selon le modèle du « Lack of fit », la cohérence ou l'incohérence entre les attributs d'un individu et les attentes ou stéréotypes peut conduire à un comportement d'autolimitation et à la discrimination.",
      en:
        "According to the Lack-of-Fit model, the match or mismatch between an individual’s attributes and expectations or stereotypes can lead to self-limiting behavior and discrimination."
    },
    answer: 'true'
  },
  {
    qNum: 87,
    text: {
      fr:
        "Fournir des explications externes à l'anxiété est un moyen de réduire la menace des stéréotypes.",
      en:
        "Providing external explanations for anxiety is a way to reduce stereotype threat."
    },
    answer: 'true'
  },
  {
    qNum: 88,
    text: {
      fr:
        "Les femmes sont plus susceptibles d'être perçues comme des leaders qui utilisent le style de leadership « Laissez-faire » que les hommes.",
      en:
        "Women are more likely to be perceived as using a laissez-faire leadership style than men."
    },
    answer: 'false'
  },
  {
    qNum: 89,
    text: {
      fr:
        "Deux méta-analyses montrent que la diversité des sexes au sein du conseil d'administration a un effet sur les performances des entreprises.",
      en:
        "Two meta-analyses show that gender diversity on a board of directors affects company performance."
    },
    answer: 'false'
  },
  {
    qNum: 90,
    text: {
      fr:
        "Dans une situation où une leader a un statut élevé, le fait d’avoir du pouvoir ou de ne pas avoir de pouvoir n’a pas d’influence sur les conflits interpersonnels.",
      en:
        "In a situation where a leader has high status, whether they have power or not does not influence interpersonal conflicts."
    },
    answer: 'true'
  },

  // Page 10 (Q91–100)
  {
    qNum: 91,
    text: {
      fr:
        "Les leaders ont tendance à garder à l’esprit les conseils des experts pour améliorer leur compétitivité et augmenter la confiance en leurs propres idées.",
      en:
        "Leaders tend to keep expert advice in mind to improve their competitiveness and increase confidence in their own ideas."
    },
    answer: 'false'
  },
  {
    qNum: 92,
    text: {
      fr:
        "La construction du pouvoir et la corruption qui en découle dépend des opportunités et de la responsabilité de l’institution.",
      en:
        "The construction of power and resulting corruption depend on the opportunities and responsibilities of the institution."
    },
    answer: 'false'
  },
  {
    qNum: 93,
    text: {
      fr:
        "Lors du gala de fin d’année, vous arrivez habillé.e de manière informelle. Vous remarquez dès l’entrée que tous les autres participants sont habillés de manière formelle et vous n’avez pas été tenu au courant. Vous décidez de retourner vous changer pour respecter le code vestimentaire. Vous avez agi de cette manière sous l’influence sociale informative.",
      en:
        "At the year-end gala, you arrive in informal attire. Upon entering, you notice all other attendees are dressed formally, and you weren’t informed. You decide to go back and change to respect the dress code. You acted under informative social influence."
    },
    answer: 'true'
  },
  {
    qNum: 94,
    text: {
      fr:
        "Lors d’une réunion, on vous demande d’aller chercher des verres supplémentaires pour les invités de la société concurrente. Vous devez choisir parmi les verres marrons ou les verres violets et vous ne savez pas quoi faire. Vous choisissez finalement des verres de couleur marron car vous avez vu que la table ne contient que des verres marrons. Vous respectez la norme, il s’agit donc d’une influence sociale normative.",
      en:
        "At a meeting, you’re asked to fetch extra glasses for guests of the rival company. You must choose between brown or purple glasses and aren’t sure. You pick brown because you saw the table has only brown glasses. You’re obeying a norm, so this is normative social influence."
    },
    answer: 'false'
  },
  {
    qNum: 95,
    text: {
      fr:
        "Les personnes orientées vers l'échange se comportent de manière moins égoïste, car elles pensent qu'elles peuvent donner aux autres sans nécessairement toujours recevoir quelque chose en retour.",
      en:
        "People with an exchange orientation behave less selfishly because they believe they can give to others without necessarily always getting something in return."
    },
    answer: 'false'
  },
  {
    qNum: 96,
    text: {
      fr:
        "La déshumanisation peut avoir des effets positifs.",
      en:
        "Dehumanization can have positive effects."
    },
    answer: 'true'
  },
  {
    qNum: 97,
    text: {
      fr:
        "Le perfectionnisme est un comportement approprié pour les dirigeants, et ceux qui en font preuve sont moins susceptibles de devenir des dirigeants destructeurs.",
      en:
        "Perfectionism is appropriate for leaders, and those who display it are less likely to become destructive leaders."
    },
    answer: 'false'
  },
  {
    qNum: 98,
    text: {
      fr:
        "Le fait d'avoir du pouvoir sans prestige diminue les conflits avec les autres.",
      en:
        "Having power without prestige decreases conflict with others."
    },
    answer: 'false'
  },
  {
    qNum: 99,
    text: {
      fr:
        "Les termes obéissance et conformité renvoient au même phénomène.",
      en:
        "The terms obedience and conformity refer to the same phenomenon."
    },
    answer: 'false'
  },
  {
    qNum: 100,
    text: {
      fr:
        "Vous voulez vous faire couper les cheveux de manière inhabituelle, mais vous craignez que les autres se moquent de vous. Dans ce cas, vous avez été affecté par une influence sociale informative.",
      en:
        "You want to get an unusual haircut but are worried others will mock you. In this case, you have been affected by informative social influence."
    },
    answer: 'false'
  }
];

export default allQuizData;
