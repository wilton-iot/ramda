
define([
    "ramda/test/addIndex.js",
    "ramda/test/add.js",
    "ramda/test/adjust.js",
    "ramda/test/all.js",
    "ramda/test/allPass.js",
    "ramda/test/always.js",
    "ramda/test/and.js",
    "ramda/test/any.js",
    "ramda/test/anyPass.js",
    "ramda/test/aperture.js",
    "ramda/test/ap.js",
    "ramda/test/append.js",
    "ramda/test/apply.js",
    "ramda/test/applySpec.js",
    "ramda/test/ascend.js",
    "ramda/test/assoc.js",
    "ramda/test/assocPath.js",
    "ramda/test/binary.js",
    "ramda/test/bind.js",
    "ramda/test/both.js",
    "ramda/test/call.js",
    "ramda/test/chain.js",
    "ramda/test/clamp.js",
    "ramda/test/clone.js",
    "ramda/test/comparator.js",
    "ramda/test/complement.js",
    "ramda/test/compose.js",
    "ramda/test/composeK.js",
    "ramda/test/composeP.js",
    "ramda/test/concat.js",
    "ramda/test/cond.js",
    "ramda/test/construct.js",
    "ramda/test/constructN.js",
    "ramda/test/contains.js",
    "ramda/test/converge.js",
    "ramda/test/countBy.js",
    "ramda/test/curry.js",
    "ramda/test/curryN.js",
    "ramda/test/dec.js",
    "ramda/test/defaultTo.js",
    "ramda/test/descend.js",
    "ramda/test/difference.js",
    "ramda/test/differenceWith.js",
    "ramda/test/dissoc.js",
    "ramda/test/dissocPath.js",
    "ramda/test/divide.js",
    "ramda/test/drop.js",
    "ramda/test/dropLast.js",
    "ramda/test/dropLastWhile.js",
    "ramda/test/dropRepeats.js",
    "ramda/test/dropRepeatsWith.js",
    "ramda/test/dropWhile.js",
    "ramda/test/either.js",
    "ramda/test/empty.js",
    "ramda/test/endsWith.js",
    "ramda/test/eqBy.js",
    "ramda/test/eqProps.js",
    "ramda/test/equals.js",
    "ramda/test/evolve.js",
    "ramda/test/filter.js",
    "ramda/test/findIndex.js",
    "ramda/test/find.js",
    "ramda/test/findLastIndex.js",
    "ramda/test/findLast.js",
    "ramda/test/F.js",
    "ramda/test/flatten.js",
    "ramda/test/flip.js",
    "ramda/test/forEach.js",
    "ramda/test/forEachObjIndexed.js",
    "ramda/test/fromPairs.js",
    "ramda/test/groupBy.js",
    "ramda/test/groupWith.js",
    "ramda/test/gte.js",
    "ramda/test/gt.js",
    "ramda/test/hasIn.js",
    "ramda/test/has.js",
    "ramda/test/head.js",
    "ramda/test/identical.js",
    "ramda/test/identity.js",
    "ramda/test/ifElse.js",
    "ramda/test/inc.js",
    "ramda/test/indexBy.js",
    "ramda/test/indexOf.js",
    "ramda/test/init.js",
    "ramda/test/innerJoin.js",
    "ramda/test/insertAll.js",
    "ramda/test/insert.js",
    "ramda/test/intersection.js",
    "ramda/test/intersectionWith.js",
    "ramda/test/intersperse.js",
    "ramda/test/into.js",
    "ramda/test/invariants.js",
    "ramda/test/invert.js",
    "ramda/test/invertObj.js",
    "ramda/test/isEmpty.js",
    "ramda/test/is.js",
    "ramda/test/isNil.js",
    "ramda/test/join.js",
    "ramda/test/juxt.js",
    "ramda/test/keysIn.js",
    "ramda/test/keys.js",
    "ramda/test/lastIndexOf.js",
    "ramda/test/last.js",
    "ramda/test/length.js",
    "ramda/test/lenses.js",
    "ramda/test/lensIndex.js",
    "ramda/test/lensPath.js",
    "ramda/test/lensProp.js",
    "ramda/test/lift.js",
    "ramda/test/liftN.js",
    "ramda/test/lte.js",
    "ramda/test/lt.js",
    "ramda/test/mapAccum.js",
    "ramda/test/mapAccumRight.js",
    "ramda/test/map.js",
    "ramda/test/mapObjIndexed.js",
    "ramda/test/match.js",
    "ramda/test/mathMod.js",
    "ramda/test/maxBy.js",
    "ramda/test/max.js",
    "ramda/test/mean.js",
    "ramda/test/median.js",
    "ramda/test/memoize.js",
    "ramda/test/memoizeWith.js",
    "ramda/test/mergeAll.js",
    "ramda/test/mergeDeepLeft.js",
    "ramda/test/mergeDeepRight.js",
    "ramda/test/mergeDeepWith.js",
    "ramda/test/mergeDeepWithKey.js",
    "ramda/test/merge.js",
    "ramda/test/mergeWith.js",
    "ramda/test/mergeWithKey.js",
    "ramda/test/minBy.js",
    "ramda/test/min.js",
    "ramda/test/modulo.js",
    "ramda/test/multiply.js",
    "ramda/test/nAry.js",
    "ramda/test/negate.js",
    "ramda/test/none.js",
    "ramda/test/not.js",
    "ramda/test/nthArg.js",
    "ramda/test/nth.js",
    "ramda/test/objOf.js",
    "ramda/test/of.js",
    "ramda/test/o.js",
    "ramda/test/omit.js",
    "ramda/test/once.js",
    "ramda/test/or.js",
    "ramda/test/pair.js",
    "ramda/test/partial.js",
    "ramda/test/partialRight.js",
    "ramda/test/partition.js",
    "ramda/test/pathEq.js",
    "ramda/test/path.js",
    "ramda/test/pathOr.js",
    "ramda/test/pathSatisfies.js",
    "ramda/test/pickAll.js",
    "ramda/test/pickBy.js",
    "ramda/test/pick.js",
    "ramda/test/pipe.js",
    "ramda/test/pipeK.js",
    "ramda/test/pipeP.js",
    "ramda/test/pluck.js",
    "ramda/test/prepend.js",
    "ramda/test/product.js",
    "ramda/test/project.js",
    "ramda/test/propEq.js",
    "ramda/test/propIs.js",
    "ramda/test/prop.js",
    "ramda/test/propOr.js",
    "ramda/test/propSatisfies.js",
    "ramda/test/props.js",
    "ramda/test/range.js",
    "ramda/test/reduceBy.js",
    "ramda/test/reduced.js",
    "ramda/test/reduce.js",
    "ramda/test/reduceRight.js",
    "ramda/test/reduceWhile.js",
    "ramda/test/reject.js",
    "ramda/test/remove.js",
    "ramda/test/repeat.js",
    "ramda/test/replace.js",
    "ramda/test/reverse.js",
    "ramda/test/scan.js",
    "ramda/test/sequence.js",
    "ramda/test/slice.js",
    "ramda/test/sortBy.js",
    "ramda/test/sort.js",
    "ramda/test/sortWith.js",
    "ramda/test/splitAt.js",
    "ramda/test/splitEvery.js",
    "ramda/test/split.js",
    "ramda/test/splitWhen.js",
    "ramda/test/startsWith.js",
    "ramda/test/subtract.js",
    "ramda/test/sum.js",
    "ramda/test/symmetricDifference.js",
    "ramda/test/symmetricDifferenceWith.js",
    "ramda/test/tail.js",
    "ramda/test/take.js",
    "ramda/test/takeLast.js",
    "ramda/test/takeLastWhile.js",
    "ramda/test/takeWhile.js",
    "ramda/test/tap.js",
    "ramda/test/test.js",
    "ramda/test/times.js",
    "ramda/test/T.js",
    "ramda/test/toLower.js",
    "ramda/test/toPairsIn.js",
    "ramda/test/toPairs.js",
    "ramda/test/toString.js",
    "ramda/test/toUpper.js",
    "ramda/test/transduce.js",
    "ramda/test/transpose.js",
    "ramda/test/traverse.js",
    "ramda/test/trim.js",
    "ramda/test/tryCatch.js",
    "ramda/test/type.js",
    "ramda/test/unapply.js",
    "ramda/test/unary.js",
    "ramda/test/uncurryN.js",
    "ramda/test/unfold.js",
    "ramda/test/union.js",
    "ramda/test/unionWith.js",
    "ramda/test/uniqBy.js",
    "ramda/test/uniq.js",
    "ramda/test/uniqWith.js",
    "ramda/test/unless.js",
    "ramda/test/unnest.js",
    "ramda/test/until.js",
    "ramda/test/update.js",
    "ramda/test/useWith.js",
    "ramda/test/valuesIn.js",
    "ramda/test/values.js",
    "ramda/test/when.js",
    "ramda/test/whereEq.js",
    "ramda/test/where.js",
    "ramda/test/without.js",
    "ramda/test/xprod.js",
    "ramda/test/zip.js",
    "ramda/test/zipObj.js",
    "ramda/test/zipWith.js"
], function() {
    return {
        main: function() {
        }
    };
});
