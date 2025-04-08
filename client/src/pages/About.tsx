import "../styles/About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h1>
          À propos de <span className="highlight">SweetShare</span>
        </h1>

        <section className="mission">
          <h2>Notre mission</h2>
          <p>
            <strong>SweetShare</strong> est un site de partage de recettes de
            pâtisserie qui permet aux passionnés de sucreries de découvrir, de
            partager et de célébrer la magie de la pâtisserie à travers le
            monde. Que vous soyez un chef amateur ou un pâtissier confirmé,{" "}
            <strong>SweetShare</strong> est l'endroit idéal pour explorer une
            variété de recettes, échanger des astuces et trouver l'inspiration
            pour vos prochaines créations sucrées.
          </p>
          <p>
            Notre mission est simple : rassembler une communauté d'amateurs de
            pâtisserie qui partagent leur amour pour les douceurs, tout en vous
            offrant une plateforme conviviale pour publier et découvrir de
            nouvelles recettes.
          </p>
        </section>

        <section className="why-choose">
          <h2>
            Pourquoi choisir <span className="highlight">SweetShare</span> ?
          </h2>
          <ul>
            <li>
              <strong>Facilité de partage</strong> : Publiez vos recettes
              préférées en quelques clics, et laissez la communauté s'inspirer
              de vos créations.
            </li>
            <li>
              <strong>Des recettes pour tous les niveaux</strong> : Que vous
              soyez débutant ou expert, vous trouverez des recettes adaptées à
              tous les niveaux de compétence.
            </li>
            <li>
              <strong>Recettes variées</strong> : Explorez une grande variété de
              recettes allant des classiques comme les gâteaux au chocolat aux
              créations plus modernes et audacieuses.
            </li>
            <li>
              <strong>Communauté active</strong> : Rejoignez une communauté de
              passionnés de pâtisserie, échangez des idées, des conseils et des
              retours d'expérience.
            </li>
          </ul>
        </section>

        <section className="team">
          <h2>
            L'équipe derrière <span className="highlight">SweetShare</span>
          </h2>
          <p>
            Notre équipe est composée de passionnés de pâtisserie et de
            technologie, déterminés à créer une expérience de partage qui fait
            la part belle à la créativité culinaire. Nous croyons fermement que
            chaque recette a une histoire et un potentiel de découverte, c’est
            pourquoi nous avons conçu <strong>SweetShare</strong> comme un
            espace d’échange riche et inspirant.
          </p>
        </section>

        <section className="join-us">
          <h2>Rejoignez-nous !</h2>
          <p>
            Nous vous invitons à explorer notre plateforme et à partager vos
            propres recettes avec la communauté. N'hésitez pas à nous contacter
            si vous avez des questions, des suggestions ou si vous souhaitez
            simplement discuter de pâtisserie avec nous. Nous serions ravis de
            vous aider à faire grandir votre passion pour la cuisine sucrée !
          </p>
        </section>

        <section className="testimonials">
          <h2>
            Ce que nos utilisateurs disent de{" "}
            <span className="highlight">SweetShare</span>
          </h2>
          <ul>
            <li>
              "Une plateforme géniale pour découvrir de nouvelles recettes de
              pâtisserie et rencontrer d'autres passionnés. J'y trouve toujours
              de l'inspiration pour mes projets de desserts !" -{" "}
              <em>Sophie M.</em>
            </li>
            <li>
              "SweetShare a complètement transformé ma manière de partager mes
              recettes. C'est devenu mon endroit préféré pour publier mes
              créations sucrées." - <em>Marc D.</em>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default About;
