import React from 'react';

const Profile = () => {
    return (
        <section id="profile">
            <div className="container section">
                <div className="row">
                    <div className="col-12">
                        <h2>Profile</h2>
                        <img src="img/logos/ksea.png" />
                        <h4>Korean-American Scientists and Engineers Association</h4>
                        <p className="text-muted text-justified">
                            KSEA was established in 1971 as a non-profit professional organization and has grown to over 6,000 registered members with ~ 70 Local Chapters and Branches, ~30 Affiliated Professional Societies, and 13 Technical Groups across the United
                            States. It is open for individuals residing in the U.S.A. who are engaged in science, engineering or a related field. The Seattle-WA chapter started in 1975 as the 15th chapter. As of January 2016, the Seattle-WA chapter has over 100
                            members from various fields with diverse background.
                        </p>
                        <p className="text-muted text-justified">
                            KSEA is a professional organization promoting science, cooperation between the U.S. and Korea, and a career network for Korean-American scientists and engineers. Through KSEA, members can get excellent networking opportunities via local
                            chapter activities and national events, such as social events, regional technical conferences, volunteer activities, and national conferences/forums. Every year, KSEA offers the <a href="https://nmsc.ksea.org/">KSEA National Math and
                            Science Competition (NMSC)</a> to challenge and inspire Korean-American students. The Seattle-WA chapter is very active in community services and hosts the KSEA National Math and Science Competition for 4th – 11th grade students from
                            the state of Washington. The competition is offered in parallel in multiple locations across the U.S.A. and KSEA provides prizes and scholarships to winners.
                        </p>
                        <p className="text-muted text-justified">
                            The Seattle-WA chapter also participates in the annual Northwest Regional Conference (NWRC), which invites students and professionals from North California, Oregon, Idaho, and Washington chapters. This event provides insight into current
                            “state-of-the-art” technology and its future trend on the key technologies in various fields.
                        </p>
                        <p className="text-muted text-justified">
                            Finally, the KSEA Seattle-WA Young Generation (YG) chapter is part of a larger national KSEA organization. Together with the Seattle-WA local chapter, the YG chapter actively recruits new members and fosters the community. The YG chapter
                            is a networking organization where young generation can meet, communicate, take leadership roles in running local events, and help each other.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;