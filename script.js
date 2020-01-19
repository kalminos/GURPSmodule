Hooks.on("ready", () => {
    //console.log("Hello Module!");
    //ChatMessage.create({content : "hello world", user : game.user._id, speaker: {alias: "GURPS BOT"},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
    Ruler.prototype.measure = GURPSRuler
});

hit = ["Null - 1 - How did this happen? ", // Hit location shit
       "Null - 2 - How did this happen? ",
       "Hit Location - 3 - Skull: All wounding modifiers go to X4 and Any injury causing shock causes knockdown/stunning roll, knockdown/stunning roll at -10 ",
       "Hit Location - 4 - Skull: All wounding modifiers go to X4 and Any injury causing shock causes knockdown/stunning roll, knockdown/stunning roll at -10 ",
       "Hit Location - 5 - Face: Any injury causing shock causes knockdown/stunning roll, Major wounds Knockdown/stunning are at -5, corrosive is 1.5X and cripples eyes ",
       "Hit Location - 6 - Right Leg: pi++, pi+, and imp become 1X, Cripples at major Wound ",
       "Hit Location - 7 - Right Leg: pi++, pi+, and imp become 1X, Cripples at major Wound ",
       "Hit Location - 8 - Right Arm: pi++, pi+, and imp become 1X, Cripples at major Wound ",
       "Hit Location - 9 - Torso ",
       "Hit Location - 10 - Torso ",
       "Hit Location - 11 - Abdomen ",
       "Hit Location - 12 - Left Arm: pi++, pi+, and imp become 1X, Cripples at major Wound ",
       "Hit Location - 13 - Left Leg: pi++, pi+, and imp become 1X, Cripples at major Wound",
       "Hit Location - 14 - Left Leg: pi++, pi+, and imp become 1X, Cripples at major Wound ",
       "Hit Location - 15 - Hand - Cripples at HP/3 ",
       "Hit Location - 16 - Foot - Cripples at HP/3 ",
       "Hit Location - 17 - Neck - cr and cor become 1.5x, Cutting becomes 2X ",
       "Hit Location - 18 - Neck - cr and cor become 1.5x, Cutting becomes 2X "];

hitm = ["Null - 1 - How did this happen? ", // Hit location shit
       "Null - 2 - How did this happen? ",
       "Hit Location - 3 - Skull: All wounding modifiers go to X4 and Any injury causing shock causes knockdown/stunning roll, knockdown/stunning roll at -10 ",
       "Hit Location - 4 - Skull: All wounding modifiers go to X4 and Any injury causing shock causes knockdown/stunning roll, knockdown/stunning roll at -10 ",
       "Hit Location - 5 - Face: Any injury causing shock causes knockdown/stunning roll, Major wounds Knockdown/stunning are at -5, corrosive is 1.5X and cripples eyes ",
       "Hit Location - 6 - Right Leg: pi++, pi+, and imp become 1X, Cripples at major Wound ",
       "Hit Location - 7 - Right Arm: pi++, pi+, and imp become 1X, Cripples at major Wound ",
       "Hit Location - 8 - Right Arm: pi++, pi+, and imp become 1X, Cripples at major Wound ",
       "Hit Location - 9 - Torso ",
       "Hit Location - 10 - Torso ",
       "Hit Location - 11 - Abdomen ",
       "Hit Location - 12 - Left Arm: pi++, pi+, and imp become 1X, Cripples at major Wound ",
       "Hit Location - 13 - Left Arm: pi++, pi+, and imp become 1X, Cripples at major Wound ",
       "Hit Location - 14 - Left Leg: pi++, pi+, and imp become 1X, Cripples at major Wound ",
       "Hit Location - 15 - Hand - Cripples at HP/3 ",
       "Hit Location - 16 - Foot - Cripples at HP/3 ",
       "Hit Location - 17 - Neck - cr and cor become 1.5x, Cutting becomes 2X ",
       "Hit Location - 18 - Neck - cr and cor become 1.5x, Cutting becomes 2X "];

sHit = [["", "", "", "", "", ""],  // Null  More Hit location shit
       ["", "", "", "", "", ""],  // Null
       ["", "", "", "", "", ""],  // Skull
       ["", "", "", "", "", ""],  // Skull
       ["- Jaw, additional -1 to knockdown/stunning rolls, Covered by Cheek Guards",
       "- Skull if imp, pi, tbb, otherwise Nose - Cripples at over 1/4 HP and causes No Sense of Smell/Taste (non-cutting) or Appearance loss (cutting, x2 crippling threshold), non-cutting major wounds give -5 to stun/knockdown",
       "- Ear, Cripples at over 1/4 HP. does not cause -5 to knockdown/stunning roll. A major wound severs the ear and causes appearance penalties. Covered by Broad Cheek Guards",
       "- Cheek. Covered by Cheek Guards", "- Cheek. Covered by Cheek Guards", "Eyes- As skull, but no Dr. Cripples at 1/10 Hp. Bleed per 30 seconds instead of per minute"],  // face
       ["- Shin", "- Shin", "- Shin", "- Knee - crushing hits a joint, cripples at over HP/3", "- Thigh", "- Thigh - cut, imp, pi, tbb hit vein/artery, increasing wounding modifier by .5X. Doesn't cripple and does not have a wounding limit. Bleeding rolls at -3 or -4 if from cutting. Bleed per 30 seconds instead of per minute."],  // Rt Leg
       ["- Shin", "- Shin", "- Shin", "- Knee - crushing hits a joint, cripples at over HP/3", "- Thigh", "- Thigh - cut, imp, pi, tbb hit vein/artery, increasing wounding modifier by .5X. Doesn't cripple and does not have a wounding limit. Bleeding rolls at -3 or -4 if from cutting. Bleed per 30 seconds instead of per minute."],  // Rt Leg
       ["- Forearm", "- Forearm ", "- Forearm", "- Elbow - crushing hits a joint, cripples at over HP/3", "- Upper Arm", "Shoulder - cut, imp, pi, tbb hit vein/artery, increasing wounding modifier by .5X. Doesn't cripple and does not have a wounding limit. Bleeding rolls at -3 or -4 if from cutting. Bleed per 30 seconds instead of per minute."],  // Rt Arm
       ["- cr, imp, pi or tbb hit the vitals, changing to 3X or 2x for tbb or 1X for crushing wounding modifier. Any injury causing shock causes knockdown/stunning roll. Major wound has a -5 knockdown/stunning modifier, bleed per 30 seconds instead of per minute, with bleeding rolls at -4, cut from behind hits spine - which has 3 extra DR but acts like vitals except without the wounding modifier, 1xHP injury cripples, giving bad back 9sever) and lame (paraplegic) until healed.", "", "", "", "", ""],  // Torso
       ["- cr, imp, pi or tbb hit the vitals, changing to 3X or 2x for tbb or 1X for crushing wounding modifier. Any injury causing shock causes knockdown/stunning roll. Major wound has a -5 knockdown/stunning modifier, bleed per 30 seconds instead of per minute, with bleeding rolls at -4, cut from behind hits spine - which has 3 extra DR but acts like vitals except without the wounding modifier, 1xHP injury cripples, giving bad back 9sever) and lame (paraplegic) until healed.", "", "", "", "", ""],  // Torso
       ["- cr, imp, pi or tbb hit the vitals, changing to 3X or 2x for tbb or 1X for crushing wounding modifier. Any injury causing shock causes knockdown/stunning roll. Major wound has a -5 knockdown/stunning modifier, bleed per 30 seconds instead of per minute, with bleeding rolls at -4.", "- Digestive Tract", "- Digestive Tract", "- Digestive Tract", "- Pelvis - fall down on major wound, cannot stand as if lame (missing legs) until healed", "- Groin - double shock, Major wounds cause -5 to knockdown/stunning roll"],  // Abdomen
       ["- Forearm", "- Forearm ", "- Forearm", "- Elbow - crushing hits a joint, cripples at over HP/3", "- Upper Arm", "Shoulder - cut, imp, pi, tbb hit vein/artery, increasing wounding modifier by .5X. Doesn't cripple and does not have a wounding limit. Bleeding rolls at -3 or -4 if from cutting. Bleed per 30 seconds instead of per minute."],  // Lft Arm
       ["- Shin", "- Shin", "- Shin", "- Knee - crushing hits a joint, cripples at over HP/3", "- Thigh", "- Thigh - cut, imp, pi, tbb hit vein/artery, increasing wounding modifier by .5X. Doesn't cripple and does not have a wounding limit. Bleeding rolls at -3 or -4 if from cutting. Bleed per 30 seconds instead of per minute."],  // Lft Leg
       ["- Shin", "- Shin", "- Shin", "- Knee - crushing hits a joint, cripples at over HP/3", "- Thigh", "- Thigh - cut, imp, pi, tbb hit vein/artery, increasing wounding modifier by .5X. Doesn't cripple and does not have a wounding limit. Bleeding rolls at -3 or -4 if from cutting. Bleed per 30 seconds instead of per minute."],  // Lft Leg
       ["- cr, cut, pi-, pi, pi+, pi++, bu (tb) only Hits Joint, cripples at over HP/4", "", "", "", "", ""],  // Hand
       ["- cr, cut, pi-, pi, pi+, pi++, bu (tb) only Hits Joint, cripples at over HP/4", "", "", "", "", ""],  // Foot
       ["- cut, imp, pi, tbb hit vein/artery, increasing wounding modifier by .5X. Doesn't cripple and does not have a wounding limit. Bleeding rolls at -3 or -4 if from cutting. Bleed per 30 seconds instead of per minute. cr from behind hits spine - which has 3 extra DR but acts like vitals except without the wounding modifier, 1xHP injury cripples, giving bad back 9sever) and lame (paraplegic) until healed.", "", "", "", "", ""],  // Neck
       ["- cut, imp, pi, tbb hit vein/artery, increasing wounding modifier by .5X. Doesn't cripple and does not have a wounding limit. Bleeding rolls at -3 or -4 if from cutting. Bleed per 30 seconds instead of per minute. cr from behind hits spine - which has 3 extra DR but acts like vitals except without the wounding modifier, 1xHP injury cripples, giving bad back 9sever) and lame (paraplegic) until healed.", "", "", "", "", ""]];  // Neck

sHitm =[["", "", "", "", "", ""],  // Null  More Hit location shit
       ["", "", "", "", "", ""],  // Null
       ["", "", "", "", "", ""],  // Skull
       ["", "", "", "", "", ""],  // Skull
       ["- Jaw, additional -1 to knockdown/stunning rolls, Covered by Cheek Guards",
       "- Skull if imp, pi, tbb, otherwise Nose - Cripples at over 1/4 HP and causes No Sense of Smell/Taste (non-cutting) or Appearance loss (cutting, x2 crippling threshold), non-cutting major wounds give -5 to stun/knockdown",
       "- Ear, Cripples at over 1/4 HP. does not cause -5 to knockdown/stunning roll. A major wound severs the ear and causes appearance penalties. Covered by Broad Cheek Guards",
       "- Cheek. Covered by Cheek Guards", "- Cheek. Covered by Cheek Guards", "Eyes- As skull, but no Dr. Cripples at 1/10 Hp. Bleed per 30 seconds instead of per minute"],  // face
       ["- Shin", "- Shin", "- Shin", "- Knee - crushing hits a joint, cripples at over HP/3", "- Thigh", "- Thigh - cut, imp, pi, tbb hit vein/artery, increasing wounding modifier by .5X. Doesn't cripple and does not have a wounding limit. Bleeding rolls at -3 or -4 if from cutting. Bleed per 30 seconds instead of per minute."],  // Rt Leg
       ["- Forearm", "- Forearm ", "- Forearm", "- Elbow - crushing hits a joint, cripples at over HP/3", "- Upper Arm", "Shoulder - cut, imp, pi, tbb hit vein/artery, increasing wounding modifier by .5X. Doesn't cripple and does not have a wounding limit. Bleeding rolls at -3 or -4 if from cutting. Bleed per 30 seconds instead of per minute."],  // Rt Arm
       ["- Forearm", "- Forearm ", "- Forearm", "- Elbow - crushing hits a joint, cripples at over HP/3", "- Upper Arm", "Shoulder - cut, imp, pi, tbb hit vein/artery, increasing wounding modifier by .5X. Doesn't cripple and does not have a wounding limit. Bleeding rolls at -3 or -4 if from cutting. Bleed per 30 seconds instead of per minute."],  // Rt Arm
       ["- cr, imp, pi or tbb hit the vitals, changing to 3X or 2x for tbb or 1X for crushing wounding modifier. Any injury causing shock causes knockdown/stunning roll. Major wound has a -5 knockdown/stunning modifier, bleed per 30 seconds instead of per minute, with bleeding rolls at -4, cut from behind hits spine - which has 3 extra DR but acts like vitals except without the wounding modifier, 1xHP injury cripples, giving bad back 9sever) and lame (paraplegic) until healed.", "", "", "", "", ""],  // Torso
       ["- cr, imp, pi or tbb hit the vitals, changing to 3X or 2x for tbb or 1X for crushing wounding modifier. Any injury causing shock causes knockdown/stunning roll. Major wound has a -5 knockdown/stunning modifier, bleed per 30 seconds instead of per minute, with bleeding rolls at -4, cut from behind hits spine - which has 3 extra DR but acts like vitals except without the wounding modifier, 1xHP injury cripples, giving bad back 9sever) and lame (paraplegic) until healed.", "", "", "", "", ""],  // Torso
       ["- cr, imp, pi or tbb hit the vitals, changing to 3X or 2x for tbb or 1X for crushing wounding modifier. Any injury causing shock causes knockdown/stunning roll. Major wound has a -5 knockdown/stunning modifier, bleed per 30 seconds instead of per minute, with bleeding rolls at -4.", "- Digestive Tract", "- Digestive Tract", "- Digestive Tract", "- Pelvis - fall down on major wound, cannot stand as if lame (missing legs) until healed", "- Groin - double shock, Major wounds cause -5 to knockdown/stunning roll"],  // Abdomen
       ["- Forearm", "- Forearm ", "- Forearm", "- Elbow - crushing hits a joint, cripples at over HP/3", "- Upper Arm", "Shoulder - cut, imp, pi, tbb hit vein/artery, increasing wounding modifier by .5X. Doesn't cripple and does not have a wounding limit. Bleeding rolls at -3 or -4 if from cutting. Bleed per 30 seconds instead of per minute."],  // Lft Arm
       ["- Forearm", "- Forearm ", "- Forearm", "- Elbow - crushing hits a joint, cripples at over HP/3", "- Upper Arm", "Shoulder - cut, imp, pi, tbb hit vein/artery, increasing wounding modifier by .5X. Doesn't cripple and does not have a wounding limit. Bleeding rolls at -3 or -4 if from cutting. Bleed per 30 seconds instead of per minute."],  // Lft Arm
       ["- Shin", "- Shin", "- Shin", "- Knee - crushing hits a joint, cripples at over HP/3", "- Thigh", "- Thigh - cut, imp, pi, tbb hit vein/artery, increasing wounding modifier by .5X. Doesn't cripple and does not have a wounding limit. Bleeding rolls at -3 or -4 if from cutting. Bleed per 30 seconds instead of per minute."],  // Lft Leg
       ["- cr, cut, pi-, pi, pi+, pi++, bu (tb) only Hits Joint, cripples at over HP/4", "", "", "", "", ""],  // Hand
       ["- cr, cut, pi-, pi, pi+, pi++, bu (tb) only Hits Joint, cripples at over HP/4", "", "", "", "", ""],  // Foot
       ["- cut, imp, pi, tbb hit vein/artery, increasing wounding modifier by .5X. Doesn't cripple and does not have a wounding limit. Bleeding rolls at -3 or -4 if from cutting. Bleed per 30 seconds instead of per minute. cr from behind hits spine - which has 3 extra DR but acts like vitals except without the wounding modifier, 1xHP injury cripples, giving bad back 9sever) and lame (paraplegic) until healed.", "", "", "", "", ""],  // Neck
       ["- cut, imp, pi, tbb hit vein/artery, increasing wounding modifier by .5X. Doesn't cripple and does not have a wounding limit. Bleeding rolls at -3 or -4 if from cutting. Bleed per 30 seconds instead of per minute. cr from behind hits spine - which has 3 extra DR but acts like vitals except without the wounding modifier, 1xHP injury cripples, giving bad back 9sever) and lame (paraplegic) until healed.", "", "", "", "", ""]];  // Neck


crit = ["Critical hit result - 1 - how did this happen?",
       "Critical hit result - 2 - how did this happen?",
       "Critical hit result - 3 - The blow does triple damage. ",
       "Critical hit result - 4 - The target’s DR protects at half value (round down) after applying any armor divisors.",
       "Critical hit result - 5 - The blow does double damage. ",
       "Critical hit result - 6 - The blow does maximum normal damage. ",
       "Critical hit result - 7 - If any damage penetrates DR, treat it as if it were a major wound, regardless of the actual injury inflicted.",
       "Critical hit result - 8 - inflict double normal shock (max -8). If the injury is to a limb or extremity, that body part is 'crippled'. 'crippling' wears off in (16 - HT) seconds, minimum two seconds unless there was enough damage to cripple anyway.",
       "Critical hit result - 9 - Normal damage only",
       "Critical hit result - 10 - Normal damage only",
       "Critical hit result - 11 - Normal damage only",
       "Critical hit result - 12 - Normal damage, and the victim drops anything he is holding, regardless of whether any damage penetrates DR.",
       "Critical hit result - 13 - If any damage penetrates DR, treat it as if it were a major wound, regardless of the actual injury inflicted.",
       "Critical hit result - 14 - If any damage penetrates DR, treat it as if it were a major wound, regardless of the actual injury inflicted.",
       "Critical hit result - 15 - The blow does maximum normal damage. ",
       "Critical hit result - 16 - The blow does double damage. ",
       "Critical hit result - 17 - The target’s DR protects at half value (round down) after applying any armor divisors.",
       "Critical hit result - 18 - The blow does triple damage. "];
       
hcrit = ["Head critical hit result - 1 - how did this happen?",
       "Head critical hit result - 2 - how did this happen?",
       "Head critical hit result - 3 - The blow does maximum normal damage and ignores the target’s DR.",
       "Head critical hit result - 4 - The target’s DR protects at half value (round up). If any damage penetrates, treat it as if it were a major wound, regardless of the actual injury inflicted.",
       "Head critical hit result - 5 - The target’s DR protects at half value (round up). If any damage penetrates, treat it as if it were a major wound, regardless of the actual injury inflicted.",
       "Head critical hit result - 6 - If face or skull, treat as an eye instead, even if the attack could not normally target the eye! If impossible (e.g., from behind): DR protects at half value (round up). If any damage penetrates, treat as major wound",
       "Head critical hit result - 7 - If face or skull, treat as an eye instead, even if the attack could not normally target the eye! If impossible (e.g., from behind): DR protects at half value (round up). If any damage penetrates, treat as major wound",
       "Head critical hit result - 8 - Normal head-blow damage, and the victim is knocked off balance: he must Do Nothing next turn (but may defend normally).",
       "Head critical hit result - 9 - Normal head-blow damage only.",
       "Head critical hit result - 10 - Normal head-blow damage only.",
       "Head critical hit result - 11 - Normal head-blow damage only.",
       "Head critical hit result - 12 - Normal head-blow damage, and if any damage penetrates DR, a crushing attack deafens the victim (for recovery, see Duration of Crippling Injuries, p. 422), others causes severe scarring -1 appearance level, or -2 if cor/burn.",
       "Head critical hit result - 13 - Normal head-blow damage, and if any damage penetrates DR, a crushing attack deafens the victim (for recovery, see Duration of Crippling Injuries, p. 422), others causes severe scarring -1 appearance level, or -2 if cor/burn.",
       "Head critical hit result - 14 - Normal head-blow damage, and the victim drops his weapon (if he has two weapons, roll randomly to see which one he drops).",
       "Head critical hit result - 15 - The blow does maximum normal damage.",
       "Head critical hit result - 16 - The blow does double damage.",
       "Head critical hit result - 17 - The target’s DR protects at half value (round up).",
       "Head critical hit result - 18 - The blow does triple damage. "];

fail = ["Critical miss result - 1 - how did this happen?",
       "Critical miss result - 2 - how did this happen?",
       "Critical miss result - 3 - Your weapon breaks, see(p. 485) reroll if weapon is solid crushing, magic, a firearms, or a fine+ weapon.  if “broken weapon” result a second time, weapon breaks. else, drop weapon.",
       "Critical miss result - 4 - Your weapon breaks, see(p. 485) reroll if weapon is solid crushing, magic, a firearms, or a fine+ weapon.  if “broken weapon” result a second time, weapon breaks. else, drop weapon.",
       "Critical miss result - 5 - You manage to hit yourself in the arm or leg (coin-flip). Exception: If making an imp or pi melee attack, or any ranged attack, reroll. If “hit yourself” result a second time, use that result.",
       "Critical miss result - 6 - You manage to hit yourself in the arm or leg (coin-flip) for half damage. Exception: If making an imp or pi melee attack, or any ranged attack, reroll. If “hit yourself” result a second time, use that result.",
       "Critical miss result - 7 - You lose your balance. You can do nothing else (not even a free action) until your next turn, and all your active defenses are at -2 until then.",
       "Critical miss result - 8 - The weapon turns in your hand. You must take an extra Ready maneuver before you can use it again.",
       "Critical miss result - 9 - You drop the weapon. Exception: A cheap weapon breaks; see(p. 485)",
       "Critical miss result - 10 - You drop the weapon. Exception: A cheap weapon breaks; see(p. 485).",
       "Critical miss result - 11 - You drop the weapon. Exception: A cheap weapon breaks; see (p. 485).",
       "Critical miss result - 12 - The weapon turns in your hand. You must take an extra Ready maneuver before you can use it again.",
       "Critical miss result - 13 - You lose your balance. You can do nothing else (not even a free action) until your next turn, and all your active defenses are at -2 until then.",
       "Critical miss result - 14 - If swinging melee attack, weapon flies 1d yards from your hand – (coin-flip forward or back). Anyone on the spot must make a DX roll or take half damage from the weapon! Else drop weapon. cheap weapons break. see(p. 485)",
       "Critical miss result - 15 - You strain your shoulder! Your weapon arm is “crippled.” You do not have to drop your weapon, but you cannot use it, either to attack or defend, for 30 minutes.",
       "Critical miss result - 16 - You fall down! If making a ranged attack, You lose your balance. You can do nothing else (not even a free action) until your next turn, and all your active defenses are at -2 until then.",
       "Critical miss result - 17 - Your weapon breaks, see(p. 485) reroll if weapon is solid crushing, magic, a firearms, or a fine+ weapon.  if “broken weapon” result a second time, weapon breaks. else, drop weapon.",
       "Critical miss result - 18 - Your weapon breaks, see(p. 485) reroll if weapon is solid crushing, magic, a firearms, or a fine+ weapon.  if “broken weapon” result a second time, weapon breaks. else, drop weapon."];

ufail =["Unarmed critical miss result - 1 - how did this happen?",
        "Unarmed critical miss result - 2 - how did this happen?",
        "Unarmed critical miss result - 3 - You knock yourself out! Details are up to the GM – perhaps you trip and fall on your head, or walk face-first into an opponent’s fist or shield. Roll vs. HT every 30 min-utes to recover.",
        "Unarmed critical miss result - 4 - If using limb, take 1 HP of injury and the limb is “crippled.” for 30 minutes. If biting, butting, etc., you pull a muscle- suffer moderate pain (see p. 428) for the next (20 - HT) minutes, minimum one minute.",
        "Unarmed critical miss result - 5 - hit solid object (wall, floor, etc.) You take cr damage equal to your thr damage to used limb; DR protects normally. if foe has ready impaling weapon, you fall on it instead! take its damage using your ST",
        "Unarmed critical miss result - 6 - hit solid object. You take cr damage equal to your thr damage to used limb, halved. DR protects normally. if foe has ready impaling weapon, take its damage using your ST. Halved. break nat. weapons for -1 damage until healed(p. 422)",
        "Unarmed critical miss result - 7 - You stumble. On an attack, you advance one yard past your opponent and end your turn facing away from him; he is now behind you! On a parry, you fall down!",
        "Unarmed critical miss result - 8 - You Fall down!",
        "Unarmed critical miss result - 9 - You lose your balance. You can do nothing else (not even a free action) until your next turn, and all your active defenses are at -2 until then.",
        "Unarmed critical miss result - 10 - You lose your balance. You can do nothing else (not even a free action) until your next turn, and all your active defenses are at -2 until then.",
        "Unarmed critical miss result - 11 - You lose your balance. You can do nothing else (not even a free action) until your next turn, and all your active defenses are at -2 until then.",
        "Unarmed critical miss result - 12 - You trip. Make a DX roll to avoid falling down. Roll at DX-4 if kicking, or at twice the usual DX penalty for a technique that requires a DX roll to avoid mishap even on a normal failure (e.g., DX-8 for a Jump Kick).",
        "Unarmed critical miss result - 13 - You drop your guard. All your active defenses are at -2 for the next turn, and any Evaluate bonus or Feint penalty against you until your next turn counts double! This is obvious to nearby opponents.",
        "Unarmed critical miss result - 14 - You stumble. On an attack, you advance one yard past your opponent and end your turn facing away from him; he is now behind you! On a parry, you fall down!",
        "Unarmed critical miss result - 15 - You tear a muscle. Take 1d-3 of injury to the limb you used, You are at -1 to all attacks and defenses next turn. You are at -3 to any action involving that limb (or to any action, if neck!) until healed. Reduce to -1 if you have HPT.",
        "Unarmed critical miss result - 16 - You hit a solid object (wall, floor, etc.) take cr dmg equal to your thr dmg to the body part you were using; DR protects normally. If attacking a foe armed with a ready impaling weapon; suffer the weapon’s damage, but based on your ST ",
        "Unarmed critical miss result - 17 - You strain a limb or pull a muscle, as in 4. An IQ 3-5 animal loses its nerve. It will turn and flee on its next turn, if possible. If backed into a corner, it will assume a surrender position (throat bared, belly exposed, etc.).",
        "Unarmed critical miss result - 18 - You knock yourself out! Details are up to the GM – perhaps you trip and fall on your head, or walk face-first into an opponent’s fist or shield. Roll vs. HT every 30 min-utes to recover."];

malf =["Malfunction - 1 - how did this happen?",
        "Malfunction - 2 - how did this happen?",
        "Malfunction - 3 - Mech/Electrical problem. Weapon fails to fire. Armory or IQ based weapon skill (ready maneuver) to diagnose. Armoury roll to fix. takes one hour to attempt. crit fails destroy weapon. grenades explode 1d seconds /late/",
        "Malfunction - 4 - Mech/Electrical problem. Weapon fails to fire. Armory or IQ based weapon skill (ready maneuver) to diagnose. Armoury roll to fix. takes one hour to attempt. crit fails destroy weapon. grenades explode 1d seconds /late/",
        "Malfunction - 5 - Misfire. weapon fails to fire. armory +2 or IQ based weapon roll to diagnose. revolvers will fire normally on /next/ shot.  each fix is 3 readies, needs 2 free hands, and armory+2 or IQ based weapon. crit fail causes mech/elec problem. Grenades are duds.",
        "Malfunction - 6 - Misfire. weapon fails to fire. armory +2 or IQ based weapon roll to diagnose. revolvers will fire normally on /next/ shot.  each fix is 3 readies, needs 2 free hands, and armory+2 or IQ based weapon. crit fail causes mech/elec problem. Grenades are duds.",
        "Malfunction - 7 - Misfire. weapon fails to fire. armory +2 or IQ based weapon roll to diagnose. revolvers will fire normally on /next/ shot.  each fix is 3 readies, needs 2 free hands, and armory+2 or IQ based weapon. crit fail causes mech/elec problem. Grenades are duds.",
        "Malfunction - 8 - Misfire. weapon fails to fire. armory +2 or IQ based weapon roll to diagnose. revolvers will fire normally on /next/ shot.  each fix is 3 readies, needs 2 free hands, and armory+2 or IQ based weapon. crit fail causes mech/elec problem. Grenades are duds.",
        "Malfunction - 9 - Weapon fires one shot, jams/stops. fix requires 3 ready maneuvers, 2 hands, and Armory roll, or IQ based weapon roll at -4. failure means isn't fixed. crit fail causes mech/elec problem. grenades are duds. beam weapons count as mech/elec problem instead.",
        "Malfunction - 10 - Weapon fires one shot, jams/stops. fix requires 3 ready maneuvers, 2 hands, and Armory roll, or IQ based weapon roll at -4. failure means isn't fixed. crit fail causes mech/elec problem. grenades are duds. beam weapons count as mech/elec problem instead.",
        "Malfunction - 11 - Weapon fires one shot, jams/stops. fix requires 3 ready maneuvers, 2 hands, and Armory roll, or IQ based weapon roll at -4. failure means isn't fixed. crit fail causes mech/elec problem. grenades are duds. beam weapons count as mech/elec problem instead.",
        "Malfunction - 12 - Misfire. weapon fails to fire. armory +2 or IQ based weapon roll to diagnose. revolvers will fire normally on /next/ shot.  each fix is 3 readies, needs 2 free hands, and armory+2 or IQ based weapon. crit fail causes mech/elec problem. Grenades are duds.",
        "Malfunction - 13 - Misfire. weapon fails to fire. armory +2 or IQ based weapon roll to diagnose. revolvers will fire normally on /next/ shot.  each fix is 3 readies, needs 2 free hands, and armory+2 or IQ based weapon. crit fail causes mech/elec problem. Grenades are duds.",
        "Malfunction - 14 - Misfire. weapon fails to fire. armory +2 or IQ based weapon roll to diagnose. revolvers will fire normally on /next/ shot.  each fix is 3 readies, needs 2 free hands, and armory+2 or IQ based weapon. crit fail causes mech/elec problem. Grenades are duds.",
        "Malfunction - 15 - Weapon fails to fire. Armory or IQ-weapon roll (ready maneuver) to diagnose. Armoury to fix. takes one ht/try. crit fails destroy weapon. grenades explode 1d seconds /late/. tl3-4 weapons explode for 1d+2 cr ex [2d], or explosive warhead damage.",
        "Malfunction - 16 - Weapon fails to fire. Armory or IQ-weapon roll (ready maneuver) to diagnose. Armoury to fix. takes one ht/try. crit fails destroy weapon. grenades explode 1d seconds /late/. tl3-4 weapons explode for 1d+2 cr ex [2d], or explosive warhead damage.",
        "Malfunction - 17 - Weapon fails to fire. Armory or IQ-weapon roll (ready maneuver) to diagnose. Armoury to fix. takes one ht/try. crit fails destroy weapon. grenades explode 1d seconds /late/. tl3-4 weapons explode for 1d+2 cr ex [2d], or explosive warhead damage.",
        "Malfunction - 18 - Weapon fails to fire. Armory or IQ-weapon roll (ready maneuver) to diagnose. Armoury to fix. takes one ht/try. crit fails destroy weapon. grenades explode 1d seconds /late/. tl3-4 weapons explode for 1d+2 cr ex [2d], or explosive warhead damage."];

fear = ["Null - 1 - How did this happen? ",
        "Null - 2 - How did this happen? ",
        "Fright result - 3 - Stunned for one second, then recover automatically. ",
        "Fright result - 4 - Stunned for one second, then recover automatically. ",
        "Fright result - 5 - Stunned for one second, then recover automatically. ",
        "Fright result - 6 - Stunned for one second. Every second after that, roll vs. unmodified Will to snap out of it. ",
        "Fright result - 7 - Stunned for one second. Every second after that, roll vs. unmodified Will to snap out of it. ",
        "Fright result - 8 - Stunned for one second. Every second after that, roll vs. Will, plus whatever bonuses or penalties you had on your original roll, to snap out of it.",
        "Fright result - 9 - Stunned for one second. Every second after that, roll vs. Will, plus whatever bonuses or penalties you had on your original roll, to snap out of it. ",
        "Fright result - 10 - Stunned for 1d seconds. Every second after that, roll vs. modified Will to snap out of it. ",
        "Fright result - 11 - Stunned for 2d seconds. Every second after that, roll vs. modified Will to snap out of it. ",
        "Fright result - 12 - Lose your lunch. Treat this as retching for (25 - HT) seconds, and then roll vs. HT each second to recover; see  Incapacitating Conditions (p. 428).",
        "Fright result - 13 - Acquire a new mental quirk (see Quirks, p. 162). This is the only way to acquire more than five quirks. ",
        "Fright result - 14 - Lose 1d FP and take 1d seconds of stunning, roll vs modified will every second afterwards to snap out of it. ",
        "Fright result - 15 - Lose 1d FP and take 1d seconds of stunning, roll vs modified will every second afterwards to snap out of it. ",
        "Fright result - 16 - Stunned for 1d seconds. roll every second vs modified will to recover. also gain a new mental quirk- (quirks, p 162) ",
        "Fright result - 17 - Faint for 1d minutes, roll vs HT to recover each minute after. ",
        "Fright result - 18 - Faint for 1d minutes, roll vs HT as well, failure means take 1 hp  of injury as you collapse. roll HT every minute after to recover.",
        "Fright result - 19 - Faint for 2d minutes, roll vs HT each minute to recover. take 1 hp of injury. ",
        "Fright result - 20 - Faint bordering on shock, lasting for 4d minutes. Also, lose 1d FP ",
        "Fright result - 21 - Panic. you run around screaming, sit down and cry, or do something else pointless for 1d minutes. then roll vs modified will each minute to snap out. ",
        "Fright result - 22 - Acquire a -10 point Delusion (p 130). ",
        "Fright result - 23 - Acquire a -10 point phobia (p 148) or other -10 point mental disadvantage",
        "Fright result - 24 - Major physical effect, set by GM: hair turns white, age five years overnight, go partially deaf, etc. In game terms, acquire -15 points worth of physical disadvantages (1 yr = -3 points) ",
        "Fright result - 25 - If you already have a Phobia, or other mental disadvantage related to the terror at hand, your CR number becomes one step worse. if already 6 or don't have a related phobia, gain a -10 point phobia or other mental disadvantage. ",
        "Fright result - 26 - Faint for 1d minutes, roll vs HT as well, failure means take 1 hp  of injury as you collapse. roll HT every minute after to recover. gain a -10 point delusion (p. 130) ",
        "Fright result - 27 - Faint for 1d minutes, roll vs HT as well, failure means take 1 hp  of injury as you collapse. roll HT every minute after to recover. gain a -10 point mental Disadvantage.",
        "Fright result - 28 - Light coma. fall unconscious, roll vs HT every 30 minutes to recover. for 6 hours after you come to, all skill and attribute rolls are at -2. ",
        "Fright result - 29 - Fall unconscious for 1d hours. then roll vs HT. failure means you remain in the coma for another 1d hours, and so on. ",
        "Fright result - 30 - Catatonia. stare into space for 1d days. roll HT or remain for another 1d days. if not cared for, lose 1 hp day 1, then take 2 hp day 2, etc. if/when you survive and awaken, rolls at at -2 for how long the catatonia lasted. ",
        "Fright result - 31 - Seizure. You lose control of your body and fall to the ground in a fit lasting 1d minutes and costing 1d FP. Also, roll vs. HT. On a failure, take 1d of injury. On a critical failure, you also lose 1 HT permanently. ",
        "Fright result - 32 - Stricken. You fall to the ground, taking 2d of injury in the form of a mild heart attack or stroke. ",
        "Fright result - 33 - Total panic. you might do /anything/ (the GM rolls 3d: the higher the roll, the more useless your reaction). For instance, you might jump off a cliff to avoid the monster. If you survive, roll vs. Will. failure means another panic. ",
        "Fright result - 34 - Acquire a -15 point Delusion (p. 130) ",
        "Fright result - 35 - Acquire a -15-point Phobia (p. 148) or other mental disadvantage worth -15 points. ",
        "Fright result - 36 - Severe physical effect (hair turns white, age a year for -3 points a year, etc;) but equivalent to -20 points of physical disadvantages. ",
        "Fright result - 37 - Severe physical effect (hair turns white, age a year for -3 points a year, etc;) but equivalent to -30 points of physical disadvantages. ",
        "Fright result - 38 - Coma for 1d hours, HT or remain for another 1d hours, etc. and a -15 point Delusion (p 130). ",
        "Fright result - 39 - Coma for 1d hours, HT or remain for another 1d hours, etc. and a -15 point Mental Disadvantage. (p 130). ",
        "Fright result - 40+ - Coma for 1d hours, HT or remain for another 1d hours, etc. and a -15 point Mental Disadvantage. (p 130). Lose one point of IQ /permanently/. Reduce skills and spells as appropriate."];


function gHit() // default who to BOTNAME
{
    let r1 = new Roll("3d6");
    let r2 = new Roll("1d6");
    bighitresult = r1.roll().total - 1;
    smalldie = r2.roll().total - 1;
    ChatMessage.create({content : hit[bighitresult] + sHit[bighitresult][smalldie], user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
    //sendChat(BOTNAME, hit[bighitresult] + sHit[bighitresult][smalldie]);
}

function gHitm() // default who to BOTNAME
{     
    let r1 = new Roll("3d6");
    let r2 = new Roll("1d6");
    bighitresult = r1.roll().total - 1;
    smalldie = r2.roll().total - 1;
    ChatMessage.create({content : hitm[bighitresult] + sHitm[bighitresult][smalldie], user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
    //sendChat(BOTNAME, hitm[bighitresult] + sHitm[bighitresult][smalldie]);
}

function gFear(msg)
{
    let will = msg.replace("!gfear ", "")
    if (will !== "!gfear")
    {
        let r1 = new Roll("3d6");
        let result = r1.roll().total;
        if (result - will >= 0)
        {
            let r2 = new Roll("3d6");
            let frightroll = r2.roll().total;
            fear_result = frightroll + result - will;
            if (fear_result >= 40)
            {
                //console.log(fear[39]);
                ChatMessage.create({content : fear[39], user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
                //sendChat(BOTNAME, (fear[39]));
                return;
            }
            else
                ChatMessage.create({content : fear[fear_result - 1], user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
                //console.log(fear[fear_result - 1]);
                //sendChat(BOTNAME, fear[fear_result - 1])
        }
        else
            ChatMessage.create({content : "Will/Fear roll was " + result + " - you passed.", user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
            //console.log("Will/Fear roll was " + result + " - you passed.");
            //sendChat(BOTNAME, "Will/Fear roll was " + result + " - you passed.");
    }
    else
        ChatMessage.create({content : "See p. 360-361 for details and modifiers. To use this function properly, please give a will to roll against.", user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
        //console.log("See p. 360-361 for details and modifiers. To use this function properly, please give a will to roll against.");
        //sendChat(BOTNAME, "See p. 360-361 for details and modifiers. To use this function properly, please give a will to roll against.");
}    

var find_length = /([0-9]*\.?[0-9]*)[ ]*(mile[s]?|mi|inch|in|foot|feet|ft|yard[s]?|yd|y|(?:milli|centi|kilo|)meter[s]?|[mkc]?m|ly|light-year[s]?|au|astronomical unit[s]?|parsec[s]?|pc)/i;

function convert_to_yards(numeric, Unit)
{
    console.log("entering convert to yards")
    let meter = 0;
    let unit = Unit.toLowerCase();
    console.log("Assigning Unit")
    console.log("Unit in convert_to_yards is " + unit);
    if  (unit == "meters" || unit == "meter" || unit == "m")
        meter = numeric
    else if (unit == "millimeters"|| unit == "millimeter"|| unit == "mm")
        meter = numeric / 1000
    else if (unit == "kilometers" || unit == "kilometer" || unit == "km")
        meter = numeric * 1000
    else if (unit == "miles" || unit == "mile" || unit == "mi")
        meter = numeric / 0.00062137
    else if (unit == "inches" || unit == "inch" || unit == "in")
        meter = numeric / 39.370
    else if (unit == "centimeters" || unit == "centimeter" || unit == "cm")
        meter = numeric / 100
    else if (unit == "feet" || unit == "foot" || unit == "ft")
        meter = numeric / 3.2808
    else if (unit == "yards" || unit == "yard" || unit == "yd" || unit == "y")
        meter = numeric / (3.2808 / 3)
    else if  (unit == "lightyears" || unit == "lightyear" || unit == "ly")
        meter = numeric * 9460730472580800
    else if (unit == "astronomical units" || unit == "astronomical unit" || unit == "au")
        meter = numeric * 149597870700
    else if (unit == "parsecs" || unit == "parsec" || unit == "pc")
        meter = numeric * 30856776376340068
    return meter * 1.0936
}

function gRange(msg)  // 2 - 6*log(Distance in Yards)
{
    let range = msg.replace("!range ", "")
    if (range !== "!range")
    {
        let source = msg.match(find_length)
        console.log("msg.match(find_length) = " + source);
        if (source == null)
        {
            ChatMessage.create({content : "Give a length along with a unit, such as 10 meters, or 2km.", user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
            //console.log("Give a length along with a unit, such as 10 meters, or 2km.")
            //sendChat(BOTNAME, "Give a length along with a unit, such as 10 meters, or 2km.");
            return;
        }   
        let unit = source[2].toLowerCase();
        let numeric = source[1];
        let yards = convert_to_yards(numeric, unit);
        if (yards == 0)
        {
            ChatMessage.create({content : "0 is not a valid size, Give a non-zero length along with a unit, such as 10 meters, or 2km.", user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
            //console.log("0 is not a valid size, Give a non-zero length along with a unit, such as 10 meters, or 2km.")
            //sendChat(BOTNAME, "0 is not a valid size, Give a non-zero length along with a unit, such as 10 meters, or 2km.");
            return
        }
        let range_result = 2 - 6 * (Math.log(yards) / Math.log(10));
        sign = "";
        if (range_result > 0)
            sign = "+";
        ChatMessage.create({content : "Range/Speed: " + source[1] + " " + source[2] + " = " + sign + Math.round(range_result), user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
        //console.log("Range/Speed: " + source[1] + " " + source[2] + " = " + sign + Math.round(range_result));
        //sendChat(BOTNAME, "Range/Speed: " + source[1] + " " + source[2] + " = " + sign + Math.round(range_result))
    }
    else
    ChatMessage.create({content : "Give a non-zero length along with a unit, such as 10 meters, or 2km - valid units include cm, mi, km, m, y and more.", user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
    //console.log("Give a non-zero length along with a unit, such as 10 meters, or 2km - valid units include cm, mi, km, m, y and more.");
    //sendChat(BOTNAME, "Give a non-zero length along with a unit, such as 10 meters, or 2km - valid units include cm, mi, km, m, y and more.")
}

function gRange2(distance, unit)  // 2 - 6*log(Distance in Yards)
{

    unit = unit.toLowerCase();
    let numeric = distance;
    let yards = convert_to_yards(numeric, unit);
    if (yards == 0)
        return "N/A";
    let range_result = 2 - 6 * (Math.log(yards) / Math.log(10));
    sign = "";
    if (range_result > 0)
        sign = "+";
    return " SSR: "+sign + Math.round(range_result);
    //ChatMessage.create({content : "Range/Speed: " + source[1] + " " + source[2] + " = " + sign + Math.round(range_result), user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
    //console.log("Range/Speed: " + source[1] + " " + source[2] + " = " + sign + Math.round(range_result));
    //sendChat(BOTNAME, "Range/Speed: " + source[1] + " " + source[2] + " = " + sign + Math.round(range_result))  
}

function gSize(msg) // 6*log(length in yards) - 2
{
    let size = msg.replace("!sm ", "")
    if (size !== "!sm")
    {
        let source = msg.match(find_length)
        console.log("msg.match(find_length) = " + source);
        if (source == null)
        {
            ChatMessage.create({content : "Give a length along with a unit, such as 10 meters, or 2km.", user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
            //console.log("Give a length along with a unit, such as 10 meters, or 2km.")
            //sendChat(BOTNAME, "Give a length along with a unit, such as 10 meters, or 2km ");
            return;
        }   
        let unit = source[2].toLowerCase();
        let numeric = source[1];
        let yards = convert_to_yards(numeric, unit);
        if (yards == 0)
        {
            ChatMessage.create({content : "0 is not a valid size, Give a non-zero length along with a unit, such as 10 meters, or 2km.", user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
            //console.log("0 is not a valid size, Give a non-zero length along with a unit, such as 10 meters, or 2km.")
            //sendChat(BOTNAME, "0 is not a valid size, Give a non-zero length along with a unit, such as 10 meters, or 2km.");
            return
        }
        console.log("caveman debug yards = " + yards)
        var size_result = 6 * (Math.log(yards) / Math.log(10)) -2;
        sign = "";
        if (size_result > 0)
            sign = "+"
        ChatMessage.create({content : "Size Modifier: " + source[1] + " " + source[2] + " = " + sign + Math.round(size_result), user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
        //console.log("Size Modifier: " + source[1] + " " + source[2] + " = " + sign + Math.round(size_result))
        //sendChat(BOTNAME, "Size Modifier: " + source[1] + " " + source[2] + " = " + sign + Math.round(size_result))
    }
    else
        ChatMessage.create({content : "Give a non-zero length along with a unit, such as 10 meters, or 2km - valid units include cm, mi, km, m, y and more.", user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
        //console.log("Give a non-zero length along with a unit, such as 10 meters, or 2km - valid units include cm, mi, km, m, y and more.")
        //sendChat(BOTNAME, "Give a non-zero length along with a unit, such as 10 meters, or 2km - valid units include cm, mi, km, m, y and more.")
}


Hooks.on("chatMessage", (log, content, data) => {
    // if content = command - make a new chat card with info 
    // return false to prevent original message from displaying
    //ChatMessage.create({content : "hello world", user : game.user._id});
    // THE LINE ABOVE WORKS!
    //console.log("The Message contents is/are: " + content);
    //return false;
    if(content.indexOf("!ghelp") == 0) 
    {
      
        ChatMessage.create({content : "use the ! before commands. commands are as follows: g, gmalf, gfear, gcrit, ghcrit, gfail, gufail, ghit, range, size, sm, speed", user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
        //sendChat(BOTNAME, "use the ! before commands. commands are as follows: gmalf, gfear, gcrit, ghcrit, gfail, gufail, ghit, ghitm, range, size, sm, speed");
        return(false);
    }
    else if(content.indexOf("!ghit") == 0) //Ghit Detectorhit location
    {
        gHit();
        return(false);
    }
    else if(content.indexOf("!ghit") == 0) //Ghitm Detectorhit location for melee (houserule)
    {
        gHitm();
        return(false);
    }
    else if(content.indexOf("!gcrit") == 0) // critical hit
    {
        let r1 = new Roll("3d6");
        ChatMessage.create({content : crit[r1.roll().total-1], user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
        //console.log(crit[r1.roll().total-1]);  
        //sendChat(BOTNAME, crit[roll3d6()-1]);
        return(false);
    }
    else if(content.indexOf("!ghcrit") == 0) // critical head hit
    {
        let r1 = new Roll("3d6");
        ChatMessage.create({content : hcrit[r1.roll().total-1], user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
        //console.log(hcrit[r1.roll().total-1]);
        //sendChat(BOTNAME, hcrit[roll3d6()-1]);
        return(false);
    }
    else if(content.indexOf("!gfail") == 0) // critical failure
    {
        let r1 = new Roll("3d6");
        ChatMessage.create({content : fail[r1.roll().total-1], user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
        //console.log(fail[r1.roll().total-1]);
        //sendChat(BOTNAME, fail[roll3d6()-1]);
        return(false);
    }
    else if(content.indexOf("!gufail") == 0) // unarmted critical failure
    {
        let r1 = new Roll("3d6");
        ChatMessage.create({content : ufail[r1.roll().total-1], user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
        //console.log(ufail[r1.roll().total-1]);
        //sendChat(BOTNAME, ufail[roll3d6()-1]);
        return(false);
    }
    else if(content.indexOf("!gmalf") == 0) // weapon malfunction
    {
        let r1 = new Roll("3d6");
        ChatMessage.create({content : malf[r1.roll().total-1], user : game.user._id, speaker: {alias: "GURPSBOT: "+game.user.name},type: CONST.CHAT_MESSAGE_TYPES.OTHER});
        //console.log(malf[r1.roll().total-1]);
        //sendChat(BOTNAME, malf[roll3d6()-1]);
        return(false);
    }
    else if(content.indexOf("!gfear") == 0) // fear rolls!
    {
        gFear(content);
        return(false);
    }
    else if((content.indexOf("!range") == 0 || content.indexOf("!speed") == 0)) // range/speed!!
    {
        gRange(content);
        return(false);
    }
    else if(content.indexOf("!size") == 0) // Size Modifier!!
    {
        gSize(content);
        return(false);
    }
    
});



function GURPSRuler (destination, {gridSpaces=true}={}) {
    const dest = new PIXI.Point(...canvas.grid.getCenter(destination.x, destination.y)),
          waypoints = this.waypoints.concat([dest]),
          r = this.ruler;
    this.destination = dest;
    // Get grid highlight layer
    const hlt = canvas.grid.highlightLayers[this.name];
    hlt.clear();
    r.clear();
    // Track some measurement data
    let isMulti = waypoints.length > 2;
    let totalDistance = 0;
    let units = canvas.scene.data.gridUnits;
    // Iterate over waypoints
    for ( let [i, dest] of waypoints.slice(1).entries() ) {
      let origin = waypoints[i],
          label = this.labels.children[i];
      // Compute distance between the two points and bail out if we have not measured far enough yet
      let ray = new Ray(origin, dest);
      if ( ray.distance < (0.2 * canvas.grid.size)) {
        if ( label ) label.visible = false;
        continue;
      }
      // Compute additional Ray data
      let distance = Math.round(canvas.grid.measureDistance(ray.A, ray.B, {gridSpaces}) * 100) / 100;
      totalDistance += distance;
      // Draw line segment
      r.lineStyle(6, 0x000000, 0.5).moveTo(origin.x, origin.y).lineTo(dest.x, dest.y)
       .lineStyle(4, this.color, 0.25).moveTo(origin.x, origin.y).lineTo(dest.x, dest.y);
      // Draw the distance label just after the endpoint of the segment
      if ( label ) {
        // Construct label text
        let isLast = i === waypoints.length - 2,
            text = `${distance} ${units}`+ gRange2(totalDistance,units);
            console.log("the original label is: " + `${distance} ${units}`);
            //console.log("The original label distance +5 is: "`${distance}+5 ${units}`)
        if ( isMulti && isLast ) {
          totalDistance = Math.round(totalDistance * 100) / 100;
          text += ` [${totalDistance} ${units}`+gRange2(totalDistance,units)+"]";
          console.log(`${totalDistance} ${units}`);
        }
        label.text = text;
        // Toggle label opacity
        label.alpha = isLast ? 1.0 : 0.5;
        label.visible = true;
        // Set label position
        let labelPosition = ray.project((ray.distance + 50) / ray.distance);
        label.position.set(labelPosition.x, labelPosition.y);
      }
      // Highlight grid positions
      this._highlightMeasurement(ray);
    }
    // Draw endpoints
    for ( let point of waypoints ) {
      r.lineStyle(2, 0x000000, 0.5).beginFill(this.color, 0.25).drawCircle(point.x, point.y, 8);
    }
  }